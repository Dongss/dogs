<template>
    <div class="ui segment">
        <div class="ui vertical teal text menu">
            <a class="teal item"
                v-link="{name: 'category', params: {category:'all'}}">
                全部分类
            </a>
            <a class="green item" 
                v-for="category in categoryMap"
                v-link="{name: 'category', params: {category:$key}}">
                {{category}}
            </a>
        </div>
    </div>
</template>

<script>
    import { CategoryMap } from '../../posts/map.js';
    
    export default {
        data () {
            return {
                categoryMap: CategoryMap
            }
        }
    }
</script>