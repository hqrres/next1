module.exports = {
    images: {
        //domains: ['dvorjanski.ee'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'dvorjanski.ee'
            },
        ]
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
}