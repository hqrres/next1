module.exports = {
    images: {
        //domains: ['test.ee'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'test.ee'
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
