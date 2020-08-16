module.exports = {
  stories: [
    '../src/components/**/*.stories.jsx',
    '../src/patterns/**/*.stories.jsx'
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.s[ac]ss$/,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
        },
        { loader: 'sass-loader' },
      ],
    });
    return config;
  },
};

