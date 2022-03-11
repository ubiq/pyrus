import { NotificationTemplates } from '@types';

import {
  GetHardwareWalletNotification,
  OnboardingPleaseUnderstandNotification,
  OnboardingResponsibleNotification,
  SaveDashboardNotification,
  WalletAddedNotification,
  WalletCreatedNotification,
  WalletNotAddedNotification,
  WalletsAddedNotification,
  WalletsNotAddedNotification
} from './components';
import {
  getHardwareWalletCheck,
  onboardingPleaseUnderstandCheck,
  onboardingResponsibleCheck,
  saveSettingsCheck
} from './helpers';
import { NotificationsConfigsProps } from './types';

export const notificationsConfigs: NotificationsConfigsProps = {
  [NotificationTemplates.walletCreated]: {
    layout: WalletCreatedNotification,
    showOneTime: true,
    dismissOnOverwrite: true
  },
  [NotificationTemplates.walletAdded]: {
    layout: WalletAddedNotification,
    showOneTime: true,
    dismissOnOverwrite: true
  },
  [NotificationTemplates.walletsAdded]: {
    layout: WalletsAddedNotification,
    showOneTime: true,
    dismissOnOverwrite: true
  },
  [NotificationTemplates.walletNotAdded]: {
    layout: WalletNotAddedNotification,
    showOneTime: true,
    dismissOnOverwrite: true
  },
  [NotificationTemplates.walletsNotAdded]: {
    layout: WalletsNotAddedNotification,
    showOneTime: true,
    dismissOnOverwrite: true
  },
  [NotificationTemplates.saveSettings]: {
    layout: SaveDashboardNotification,
    repeatInterval: 86400,
    condition: saveSettingsCheck
  },
  [NotificationTemplates.getHardwareWallet]: {
    layout: GetHardwareWalletNotification,
    dismissForever: true,
    condition: getHardwareWalletCheck
  },
  [NotificationTemplates.onboardingPleaseUnderstand]: {
    layout: OnboardingPleaseUnderstandNotification,
    dismissForever: true,
    condition: onboardingPleaseUnderstandCheck,
    preventDismisExisting: true
  },
  [NotificationTemplates.onboardingResponsible]: {
    layout: OnboardingResponsibleNotification,
    dismissForever: true,
    condition: onboardingResponsibleCheck,
    preventDismisExisting: true
  }
};
