<template>
    <div class="ui segment" id="post-list">
        <post-list-component :category="category"></post-list-component>
    </div>
</template>

<script>
    import PostListComponent from '../components/post_list.vue';
    
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
        components: { PostListComponent }
    }
</script>

<style>
    #post-list {
        width: 85%;
    }
</style>