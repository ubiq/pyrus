import { APP_STATE, mockAppState, simpleRender } from 'test-utils';

import { fAccounts, fAssets } from '@fixtures';
import { translateRaw } from '@translations';

import InteractWithContractsFlow from './InteractWithContractsFlow';

jest.mock('@vendor', () => {
  return {
    ...jest.requireActual('@vendor'),
    FallbackProvider: jest.fn().mockImplementation(() => ({
      estimateGas: jest.fn().mockResolvedValue(21000),
      getTransactionCount: jest.fn().mockResolvedValue(10),
      getBlock: jest.fn().mockResolvedValue({
        baseFeePerGas: '10000000000',
        gasLimit: '15000000'
      }),
      getBalance: jest.fn().mockResolvedValue('10000000000')
    }))
  };
});

function getComponent() {
  return simpleRender(<InteractWithContractsFlow />, {
    initialRoute: '/interact-with-contracts',
    initialState: mockAppState({
      accounts: fAccounts,
      assets: fAssets,
      networks: APP_STATE.networks
    })
  });
}

describe('InteractWithContractsFlow', () => {
  it('renders', async () => {
    const { getByText } = getComponent();
    expect(
      getByText(translateRaw('INTERACT_WITH_CONTRACTS'), { exact: false })
    ).toBeInTheDocument();
  });
});
