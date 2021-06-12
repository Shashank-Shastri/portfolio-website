import { createApp } from 'vue';
import App from './App.vue';
import clsx from 'clsx';

const app = createApp(App);
app.config.globalProperties.$clsx = clsx;
app.mount('#root');

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (undefined /* [snowpack] import.meta.hot */) {
    undefined /* [snowpack] import.meta.hot */
        .accept();
    undefined /* [snowpack] import.meta.hot */
        .dispose(() => {
            app.$destroy();
        });
}
