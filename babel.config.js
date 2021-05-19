module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@screens': './src/screens',
          '@routers': './src/routers',
          '@redux': './src/redux',
          '@assets': './src/assets',
          '@components': './src/components',
          '@configs': './src/configs',
          '@resources': './src/resources',
          '@app/utils': './src/utils'
        },
      },
    ],
  ],
};
