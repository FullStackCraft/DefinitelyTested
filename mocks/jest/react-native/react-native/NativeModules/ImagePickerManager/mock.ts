import {NativeModules} from 'react-native';

NativeModules.ImagePickerManager = {
    showImagePicker: jest.fn(),
    launchCamera: jest.fn(),
    launchImageLibrary: jest.fn(),
  };