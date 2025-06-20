import expoConfig from 'eslint-config-expo/flat.js';
import prettier from 'eslint-plugin-prettier';
import reactNative from 'eslint-plugin-react-native';

export default [
  ...expoConfig,
  {
    plugins: {
      prettier,
      'react-native': reactNative,
    },
    rules: {
      'prettier/prettier': 'error',
      'react-native/no-unused-styles': 'error',
    },
  },
];