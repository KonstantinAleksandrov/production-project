import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { type IBuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlagins ({ paths, isDev }: IBuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS__DEV: JSON.stringify(isDev)
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        })
    ]
    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin())
    }
    return plugins
}
