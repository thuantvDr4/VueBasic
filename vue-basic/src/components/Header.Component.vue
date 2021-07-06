
<template>
    <header class="theHeader">
        <h1 class="title">Vuex Todos List</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
             <li v-if="isLogin">TotalTask:{{total}}
                 <button v-on:click="loginOrLogOut">Logout</button>
             </li>
              <button v-else v-on:click="loginOrLogOut">
                  Login
              </button>
        </ul>
    </header>

</template>

<script>
import {useStore} from 'vuex';
import {computed} from 'vue';
export default {
  //  name: 'header-component',
    setup(){
         const store = useStore();
         //
        const total = computed(()=>store.state.todos.length);
         const isLogin = computed(()=>store.state.auth.isLogin);

        //loginOrLogOut
        function loginOrLogOut (){
                store.commit('TOGGLE_AUTH')
        }

        //Return
        return{
            total,
            isLogin,
            loginOrLogOut,
        }
    },
    props:{
        title:{type: String}
    },

}
</script>

<style scoped>
    .title {
        flex:2;
        color:#fff;
    }

    .theHeader{
        /*position: absolute;*/
        display: flex;
        width: 100%;
        height: 80px;

        justify-content: center;
        align-items: center;

        background-color: #1769aa;
    }

    .theHeader ul {
        display: flex;
        flex:1;

        justify-content: space-between;
        align-items: center;
        list-style: none;
        padding: 0;
    }

    .theHeader li {
        flex:1;
        color: white
    }

    .task{
        color: white;
    }

</style>
