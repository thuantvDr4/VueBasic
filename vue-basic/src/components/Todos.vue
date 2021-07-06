<template>
  <div class="todo-list">
    <h1>Task List</h1>
    <ul>
      <li
        v-for="(todo, index) in todos"
        v-bind:key="'key' + index"
        v-bind:class="todo.completed ? 'completed' : ''"
      >
        {{ todo.title }}
        <div>
          <button class="delete" v-on:click="deleteTask(todo.id)">
            Delete
          </button>

          <input
            type="checkbox"
            v-bind:checked="todo.completed"
            v-on:change="markTaskCompleted(todo.id)"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();
    const todos = computed(() => store.state.todos);
    const isLogin = computed(() => store.state.auth.isLogin);
    //
    function markTaskCompleted(taskId) {
      store.commit("MASK_COMPLETED", taskId);
    }
    //
    function deleteTask(taskId) {
      store.dispatch("deleteTask", taskId);
    }
    //
    return {
      todos,
      isLogin,
      markTaskCompleted,
      deleteTask,
    };
  },
};
</script>

<style scoped>
.todo-list {
  flex: 1;
  background: #81d4fa;
}
.todo-list ul {
  padding: 10px;
  list-style-type: none;
}

.todo-list li {
  display: flex;

  padding: 10px;
  margin: 10px 0;
  align-items: flex-start;
  justify-content: space-between;

  border-radius: 4px;

  background: rgb(240, 240, 240);
  color: black;
}

.todo-list li input {
  cursor: pointer;
}

.todo-list li.completed {
  background: chartreuse;
}
.delete {
  margin-right: 8px;
  cursor: pointer;
}
.delete:hover {
  background: crimson;
  color: white;
}
</style>
