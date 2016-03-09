<template>
	<header-component></header-component>
	<container-component></container-component>    
</template>

<script>
	import headerComponent from '../components/header.vue';
	import containerComponent from '../components/container.vue';
	
	export default {	
		components: { headerComponent, containerComponent }
	}
</script>

