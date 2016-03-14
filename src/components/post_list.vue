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
                <div class="content">
                    <div class="header">
                        <strong>
                            <a class="post-title" v-link="{name:'post', params: {postId: post.id}}">
                                {{post.title}}
                            </a>
                        </strong>
                    </div>
                    <div class="discription meta">
                        {{post.date | unixtime}} | 
                        分类：{{post.categoryAlias}}
                    </div>
                </div>
         </div>
    </div>
</template>

<script>
    import { CategoryMap, PostsMap } from '../../posts/map.js';
    import _ from 'underscore';
    _.each(PostsMap, function(post) {
        post.categoryAlias = CategoryMap[post.category]
    });
        
    export default {
        props: ['category'],
        methods: {
            category (category) {
                return CategoryMap[this.category]  || '未知';
            } 
        },
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
        }       
    }
</script>

<style>
    .post-title {
        font-size: 130%;
    }
</style>