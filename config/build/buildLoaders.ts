import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders(isDev: boolean): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }
  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: 'file-loader',
  }
  const typescripLoader =  {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
  }
  const styleLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: (resourcePath: string) => resourcePath.includes('.module.'),
              localIdentName: isDev ?  "[path][name]__[local]" : "[hash:base64:8]",
            },
          },
        },
        // Compiles Sass to CSS
        "sass-loader",
      ]
  }

  return  [
      typescripLoader,
      styleLoader ,
      svgLoader,
      fileLoader 
  ]
}