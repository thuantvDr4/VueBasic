
<template>
    <div class="container">
        <section class="sectionCtn">
            <h1>Demo Slot</h1>
            <slot></slot>
        </section>

    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        computed:{

        },
        methods:{

        },
        components:{

        },

    }
</script>

<style scoped>
    .container{
        display: flex;
        margin: 20px 0;

        justify-content: center;
        align-items: center;

    }
    .sectionCtn{
        width: 50%;
        height: auto;

        border: 2px solid grey;
        border-radius: 4px;

        background-color: pink;
    }

</style>
