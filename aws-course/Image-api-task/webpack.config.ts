import path from 'path';
import slsw from 'serverless-webpack';
import nodeExternals from 'webpack-node-externals';

module.exports = {
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  entry: slsw.lib.entries,
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.ts', 'tsx'],
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(tsx?)$/,
        loader: 'ts-loader',
        exclude: [
          [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, '.serverless'),
            path.resolve(__dirname, '.webpack'),
          ],
        ],
      },
    ],
  },
};
