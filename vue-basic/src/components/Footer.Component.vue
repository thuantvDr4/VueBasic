
<template>
    <footer class="theFooter">
        <h1 class="title">{{title}}</h1>
    </footer>

</template>

<script>
    export default {
        //  name: 'header-component',
        props:{
            title:{type: String}
        },
        data(){
            return{

            }
        },
        computed:{

        },
        methods:{

        }
    }
</script>

<style scoped>
    .title {
        color:#fff;
    }

    .theFooter{
        /*position: absolute;*/
        display: flex;
        width: 100%;
        height: 80px;

        justify-content: center;
        align-items: center;

        background-color: #1769aa;
    }

</style>
