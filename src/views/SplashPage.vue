<template>
    <header class="masthead d-flex align-items-center bg-secondary">
        <div class="container px-4 px-lg-5 text-center">
            <h1 class="mb-1">{{ splashContent.splashHeader }}</h1>
            <h3 class="mb-5">
                <em>{{ splashContent.splashMessage }}</em>
            </h3>
            <a class="btn btn-primary btn-xl" :href="splashContent.focusSection"
                >Find Out More</a
            >
        </div>
    </header>
</template>

<script>
import { curatedContent } from '../constants';

export default {
    computed: {
        splashContent() {
            const { hostname: referrer } = this.referrer
                ? new URL(this.referrer)
                : {};
            return curatedContent[referrer] ?? curatedContent.default;
        },
    },
    data() {
        return {
            referrer: document.referrer,
        };
    },
};
</script>
