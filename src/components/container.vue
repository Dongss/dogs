<template>    
	<div class="body-container">
        <category-component></category-component>
        <router-view></router-view>
    </div>	
</template>
				
<script>
    import CategoryComponent from './category.vue';
    
	export default {
        components: { CategoryComponent }
	}
</script>

<style>
    .body-container {
        overflow: hidden;
    }
</style>