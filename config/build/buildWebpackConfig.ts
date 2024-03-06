import type webpack from 'webpack'
import { type IBuildOptions } from './types/config'
import { buildPlagins } from './buildPlagins'
import { buildLoaders } from './buildLoaders'
import { buildResolve } from './buildResolve'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig (options: IBuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options

    return {
        mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(isDev)
        },
        resolve: buildResolve(paths),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlagins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: buildDevServer(options)
    }
}
