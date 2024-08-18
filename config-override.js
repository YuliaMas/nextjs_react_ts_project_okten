module.exports = function override(config) {
    return {
        ...config,
        ignoreWarnings: [{
            module: /node_modules/,
            message: /Failed to parse source map/,
        }],
    }
}