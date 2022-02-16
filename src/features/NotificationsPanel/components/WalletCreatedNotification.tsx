import champagneIcon from '@assets/images/icn-champagne-2.svg';
import translate from '@translations';

import NotificationWrapper from './NotificationWrapper';

interface NotificationProps {
  address: string;
}

export default function WalletCreatedNotification({ address }: NotificationProps) {
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
      title={translate('NOTIFICATIONS_WALLET_CREATED_TITLE')}
      description={translate('NOTIFICATIONS_WALLET_CREATED_DESCRIPTION', {
        $address: address
      })}
      additionalDescription={translate('NOTIFICATIONS_WALLET_CREATED_DESCRIPTION_ADD')}
      resources={<></>}
    />
  );
}
