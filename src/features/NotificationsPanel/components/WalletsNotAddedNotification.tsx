import sadWalletIcon from '@assets/images/icn-sad-wallet.svg';
import translate from '@translations';

import NotificationWrapper from './NotificationWrapper';

export default function WalletsNotAddedNotification() {
  return (
    <NotificationWrapper
      alignCenterOnSmallScreen={true}
      leftImg={{
        src: sadWalletIcon,
        width: '100px',
        height: '100px',
        transform: 'rotateY(180deg)',
        hideOnMobile: true
      }}
      title={translate('NOTIFICATIONS_WALLET_NOT_ADDED_TITLE')}
      description={translate('NOTIFICATIONS_WALLET_NOT_ADDED_DESCRIPTION')}
      resources={<></>}
    />
  );
}
