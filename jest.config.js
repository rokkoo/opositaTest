module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './setupTests.js',
  ],
  // https://github.com/oblador/react-native-vector-icons/issues/1324#issuecomment-823185061
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-vector-icons|react-native-safe-area-context)/)',
  ],
  setupFiles: [
    './app/services/__mocks__/bookService.ts',
    './app/navigation/__mocks__/navigation.ts',
    './jest-setup.js',
  ],
};
