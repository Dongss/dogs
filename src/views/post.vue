<template>
    <div class="ui segment" id="post-detail" v-if="post">
        <div class="discription meta">
            {{post.date | unixtime}} <a href="{{href(post.id)}}" target="_blank">source</a>
        </div>
        {{{content}}}
    </div>
</template>

<script>
    import { PostsMap, GHAddr } from '../../posts/map.js';
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