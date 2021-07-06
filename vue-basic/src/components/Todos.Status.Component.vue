<template>
    <div class="todo-list">
        <h1>Done</h1>
        <progress-bar/>
        <ul >
            <li v-for="(todo, index) in completedTask"  v-bind:key="'key'+ index">
                {{todo.title}}
                <div class="text">completed</div>
            </li>
        </ul>
    </div>
</template>

<script>
import {useStore} from 'vuex';
import {computed,} from 'vue';
import progressBar from '../components/ProgressBar.Component.vue';

export default ({
    components:{
        'progress-bar' : progressBar
    },
    setup() {
        const store = useStore();
        //
         const completedTask = computed(()=>store.getters.completedTask);

        const isLogin = computed(()=>store.state.auth.isLogin)
        //
        return{
            isLogin,
            completedTask,
        }

    },

})
</script>

<style scoped>
.todo-list{
    flex: 1;
     background: pink;
}
.todo-list ul {
    padding: 10px 10px 10px 10px;
    list-style-type: none;
}

.todo-list li {
    display: flex;
    
    padding: 10px;
    margin: 10px 0;
    align-items: flex-start;
    justify-content: space-between;
    align-content: center;

    border-radius: 4px;

    background: white;
    color: black;

    /* cursor: pointer; */
}

.text {
    color: #009688;
}

</style>
