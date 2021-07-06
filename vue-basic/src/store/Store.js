import { createStore } from 'vuex'


const store = createStore({
    state () {
      return {
        todos: [
            {id:1, title:'Cong viec 1', completed: true},
            {id:2, title:'Cong viec 2', completed: false},
            {id:3, title:'Cong viec 3', completed: false},
          ],
          auth: {
              isLogin: false
          }
      }
    },

    getters: {
        completedTask: (state) => state.todos.filter(task => task.completed),

        completedPercent: (state) => {
            const _totalTask = state.todos;
            const _completedTask = _totalTask.filter(task => task.completed);
            if (_totalTask.length === 0) {
                return 0
            }
            return Math.round((_completedTask.length/_totalTask.length)*100)
        }
    },

    mutations: {
        TOGGLE_AUTH(state) {
            state.auth.isLogin = !state.auth.isLogin
        },
        MASK_COMPLETED(state, taskId) {
            state.todos.map(task => {
                if (task.id === taskId) task.completed = !task.completed;
                return task
            })
        },
        DELETE_TASK(state, tastId) {
           state.todos = state.todos.filter(task => task.id !==tastId)
        },

        ADD_TASK(state, newTask) {
           // state.todos.push(newTask); // them vao cuoi sanh sach
            state.todos.unshift(newTask); // them vao dau danh sach
        }

    },
    actions: {
        deleteTask(context, taskId) {
            context.commit('DELETE_TASK', taskId)
        },

        addNewTask(context, newTask) {
            context.commit('ADD_TASK',  newTask)
        }

    },

  })

export default store;
  

