//const path = require('path')
const { resolve } = require('./utils')
const jsRules = require('./rules/jsRules')
const styleRules = require('./rules/styleRules')
const plugins = require('./plugins')

/**
 * @type {import('webpack').Configuration}
 * 注意这个地方上面的
 * 这个配置可以使得你在编写webpack的时候有配置项提醒:
 */
module.exports = {
    entry: {
        app: resolve('src/index.tsx')
    },
    output: {
        path: resolve('dist'),
        filename: '[name].js'
    },
    plugins: [...plugins],
    module: {
        rules: [...jsRules, ...styleRules]
    }
}