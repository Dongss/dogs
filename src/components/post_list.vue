<template>
    <div class="ui divided items">
        <div class="item">
            <a class="ui teal label">
                <div class="detail">
                    分类：           
                </div>
                {{categoryAlias}}       
            </a> 
         </div>
         <div class="item"
            v-for="post in posts">
            {{post.title}}       
         </div>
    </div>
</template>

<script>
    import { CategoryMap, PostsMap } from '../../posts/map.js';
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
        }
    }
</script>