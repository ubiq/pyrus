import { ComponentProps } from 'react';

import selectEvent from 'react-select-event';
import { mockAppState, screen, simpleRender } from 'test-utils';

import { fNetworks } from '@fixtures';

import NetworkSelector from './NetworkSelector';

type Props = ComponentProps<typeof NetworkSelector>;
const defaultProps: Props = {
  onChange: jest.fn()
};

function getComponent(props = defaultProps) {
  return simpleRender(
    <form role="form">
      <NetworkSelector {...props} />
    </form>,
    { initialState: mockAppState({ networks: fNetworks }) }
  );
}

describe('NetworkSelector', () => {
  test('it displays placeholder by default', async () => {
    getComponent();
    expect(screen.getByText(/select network/i)).toBeInTheDocument();
  });

  test('it displays the list of networks on click', async () => {
    getComponent();
    await selectEvent.openMenu(screen.getByLabelText(/network/i));

    fNetworks.map((n) => n.name).forEach((n) => expect(screen.getByText(n)).toBeInTheDocument());
  });

  test('can apply a filter predicate', async () => {
    const target = fNetworks[1];
    getComponent({ ...defaultProps, filter: (n) => n.name !== target.name });
    await selectEvent.openMenu(screen.getByLabelText(/network/i));

    expect(screen.getAllByTestId(/network-selector-option/i)).toHaveLength(fNetworks.length - 1);
    expect(screen.queryByText(target.name)).not.toBeInTheDocument();
  });
});
