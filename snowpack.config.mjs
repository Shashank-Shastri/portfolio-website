/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    mount: {
        public: '/',
        src: '/dist',
    },
    plugins: [
        '@snowpack/plugin-vue',
        ['@canarise/snowpack-eslint-plugin', {
            globs: ['src/**/*.js', 'src/**/*.vue'],
            options: { /* any eslint options here */ },
            formatter: 'stylish'
        }],
    ],
};
