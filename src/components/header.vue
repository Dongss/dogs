<template>
	<div class="header">
        <strong><a href="#">Dogs Blog</a></strong>
	</div>
</template>

<script>
	export default {
	};
</script>

<style lang="sass">
    @import "../assets/base.scss";

	.header {
		padding: 10px 0;
		font-size: 30px;
		background-color: $color-main;

        a {
            color: $color-main-reverse;
            text-decoration: none;
        }
	}
</style>
