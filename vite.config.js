import { resolve } from 'path'

export default {
    base: '/',
    resolve: {
        alias: {
            '@': resolve(__dirname, './src/'),
            '@assets': resolve(__dirname, './src/assets/'),
        },
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about/index.html'),
            }
        }
    }
}