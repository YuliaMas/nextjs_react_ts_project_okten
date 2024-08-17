module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
            },
        ],
    },
    experimental: {
        images: {
            allowFutureImage: true
        }
    },
}
