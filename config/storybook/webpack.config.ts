import path from 'path'
import type webpack from 'webpack'
import { type IBuildPaths } from '../build/types/config'
import { buildStyleLoader } from '../build/loaders/buildStyleLoader'

module.exports = ({ config }: { config: webpack.Configuration }) => {
    const paths: IBuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '../', '../', 'src')
    }

    const isRuleSetRule = (rule: any): rule is { test: RegExp } => rule && typeof rule === 'object' && 'test' in rule

    // Изменение существующих правил, исключая обработку SVG
    config.module.rules = config.module.rules.map(rule => {
        if (isRuleSetRule(rule) && rule.test && rule.test.toString().includes('svg')) {
            // Преобразование RegExp, исключая 'svg'
            const test = rule.test.toString().replace('svg|', '').replace(/\//g, '')
            return { ...rule, test: new RegExp(test) }
        }
        return rule
    })

    // Добавление правила для обработки SVG через @svgr/webpack
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
    })

    config.resolve.modules.push(paths.src)

    config.module.rules.push(buildStyleLoader(true))

    return config
}
