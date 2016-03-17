<template>
	<header-component></header-component>
	<container-component></container-component> 
    <footer-component></footer-component>
</template>

<script>
	import headerComponent from '../components/header.vue';
	import containerComponent from '../components/container.vue';
    import footerComponent from '../components/footer.vue';
	
	export default {
        route: {
            data (transition) {
                document.title = 'Dogs Blog';
            }
        },
		components: { headerComponent, containerComponent, footerComponent }
	}
</script>

