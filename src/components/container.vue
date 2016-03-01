<template>
	<div class="ui pointing secondary menu">
  		<a class="item active" data-tab="blog-list">博客列表</a>
		<a class="item" data-tab="links">链接</a>
	</div>
	<div class="ui tab segment active" data-tab="blog-list">
		Blog-list
	</div>
	<div class="ui tab segment" data-tab="links">
		Links
	</div>
</template>
				
<script>
	export default {
		ready () {
			$('.menu .item').tab();
		}
	}
</script>