<template>
    <div class="welcome-detail">
        <h1>欢迎来到 Dogs Blog</h1> 
        <h3><a v-link="{name: 'category', params: {category: 'all'}}" 
            class="ui huge inverted download button">
            查看最新文章
        </a></h3>

        <img width="30%" src="https://octodex.github.com/images/maxtocat.gif"></img>

        <h2>关于 Dogs Blog</h2>
        <p>这是个人技术博客，GitHub 托管的 SPA 项目</p>
        <h3><a href="https://github.com/Dongss/dogs">项目地址</a></h3>
    </div>
</template>

<script>
    export default {
    };
</script>

<style lang="sass">
    @import "../assets/base.scss";

    @mixin webcome-val($color, $bg-color) {
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
            @include webcome-val($color-main, $color-body-bg);
        }

        .welcome-detail-reverse {
            @include webcome-val($color-body-bg, $color-main);
        }
    }

    // mobile
    @media screen and (max-width: 600px) {
        .welcome-detail{
            @include webcome-val($color-main, $color-body-bg);
            h1 {
               margin: 4rem 0rem;
            }
            h2 {
                margin: 3rem 0rem;
            }
            h3 {
                margin: 3rem 0rem;
            }
        }

        .welcome-detail-reverse {
            @include webcome-val($color-body-bg, $color-main);
        }
    }
</style>
