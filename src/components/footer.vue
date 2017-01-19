<template>
    <div class="footer">   
        <a href="mailto:dongsoso@hotmail.com?subject=Dogs%20Blog%20Feedback">Feedback</a> | 
        <a href="https://github.com/Dongss/dogs">GitHub</a>   
    </div> 
</template>

<script>
    export default {
    };
</script>

<style lang="sass">
    @import "../assets/base.scss";

    .footer {
        color:  $color-main-reverse;
        text-align: center;
        background-color: $color-main;
        padding: 10px 0;
        a {
            color:  $color-main-reverse;
        }
    }
</style>
