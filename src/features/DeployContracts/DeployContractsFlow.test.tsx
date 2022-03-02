import { APP_STATE, mockAppState, simpleRender } from 'test-utils';

import { fAccounts, fAssets } from '@fixtures';
import { translateRaw } from '@translations';
import { WalletId } from '@types';

import DeployContractsFlow from './DeployContractsFlow';

jest.mock('@vendor', () => {
  return {
    ...jest.requireActual('@vendor'),
    FallbackProvider: jest.fn().mockImplementation(() => ({
      estimateGas: jest.fn().mockResolvedValue(21000),
      getTransactionCount: jest.fn().mockResolvedValue(10),
      getBlock: jest.fn().mockResolvedValue({
        baseFeePerGas: '10000000000',
        gasLimit: '15000000'
      })
    })),
    getBalance: jest.fn().mockResolvedValue('10000000000')
  };
});

function getComponent() {
  return simpleRender(<DeployContractsFlow />, {
    initialRoute: '/deploy-contracts',
    initialState: mockAppState({
      accounts: [{ ...fAccounts[1], wallet: WalletId.LEDGER_NANO_S }],
      assets: fAssets,
      networks: APP_STATE.networks.map((n) => ({ ...n, supportsEIP1559: true }))
    })
  });
}

describe('DeployContractsFlow', () => {
  it('renders', async () => {
    const { getByText } = getComponent();
    expect(getByText(translateRaw('DEPLOY_CONTRACTS'), { exact: false })).toBeInTheDocument();
  });
});
