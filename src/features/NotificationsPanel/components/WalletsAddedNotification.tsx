import champagneIcon from '@assets/images/icn-champagne-2.svg';
import translate from '@translations';

import NotificationWrapper from './NotificationWrapper';

interface NotificationProps {
  numOfAccounts: number;
}

export default function WalletsAdded({ numOfAccounts }: NotificationProps) {
  return (
    <NotificationWrapper
      alignCenterOnSmallScreen={true}
      leftImg={{
        src: champagneIcon,
        width: '100px',
        height: '100px',
        transform: 'rotateY(180deg)',
        hideOnMobile: true
      }}
      title={translate('NOTIFICATIONS_WALLETS_ADDED_TITLE', {
        $numNewAccounts: numOfAccounts.toString()
      })}
      additionalDescription={translate('NOTIFICATIONS_WALLET_DESCRIPTION_ADD')}
      resources={<></>}
    />
  );
}
