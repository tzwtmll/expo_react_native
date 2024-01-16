module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
      [
        'babel-plugin-root-import',
        {
          paths: [
            {
              rootPathSuffix: './components',
              rootPathPrefix: '@/components', 
            },
            {
              rootPathSuffix: './constants',
              rootPathPrefix: '@/constants', 
            },
            {
              rootPathSuffix: './containers',
              rootPathPrefix: '@/containers', 
            },
            {
              rootPathSuffix: './utils',
              rootPathPrefix: '@/utils', 
            },
            {
              rootPathSuffix: './assets',
              rootPathPrefix: '@/assets', 
            },
            {
              rootPathSuffix: './services',
              rootPathPrefix: '@/services', 
            },
            
            
          ],
        },
      ],
    ],
  };
};
