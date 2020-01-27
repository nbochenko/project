module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
        '@components': './src/components',
        '@services': './src/services',
        '@screens': './src/screens',
        '@config': './src/config',
        }
      }
    ]
  ]
};
