jest.mock("react-native-image-crop-picker", () => {
  return {
    openPicker: jest.fn().mockImplementation(() => Promise.resolve()),
    openCamera: jest.fn().mockImplementation(() => Promise.resolve()),
  };
});
