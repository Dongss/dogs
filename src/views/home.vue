<template>
	<header-component></header-component>
	<container-component></container-component> 
    <div class="ui center aligned basic segment">   
        <div class="ui divider"></div>
        <a href="mailto:dongsoso@hotmail.com?subject=Dogs%20Blog%20Feedback">Feedback</a>
        | <a href="https://github.com/Dongss/dogs">GitHub</a>    
    </div>
</template>

<script>
	import headerComponent from '../components/header.vue';
	import containerComponent from '../components/container.vue';
	
	export default {
		components: { headerComponent, containerComponent }
	}
</script>

