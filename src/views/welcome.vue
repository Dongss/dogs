<template>
    <div class="welcome">
        <span>
            <h1>欢迎来到 Dogs Blog</h1>   
            <a v-link="{name: 'category', params: {category: 'all'}}" 
                class="ui huge inverted download button">
                查看最新文章
            </a>
        </span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="sass">
    @import "../assets/base.scss";

    #welcome {
        width: 85%;
        color: $color-welcome;
        background-color: $color-welcome-bg;
    }
</style>
