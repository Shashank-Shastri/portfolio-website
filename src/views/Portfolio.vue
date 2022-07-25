<template>
    <section class="content-section bg-dark" id="portfolio">
        <div class="container px-4 px-lg-5">
            <div class="content-section-heading text-center">
                <h3 class="text-secondary mb-0">Portfolio</h3>
                <h2 class="text-light mb-5">Recent Projects</h2>
            </div>
            <div class="row gx-0">
                <div
                    :class="{ 'col-lg-6': index !== 2, 'mb-2': true }"
                    v-for="(project, index) in portfolios"
                    :key="project.id"
                >
                    <a
                        class="portfolio-item"
                        :href="project.link"
                        target="_blank"
                    >
                        <div class="caption">
                            <div class="caption-content">
                                <div class="h2">{{ project.name }}</div>
                                <p class="mb-0">{{ project.caption }}</p>
                            </div>
                        </div>
                        <img
                            v-if="project.id"
                            class="img-fluid"
                            :src="`/assets/${project.id}.png`"
                            :alt="`Screenshot of ${project.name} website.`"
                        />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            portfolios: [
                {
                    caption:
                        'Real-time water level monitoring for my apartment.',
                    id: 'water_level',
                    link: 'https://water-level.shashanks.ml/',
                    name: 'Water Level Monitoring',
                },
                {
                    caption: 'My personal Home Automation System.',
                    id: 'home_automation',
                    name: 'Home Automation System',
                },
                {
                    caption: 'Recommends movies based on selected movie.',
                    id: 'movie_recommendation',
                    link: 'https://movie-recommendation.shashanks.ml/',
                    name: 'Movie Recommendation System',
                },
            ],
        };
    },
};
</script>
