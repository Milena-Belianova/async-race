const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.ts'),
  mode: 'development',
  devtool: 'inline-source-map',
  experiments: {
    topLevelAwait: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' }, // to inject the result into the DOM as a style block
          { loader: 'css-modules-typescript-loader' }, // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
          { loader: 'css-loader', options: { modules: false } }, // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
          { loader: 'sass-loader' }, // to convert SASS to CSS
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css', '.scss'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Async race',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, './src/assets'),
      publicPath: '/assets',
    },
  },
};
