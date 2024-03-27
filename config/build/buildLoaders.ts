import type webpack from 'webpack'
import { buildStyleLoader } from './loaders/buildStyleLoader'

export function buildLoaders (isDev: boolean): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: 'file-loader'
    }
    const typescripLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }
    const styleLoader = buildStyleLoader(isDev)

    return [
        typescripLoader,
        styleLoader,
        svgLoader,
        fileLoader
    ]
}
