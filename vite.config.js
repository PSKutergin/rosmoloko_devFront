import { resolve } from 'path'

export default {
    base: '/rosmoloko_devFront/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about/index.html'),
            }
        }
    }
}