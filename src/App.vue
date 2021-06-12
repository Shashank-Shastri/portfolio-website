<template>
    <div>
        <Body />
        <Footer />
        <!-- Scroll to Top Button-->
        <transition name="fade">
            <a
                v-if="scrollPosition > 100"
                class="scroll-to-top rounded"
                href="#page-top"
                style="opacity: 1; display: block"
            >
                <i class="fas fa-angle-up"></i>
            </a>
        </transition>
    </div>
</template>

<script>
import Body from './views/Body.vue';
import Footer from './views/Footer.vue';
import '/assets/index.css';

export default {
    components: {
        Body,
        Footer,
    },
    data() {
        return {
            scrollPosition: 0,
        };
    },
    destroy() {
        window.removeEventListener('scroll', this.updateScroll);
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY;
        },
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },
};
</script>
