<template>
    <div class="ui segment" id="post-detail" v-if="post">
    <a v-link="{name: 'category', params: {category: 'all'}}">
        <i class="blue chevron left link icon"></i>文章列表
    </a>
    <div class="ui divider"></div>
        <div class="discription meta">
            <a class="ui mini label" 
                v-link="{name:'category', params: {category:post.category}}" 
                title="点击查看该分类文章">
                分类
                <div class="detail">{{categoryAlias}}</div>
            </a>
            <a class="ui mini label"  
                title="文章发布时间">
                发布时间
                <div class="detail">{{post.date | unixtime}}</div>
            </a>
            <a class="ui mini label"  
                title="欢迎欢迎"
                href="{{href(post.id)}}" target="_blank">
                纠错/交流
            </a>
        </div>
        {{{content}}}
    </div>
</template>

<script>
    import { CategoryMap, PostsMap, GHAddr } from '../../posts/map.js';
    import _ from 'underscore';
    
    export default {
        data () {
            return {
                postId: null,
                content: '',
                post: null
            };
        },
        route: {
            data (transition) {
                this.postId = transition.to.params.postId;
                this.post = _.find(PostsMap, { id: parseInt(this.postId) });
                this.content = require('../../posts/' + this.post.category + '/' + this.postId +'.md');             
            }
        },
        watch: {
            postId (val) {
                if (val) { // Init highlightJs
                    $(function() {
                        $('pre code').each(function(i, block) {
                            hljs.highlightBlock(block);
                        });
                    });
                }
            }
        },
        computed: {
            categoryAlias () {
                return CategoryMap[this.post.category]  || '未知';
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
    #post-detail {
        width: 85%;
    }
</style>