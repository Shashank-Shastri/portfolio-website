<template>
    <section class="content-section bg-light" id="stats">
        <div class="container px-4 px-lg-5 text-center">
            <div class="content-section-heading text-center">
                <h2 class="text-dark mb-5">Stats</h2>
            </div>
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-lg-10">
                    <a
                        href="https://github.com/shashank-shastri"
                        v-for="link in stats"
                        :key="link"
                    >
                        <img align="center" class="mb-2" :src="link" />
                    </a>
                    <br />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            stats: [
                'https://github-readme-stats.vercel.app/api/top-langs/?username=shashank-shastri&hide=css,scss,html&theme=chartreuse-dark&layout=compact',
                'https://github-readme-stats.vercel.app/api/wakatime?username=ShashankShastri&theme=chartreuse-dark',
                'https://github-readme-stats.vercel.app/api?username=shashank-shastri&count_private=true&theme=chartreuse-dark&custom_title=GitHub Stats',
            ],
        };
    },
};
</script>
