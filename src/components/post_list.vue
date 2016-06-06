<template>
    <div class="post-list segment">
        <div class="head">
            <span class="label">
                当前分类
                <span class="detail">{{category | category}}</span>
            </span>
        </div>
        <div class="post-info"
            v-for="post in posts
            | orderBy 'id' -1">
        <div class="divider"></div>
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
        
    export default {
        props: ['category'],
        computed: {
            posts () {
                if (this.category == 'all') {
                    return PostsMap;
                }
                return PostsMap.filter(post => {
                    return post.category === this.category;
                });
            }
        },
        methods: {
            href (id) {
                return './posts/' + id + '.html';
            }
        }
    }
</script>

<style lang="sass">
    @import "../assets/base.scss";

    .post-list {
        margin-top: 20px;
        overflow: hidden;
        padding: 20px;

        .head {
            padding-bottom: 10px;
        }

        .post-info {
            padding: 5px 0;

            .post-title {
                color: $color-post-title;
                font-size: 22px;
                text-decoration: none;
            }

            .post-title:hover {
                text-decoration: underline;
            }

            .post-ext-info {
                font-size: 15px;
                color: $color-post-ext-info;
            }
        }
    }
</style>
