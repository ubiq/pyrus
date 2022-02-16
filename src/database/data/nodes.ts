import { INFURA_API_KEY, POCKET_API_KEY } from '@config';
import { NetworkUtils } from '@services/Store/Network/utils';
import { NetworkId, NodeType, StaticNodeConfig } from '@types';

export const NODES_CONFIG: { [key in NetworkId]: StaticNodeConfig[] } = {
  Ethereum: [
    {
      name: NetworkUtils.makeNodeName('ETH', 'mycrypto'),
      type: NodeType.RPC,
      service: 'MyCrypto',
      url: 'https://api.mycryptoapi.com/eth'
    },
    {
      name: NetworkUtils.makeNodeName('ETH', 'ethscan'),
      type: NodeType.ETHERSCAN,
      service: 'Etherscan',
      url: 'https://api.etherscan.io/api'
    },
    {
      name: NetworkUtils.makeNodeName('ETH', 'infura'),
      type: NodeType.INFURA,
      service: 'Infura',
      url: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`
    },
    {
      name: NetworkUtils.makeNodeName('ETH', 'pocket'),
      type: NodeType.POCKET,
      service: 'Pocket',
      url: `https://eth-mainnet.gateway.pokt.network/v1/lb/${POCKET_API_KEY}`,
      disableByDefault: false
    }
  ],

  Ropsten: [
    {
      name: NetworkUtils.makeNodeName('Ropsten', 'infura'),
      type: NodeType.INFURA,
      service: 'Infura',
      url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`
    },
    {
      name: NetworkUtils.makeNodeName('Ropsten', 'ethscan'),
      type: NodeType.ETHERSCAN,
      service: 'Etherscan',
      url: 'https://api-ropsten.etherscan.io/api'
    }
  ],

  UBQ: [
    {
      name: NetworkUtils.makeNodeName('UBQ', 'ubiqscan'),
      type: NodeType.RPC,
      service: 'ubiqscan.io',
      url: 'https://rpc1.ubiqscan.io'
    },
    {
      name: NetworkUtils.makeNodeName('UBQ', 'ubiqsmart'),
      type: NodeType.RPC,
      service: 'ubiqsmart.com',
      url: 'https://rpc.ubiqsmart.com'
    }
  ],

  MATIC: [
    {
      name: NetworkUtils.makeNodeName('MATIC', 'maticvigil'),
      type: NodeType.RPC,
      service: 'Maticvigil',
      url: 'https://rpc-mainnet.maticvigil.com'
    },
    {
      name: NetworkUtils.makeNodeName('MATIC', 'quicknode'),
      type: NodeType.RPC,
      service: 'Quicknode',
      url: 'https://rpc-mainnet.matic.quiknode.pro'
    },
    {
      name: NetworkUtils.makeNodeName('MATIC', 'chainstacklabs'),
      type: NodeType.RPC,
      service: 'Chainstacklabs',
      url: 'https://matic-mainnet.chainstacklabs.com'
    },
    {
      name: NetworkUtils.makeNodeName('MATIC', 'bwarelabs'),
      type: NodeType.RPC,
      service: 'Bwarelabs',
      url: 'https://matic-mainnet-full-rpc.bwarelabs.com'
    },
    {
      name: NetworkUtils.makeNodeName('MATIC', 'matic'),
      type: NodeType.RPC,
      service: 'Matic',
      url: 'https://rpc-mainnet.matic.network'
    }
  ],
  xDAI: [
    {
      name: NetworkUtils.makeNodeName('xDAI', 'xdaichain.com'),
      type: NodeType.RPC,
      service: 'xdaichain.com',
      url: 'https://rpc.xdaichain.com/'
    },
    {
      name: NetworkUtils.makeNodeName('xDAI', 'poanetwork.dev'),
      type: NodeType.RPC,
      service: 'poanetwork.dev',
      url: 'https://xdai.poanetwork.dev/'
    }
  ],
  SmartChain: [
    {
      name: NetworkUtils.makeNodeName('SmartChain', 'bsc-dataseed.binance.org'),
      type: NodeType.RPC,
      service: 'bsc-dataseed.binance.org',
      url: 'https://bsc-dataseed.binance.org/'
    },
    {
      name: NetworkUtils.makeNodeName('SmartChain', 'bsc-dataseed1.defibit.io'),
      type: NodeType.RPC,
      service: 'bsc-dataseed1.defibit.io',
      url: 'https://bsc-dataseed1.defibit.io/'
    },
    {
      name: NetworkUtils.makeNodeName('SmartChain', 'bsc-dataseed1.ninicoin.io'),
      type: NodeType.RPC,
      service: 'bsc-dataseed1.ninicoin.io',
      url: 'https://bsc-dataseed1.ninicoin.io/'
    }
  ]
};
