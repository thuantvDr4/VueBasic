<!---HOME-PAGE-->
<template>
    <div class="home">
        <!--user-list-->
        <section class="home__list">

        </section>
        <!--user-detail-->
        <section class="home__detail">

        </section>
    </div>
</template>

<!--Script-->
<script>
    export default {
        props: {},
        data() {
            return{

            }
        },
        methods: {},
        computed: {}

    }
</script>

<!--style-->
<style scoped>
    .home{
        display: flex;

        padding: 10px;

        background-color: grey;

    }

    .home__list{
        flex: 1;

        height: 100px;


        background-color: pink;

    }

    .home__detail{
        flex: 1;

        height: 100px;

        background-color: white;
    }



</style>

