<template>
    <div class="ui divided items">
        <div class="item">
            <a class="ui blue label">
                <div class="detail">
                    分类：           
                </div>
                {{category | category}}       
            </a> 
         </div>
            <div class="item"
                v-for="post in posts
                    | orderBy 'id' -1">
                <div class="content">
                    <div class="header">
                        <strong>
                            <a class="post-title" href="{{href(post.id)}}">
                                {{post.title}}
                            </a>
                        </strong>
                    </div>
                    <div class="discription meta title-foot">
                        {{post.date | unixtime}} | 
                        分类：{{post.category | category}}
                    </div>
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
    .post-title {
        font-size: 130%;
    }
    .title-foot {
        font-family: "Microsoft YaHei";
    }
</style>
