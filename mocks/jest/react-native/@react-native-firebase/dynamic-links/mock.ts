jest.mock("@react-native-firebase/dynamic-links", () => {
  return () => {
    return {
      getInitialLink: jest.fn(() => Promise.resolve()),
      onLink: jest.fn(),
    };
  };
});
