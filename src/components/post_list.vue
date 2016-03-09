<template>
    <div class="ui divided items">
        <div class="item">
            <a class="ui teal label">
                <div class="detail">
                    分类：           
                </div>
                {{categoryMap[category]}}       
            </a> 
         </div>
         <div class="item"
            v-for="post in posts">
            {{post.name}}       
         </div>
    </div>
</template>

<script>
    import { CategoryMap, PostsMap } from '../../posts/map';
    import _ from 'underscore';
    
    export default {
        props: ['category'],
        data () {
            return {
                categoryMap: CategoryMap,
                postsMap: PostsMap
            };
        },
        computed: {
            posts () {
                return _.where(postsMap, { categoty: this.category });
            }
        }
    }
</script>