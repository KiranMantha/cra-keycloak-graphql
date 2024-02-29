const webpack = require('webpack');
require('dotenv').config({ path: './env/.env' });
const { CracoAliasPlugin } = require('react-app-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        baseUrl: './',
        source: 'tsconfig',
        tsConfigPath: './tsconfig.alias.json'
      }
    }
  ],
  webpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.REACT_APP': JSON.stringify(process.env)
      })
    ]
  }
};
