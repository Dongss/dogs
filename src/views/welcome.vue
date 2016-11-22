<template>
    <div class="welcome-detail">
        <h1>欢迎来到 Dogs Blog</h1> 
        <h3><a v-link="{name: 'category', params: {category: 'all'}}" 
            class="ui huge inverted download button">
            查看最新文章
        </a></h3>
    </div>
    <div class="welcome-detail-reverse">
        <h1>关于 Dogs Blog</h1>
        <p>这是个人技术博客，GitHub 托管的 SPA 项目</p>
        <h3><a href="https://github.com/Dongss/dogs">项目地址</a></h3>
    </div>
    <div class="welcome-detail">
        <h1>关于技术</h1>
        还差八个人头就超神了
    </div>
</template>

<script>
    export default {
    };
</script>

<style lang="sass">
    @import "../assets/base.scss";

    @mixin webcome-val($color, $bg-color, $height) {
        height: $height;
        text-align: center;
        padding-top: 50px;
        background-color: $bg-color;
        color: $color;

        a {
            color: $color;
        }
    }

    // pc
    @media screen and (min-width: 599px) {
        .welcome-detail{
            @include webcome-val($color-main, $color-body-bg, 330px);
        }

        .welcome-detail-reverse {
            @include webcome-val($color-body-bg, $color-main, 330px);
        }
    }

    // mobile
    @media screen and (max-width: 600px) {
        .welcome-detail{
            @include webcome-val($color-main, $color-body-bg, 20rem);
        }

        .welcome-detail-reverse {
            @include webcome-val($color-body-bg, $color-main, 20rem);
        }
    }
</style>
