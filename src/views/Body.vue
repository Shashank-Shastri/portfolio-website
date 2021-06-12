<template>
    <div>
        <Sidebar />
        <SplashPage />
        <About />
        <Github />
        <Portfolio />
    </div>
</template>

<script>
import About from './About.vue';
import Github from './Github.vue';
import Portfolio from './Portfolio.vue';
import Sidebar from './Sidebar.vue';
import SplashPage from './SplashPage.vue';

export default {
    components: {
        About,
        Github,
        Portfolio,
        Sidebar,
        SplashPage,
    },
};
</script>
