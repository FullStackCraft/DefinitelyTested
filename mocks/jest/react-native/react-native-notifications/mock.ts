jest.mock("react-native-notifications", () => {
  return {
    Notifications: {
      getInitialNotification: jest.fn(() => Promise.resolve()),
      registerRemoteNotifications: jest.fn(),
      events: () => {
        return {
          registerRemoteNotificationsRegistered: jest.fn(),
          registerRemoteNotificationsRegistrationFailed: jest.fn(),
          registerNotificationReceivedForeground: jest.fn(),
          registerNotificationReceivedBackground: jest.fn(),
          registerNotificationOpened: jest.fn(),
        };
      },
    },
  };
});
