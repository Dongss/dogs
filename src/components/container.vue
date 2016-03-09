<template>
	<div class="ui teal pointing secondary menu">
  		<a class="item active" data-tab="blog-list">博客列表</a>
		<a class="item" data-tab="links">链接</a>
	</div>
    
	<div class="ui tab active" data-tab="blog-list">
        <div class="ui horizontal segments">
            <category-component></category-component>
            <router-view></router-view>
        </div>
    </div>
    
	<div class="ui tab segment" data-tab="links">
		Links
	</div>
</template>
				
<script>
    import CategoryComponent from './category.vue';
    
	export default {
		ready () {
			$('.menu .item').tab();
		},
        components: { CategoryComponent }
	}
</script>