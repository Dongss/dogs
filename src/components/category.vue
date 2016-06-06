<template>
    <div class="category-container segment">
        <div class="segment-head">
            文章分类
        </div>
        <div class="category" v-link="{name: 'category', params: {category:'all'}}">
            全部分类 ({{postsCount}})
        </div>
        <div class="category" v-for="category in categorys"
            v-link="{name: 'category', params: {category: category.name}}">
            {{category.name | category}} ({{category.count}})
        </div>
    </div>
</template> 

<script>
    import { CategoryMap, PostsMap } from '../../posts/map.js';
    
    export default {
        data () {
            let categorys = [];
            for (let category in CategoryMap) {
                let count = PostsMap.filter(post => {
                    return post.category === category;
                }).length;

                categorys.push({
                    name: category,
                    count: count
                });
            }

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
        font-family: 'Microsoft Yahei';

        a {
            text-decoration: none;
        }

        .category {
            padding: 10px 0 10px 20px;
            cursor: pointer;
        }

        .category:hover {
            background-color: $color-hover-bg;
            color: $color-hover;
        }

        .active {
            color: $color-main;
            background-color: $color-hover-bg;
        }
    }
</style>
