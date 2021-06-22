<!-----User-Item---->
<template>
    <section class="user" v-on:click="viewDetail(user)">
        <h4>{{user.name}}</h4>
        <p>{{user.email}}</p>
        <button v-on:click.stop="$emit('toggleStatus', user.id)"
                class="user__button"
                v-bind:class="[{active: user.active  ,inActive: !user.active}]" >
            {{status}}
        </button>
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
            status : function () {
                return this.user.active? 'Active' : 'InActive'
            },
        },
        methods:{
            viewDetail: function (user) {
                this.$emit('viewDetail', user)
            },

        }

    }

</script>

<!----style----->
<style>
    .user{
        /*min-width: 30%;*/
        /*max-width: 30%;*/
        flex-basis: 40%;

        position: relative;

        min-width: 200px;
        height: auto;

        padding: 4px;
        margin: 10px 0;
        border-radius: 10px;

        background-color: white;

        cursor: pointer;
    }

    .user:hover{
        background-color: #eeeeee;
    }

    .user__button{
        position: absolute;
        z-index: 10;
        right: 0;
        top: 0;

        width: 30%;
        padding: 10px 0;
        border-top-right-radius: 10px;
        border-width: 0;

        background-color: #696969;
        color: #333333;

        cursor: pointer;

    }
    .user__button:hover{
        background-color: #bdbdbd;
    }
    .inActive{
        background-color: #ffc107;
    }

    .active{
        background-color: #1de9b6;
    }


</style>
