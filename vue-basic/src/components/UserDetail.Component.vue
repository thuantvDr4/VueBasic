<!-----User-Item---->
<template>
    <section class="detail">
        <h1>{{user&&user.name}}}</h1>
        <p>{{user&&user.email}}}</p>
        <p>{{user&&user.active}}}</p>
    </section>
</template>


<!------Script------>
<script>
    export default {
        props:{
            user:{
                type: Object,
                default : function () {
                    return null
                }
            },


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

<!----style----->
<style>
    .detail{
        /*1--position--*/

        /*2--display & flex-box--*/
        flex: 1;
        max-width: 80%;
        align-self: stretch;
        margin: 0 20px;
        padding: 10px;

        /*3--color--*/
        background-color: #ffffff;

        /*4--Text--*/

        /*5--other: animation & transition--*/
    }

</style>
