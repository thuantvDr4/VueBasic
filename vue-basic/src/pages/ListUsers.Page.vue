<!--TEMPLATE:
    page: list-user
-->
<template>
    <div>
        <h1>LIST USERS</h1>
        <div class="users">
            <!--List-->
            <section class="users__list" >
                <user v-for="(user, index) in listUser"
                      v-bind:key="'key' + index "
                      v-on:toggleStatus="userChangeStatus"
                      v-on:viewDetail ="viewDetail"
                      v-bind:user="user"/>
            </section>
            <!--Detail-->
            <section class="userDetail" >
                <user-detail v-bind:user="userInfo"/>
            </section>
        </div>

    </div>
</template>

<!--SCRIPT-->
<script>
    import User from '../components/User.Component';
    import UserDetail from '../components/UserDetail.Component';

    export default {
        components: {
            'user': User,
            'user-detail' : UserDetail,
        },

        props: {
            listUser: {
                type: Array,
                default: function () {
                    return []
                },
            },
        },

        data() {
            return {
                userInfo: null,
            }
        },
        methods: {
            userChangeStatus: function (userId) {
                this.$emit('userChangeStatus', userId);
            },
            viewDetail:function (user) {
                this.userInfo = user
            }
        },
        computed: {},

        setup() {

        },


    }
</script>

<!--Style-css-->
<style scoped>

    .users{
        /*--position--*/

        /*---display & model-box--*/
        display: flex;
        padding: 10px;

        /*---color--*/
        background-color: #9e9e9e;

        /*--Text-*/
        /*---animation & transition--*/
    }

    .users__list {
        flex:1;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        justify-content: space-around;

        background-color: pink;
    }

    .userDetail{
        /*1--position--*/

        /*2--display & flex-box--*/
        display: flex;
        flex:1;
        align-items: center;
        justify-content: center;

        /*3--color--*/
        background-color: transparent;

        /*4--Text--*/

        /*5--other: animation & transition--*/
    }

    .userDetail__cart{
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

