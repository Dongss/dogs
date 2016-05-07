<template>
    <div class="category-container">
        <ul>
            <li v-link="{name: 'category', params: {category:'all'}}">
                全部分类 ({{postsCount}})
            </li>
            <li  v-for="category in categorys"
                v-link="{name: 'category', params: {category: category.name}}">
                {{category.name | category}} ({{category.count}})
            </li>
           </ul>
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

<style>
    .category-container {
        color: #585858;
        float: left;   
        min-width: 200px;
    }
    .category-container ul li {
        margin: 10px 0;
        cursor: pointer;
    }.
    .v-link-active {
        color: blue;
    }
</style>