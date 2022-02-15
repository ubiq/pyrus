import { Contract } from '@types';

import Ethereum from './eth.json';
import Ropsten from './ropsten.json';
import UBQ from './ubq.json';

// @todo[Types]: key should really be a partial of NetworkId
interface Contracts {
  [key: string]: Contract[];
}

export const Contracts: Contracts = {
  Ethereum,
  Ropsten,
  UBQ
};
