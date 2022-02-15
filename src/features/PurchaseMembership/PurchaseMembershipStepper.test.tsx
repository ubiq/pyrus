import React from 'react';

import { BigNumber } from '@ethersproject/bignumber';
import { APP_STATE, mockAppState, simpleRender } from 'test-utils';

import { fAccounts, fAssets, fDAI, fSettings } from '@fixtures';
import { translateRaw } from '@translations';

import PurchaseMembershipStepper from './PurchaseMembershipStepper';

jest.mock('@vendor', () => {
  return {
    ...jest.requireActual('@vendor'),
    FallbackProvider: jest.fn().mockImplementation(() => ({
      estimateGas: jest.fn().mockResolvedValue(21000),
      getTransactionCount: jest.fn().mockResolvedValue(1),
      call: jest
        .fn()
        .mockResolvedValue('0x0000000000000000000000000000000000000000000000000000000000000000')
    }))
  };
});

/* Test components */
describe('PurchaseMembershipStepper', () => {
  const renderComponent = () =>
    simpleRender(<PurchaseMembershipStepper />, {
      initialState: mockAppState({
        assets: fAssets,
        settings: fSettings,
        networks: APP_STATE.networks,
        accounts: [
          {
            ...fAccounts[0],
            assets: [
              ...fAccounts[0].assets,
              { ...fDAI, balance: BigNumber.from('0x15af1d78b58c400000') }
            ]
          }
        ]
      })
    });

  it('renders the first step in the flow', () => {
    const { getByText } = renderComponent();
    const selector = translateRaw('PURCHASE_MEMBERSHIP');
    expect(getByText(selector, { selector: 'p' })).toBeInTheDocument();
  });
});
