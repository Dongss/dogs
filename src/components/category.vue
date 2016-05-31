<template>
    <div class="category-container segment">
            <div v-link="{name: 'category', params: {category:'all'}}">
                全部分类 ({{postsCount}})
            </div>
            <div  v-for="category in categorys"
                v-link="{name: 'category', params: {category: category.name}}">
                {{category.name | category}} ({{category.count}})
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

<style lang="sass">
    @import "../assets/base.scss";

    .category-container {
        color: $color-category;
        float: left;   
        min-width: 200px;
        max-width: 250px;
        padding-left: 20px;

        div {
            margin: 20px 0;
            cursor: pointer;
        }

        .active {
            color: $color-active;
        }
    }
</style>
