<template>
    <div class="ui divided items">
        <div class="item">
            <a class="ui blue label">
                <div class="detail">
                    分类：           
                </div>
                {{categoryAlias}}       
            </a> 
         </div>
         <div class="item"
            v-for="post in posts">
            <strong><a class="post-title" href="{{href(post.id)}}" target="_blank">{{post.title}}</a></strong>      
         </div>
    </div>
</template>

<script>
    import { CategoryMap, PostsMap, GHAddr } from '../../posts/map.js';
    import _ from 'underscore';
        
    export default {
        props: ['category'],
        computed: {
            categoryAlias () {
                if (this.category == 'all') {
                    return '全部分类';
                }
                return CategoryMap[this.category]  || '未知';
            },
            posts () {
                if (this.category == 'all') {
                    return PostsMap;
                }
                return _.where(PostsMap, { category: this.category });
            }
        },
        methods: {
            href (id) {
                let post = _.find(PostsMap, { id: id });
                return GHAddr + 'posts/' + post.category + '/' + id + '.md';
            }
        }
    }
</script>

<style>
    .post-title {
        font-size: 150%;
    }
</style>