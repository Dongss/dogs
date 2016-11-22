<template>
    <category-component></category-component>
    <post-list-component :category="category"></post-list-component>
</template>

<script>
    import PostListComponent from '../components/post_list.vue';
    import CategoryComponent from '../components/category.vue';
    
    export default {
        data () {
            return {
                category: null
            };
        },
        route: {
            data (transition) {
                this.category = transition.to.params.category;
            }
        },
        components: { PostListComponent, CategoryComponent }
    };
</script>
