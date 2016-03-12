<template>
    <div class="ui segment">
        <div class="ui vertical blue text menu">
            <a class="item"
                v-link="{name: 'category', params: {category:'all'}}">
                全部分类 ({{postsCount}})
            </a>
            <a class="green item" 
                v-for="category in categorys"
                v-link="{name: 'category', params: {category: category.name}}">
                {{category.alias}} ({{category.count}})
            </a>
        </div>
    </div>
</template>

<script>
    import { CategoryMap, PostsMap } from '../../posts/map.js';
    import _ from 'underscore';
    
    export default {
        data () {
            let categorys = _.map(CategoryMap, (val, key) => {
                let count = _.where(PostsMap, { category: key }).length;
                return {
                    name: key,
                    alias: val,
                    count: count
                };
            });
            return {               
                categorys: categorys,
                postsCount: PostsMap.length
            };
        }
    }
</script>