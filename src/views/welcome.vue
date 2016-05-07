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

<style>
    #welcome {
        width: 85%;
        color: whitesmoke;
        background-color: #5A81EF;
    }
</style>