<template>
    <span v-bind="$attrs" :key="componentKey">
        <i :class="xClass" />
    </span>
</template>

<script>
export default {
    props: ['xClass'],
    data() {
        return {
            componentKey: 0,
        };
    },
    watch: {
        xClass() {
            this.componentKey += 1;
        },
    },
};
</script>
