<!-----User-Item---->
<template>
    <section class="detail">
        <h1>Name: {{user&&user.name}}</h1>
        <p>Email: {{user&&user.email}}</p>
        <p>Status: {{status}}</p>
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
            status: function () {
                if(!this.user){
                    return '';
                }else {
                    return this.user.active? 'Active' : 'Inactive'
                }
            }
        },
        methods:{

        },
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
