<template>
    <the-header v-bind:title="title"/>
    <img alt="Vue logo" src="./assets/logo.png">
    <home-page></home-page>
    <list-users
            v-on:userChangeStatus ="userChangeStatus"
            v-bind:listUser="listUser"/>
</template>

<script>
    import HomePage from './pages/Home.Page.vue';
    import TheHeader from './components/Header.Component.vue';
    import ListUsers from './pages/ListUsers.Page';

    export default {
        name: 'App',
        components: {
            'home-page': HomePage,
            'the-header': TheHeader,
            'list-users': ListUsers,
        },
        data(){
            return {
                title: "Hello VueJS",
                listUser: [
                    {id:1, name: 'Zoe', email: 'zoe@localhost.com', active: true},
                    {id:2, name: 'Akali', email: 'akali@localhost.com', active: false},
                    {id:3, name: 'Sona', email: 'sona@localhost.com', active: true},
                    {id:4, name: 'MissFortune', email: 'missFortune@localhost.com', active: false},
                    {id:5, name: 'Lulu', email: 'lulu@localhost.com', active: true},
                    {id:6, name: 'Jinx', email: 'jinx@localhost.com', active: true},
                ]
            }
        },
        computed:{

        },
        methods: {
            userChangeStatus:function (userId) {
                const mapData = this.listUser.map(user=>{
                    return {
                        ...user,
                        active: user.id === userId? !user.active : user.active
                    }
                });
                this.listUser = mapData;
            },

        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

</style>
