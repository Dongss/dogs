<template>
	<header-component></header-component>
	<div class="body-container">
        <router-view></router-view>
    </div>	
    <footer-component></footer-component>
</template>

<script>
	import headerComponent from '../components/header.vue';
    import footerComponent from '../components/footer.vue';
	
	export default {
        route: {
            data (transition) {
                document.title = 'Dogs Blog';
            }
        },
		components: { headerComponent, footerComponent }
	}
</script>

<style>
    .body-container {
        overflow: hidden;
    }
</style>
