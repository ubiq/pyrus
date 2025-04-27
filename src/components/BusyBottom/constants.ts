import { getKBHelpArticle, KB_HELP_ARTICLE, ROUTE_PATHS, WALLETS_CONFIG } from '@config';
import { BusyBottomConfig, WalletId } from '@types';
import { getWeb3Config } from '@utils';

const web3Config = getWeb3Config();

const SUPPORT_LINK = {
  copy: 'BUSY_BOTTOM_SUPPORT',
  link: 'https://discord.com/invite/XaqzJB4',
  external: true
};

export const configs: Record<
  BusyBottomConfig,
  { copy: string; link: string; copyVariables?: any; external?: boolean }[]
> = {
  GENERAL: [
    { copy: 'BUSY_BOTTOM_GENERAL_3', link: ROUTE_PATHS.SETTINGS_IMPORT.path },
    SUPPORT_LINK
  ],
  METAMASK_SIGN: [
    {
      copy: 'BUSY_BOTTOM_TROUBLESHOOTING',
      link: getKBHelpArticle(KB_HELP_ARTICLE.MIGRATE_TO_METAMASK),
      external: true
    },
    SUPPORT_LINK
  ],
  METAMASK_UNLOCK: [
    {
      copy: 'BUSY_BOTTOM_GET_WEB3',
      copyVariables: { $app: WALLETS_CONFIG[WalletId.METAMASK].name },
      link: WALLETS_CONFIG[WalletId.METAMASK].install!.getItLink!,
      external: true
    },
    {
      copy: 'BUSY_BOTTOM_METAMASK_1',
      link: getKBHelpArticle(KB_HELP_ARTICLE.MIGRATE_TO_METAMASK),
      external: true
    },
    SUPPORT_LINK
  ],
  GENERIC_WEB3: [
    {
      copy: 'BUSY_BOTTOM_GET_WEB3',
      copyVariables: { $app: web3Config.name },
      link: web3Config.install?.getItLink ?? WALLETS_CONFIG[WalletId.METAMASK].install!.getItLink!,
      external: true
    },
    SUPPORT_LINK
  ],
  LEDGER: [
    {
      copy: 'BUSY_BOTTOM_TROUBLESHOOTING',
      link: getKBHelpArticle(KB_HELP_ARTICLE.LEDGER_TROUBLESHOOTING),
      external: true
    },
    SUPPORT_LINK
  ],
  TREZOR: [
    {
      copy: 'BUSY_BOTTOM_TROUBLESHOOTING',
      link: getKBHelpArticle(KB_HELP_ARTICLE.TREZOR_TROUBLESHOOTING),
      external: true
    },
    SUPPORT_LINK
  ],
  GRIDPLUS: [SUPPORT_LINK],
  WALLETCONNECT: [
    {
      copy: 'BUSY_BOTTOM_WALLETCONNECT_1',
      link: getKBHelpArticle(KB_HELP_ARTICLE.WHAT_IS_WALLETCONNECT),
      external: true
    },
    {
      copy: 'BUSY_BOTTOM_WALLETCONNECT_2',
      link: getKBHelpArticle(KB_HELP_ARTICLE.HOW_TO_USE_WALLETCONNECT),
      external: true
    },
    SUPPORT_LINK
  ],
  SUPPORT: [SUPPORT_LINK]
};
