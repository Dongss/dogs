<template>
    <div class="post-list">
        当前分类：           
        {{category | category}}       
        <div class="post-info"
            v-for="post in posts
            | orderBy 'id' -1">
            <div>
                <a class="post-title" href="{{href(post.id)}}">
                    {{post.title}}
                </a>
            </div>
            <div class="post-ext-info">
                {{post.date | unixtime}} | 
                分类：{{post.category | category}}
            </div>
        </div>
    </div>
</template>

<script>
    import { PostsMap } from '../../posts/map.js';
    import _ from 'underscore';
        
    export default {
        props: ['category'],
        computed: {
            posts () {
                if (this.category == 'all') {
                    return PostsMap;
                }
                return _.where(PostsMap, { category: this.category });
            }
        },
        methods: {
            href (id) {
                return './posts/' + id + '.html';
            }
        }
    }
</script>

<style>
    .post-list {
        margin-top: 20px;
        overflow: hidden;
    }
    .post-info {
        padding: 10px 0;
    }
    .post-title {
        color: blue;
        font-size: 25px;
    }
    .post-ext-info {
        font-size: 15px;
        color: #888888;
    }
</style>
