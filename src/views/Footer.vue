<template>
    <footer class="footer text-center" id="contact">
        <div class="container px-4 px-lg-5">
            <ul class="list-inline mb-5">
                <li
                    class="list-inline-item"
                    v-for="link in socialLinks"
                    :key="link.icon"
                >
                    <a
                        class="social-link rounded-circle text-white mr-3"
                        :title="link.name"
                        :href="link.link"
                        target="_blank"
                    >
                        <i :class="link.icon"></i>
                    </a>
                </li>
            </ul>
            <p class="text-muted small mb-0">
                Copyright &copy; Shashank Shastri {{ currentYear }}
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            currentYear: new Date().getFullYear(),
            socialLinks: [
                {
                    icon: 'fas fa-envelope',
                    link: 'mailto:shashank.m.shastri@gmail.com',
                    name: 'Email',
                },
                {
                    icon: 'icon-social-linkedin',
                    link: 'https://www.linkedin.com/in/shashank-m-shastri/',
                    name: 'Linkedin Link',
                },
                {
                    icon: 'icon-social-github',
                    link: 'https://github.com/Shashank-Shastri/',
                    name: 'GitHub Link',
                },
                {
                    icon: 'fas fa-file',
                    link: '/assets/My Resume.pdf',
                    name: 'Resume',
                },
            ],
        };
    },
};
</script>
