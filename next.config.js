module.exports = {
    images: {
        //domains: ['veebiteed.ee'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'veebiteed.ee'
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
