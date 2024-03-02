import webpack from 'webpack';
import { IBuildPaths } from './types/config';

export function buildResolve(paths: IBuildPaths): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],  //расширения файлов для которых при импорте не нужно указывать расширение
        preferAbsolute: true, //абсолютные пути в приоритете
        modules: [paths.src,'node_modules'], // чтоб вебпак понимал что наши вбсолютные пути из папки src
        mainFiles: ['index'],
        alias: {}
    }
}