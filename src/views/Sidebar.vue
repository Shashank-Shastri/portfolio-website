<template>
    <div>
        <div
            class="menu-toggle rounded"
            :class="{ active: sidebarActive }"
            style="cursor: pointer"
            href="#"
            @click="sidebarActive = !sidebarActive"
        >
            <icon
                :x-class="
                    $clsx('fas', {
                        'fa-bars': !sidebarActive,
                        'fa-times': sidebarActive,
                    })
                "
            />
        </div>
        <nav id="sidebar-wrapper" :class="{ active: sidebarActive }">
            <ul class="sidebar-nav">
                <li class="sidebar-brand"><a href="#page-top">Navigate</a></li>
                <li
                    class="sidebar-nav-item"
                    v-for="section in sidebar"
                    :key="section.nav"
                >
                    <a @click="sidebarActive = false" :href="section.nav">{{
                        section.name
                    }}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import Icon from '../components/Icon.vue';

export default {
    components: {
        Icon,
    },
    data() {
        return {
            sidebarActive: false,
            sidebar: [
                {
                    nav: '#page-top',
                    name: 'Home',
                },
                {
                    nav: '#about',
                    name: 'About',
                },
                {
                    nav: '#stats',
                    name: 'Stats',
                },
                {
                    nav: '#portfolio',
                    name: 'Portfolio',
                },
                {
                    nav: '#contact',
                    name: 'Contact',
                },
            ],
        };
    },
};
</script>
