<template>
  <form class="form" v-on:submit="onSubmit">
    <input
      v-model="taskName"
      type="text"
      class="input"
      placeholder="insert your task..."
    />
    <input type="submit" value="Add" class="submit" />
  </form>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { v4 as uuidv4 } from 'uuid';
export default {
  setup() {
    const store = useStore();
    const taskName = ref("");

    function onSubmit(event) {
      event.preventDefault();
      if (this.taskName.length > 0 && this.taskName.trim() !== "") {
        const newTask = {
          id: uuidv4(),
          title: this.taskName,
          completed: false,
        };
        //
        store.dispatch("addNewTask", newTask);
        //
      }
      this.taskName = ''
    }

    return {
      taskName,
      onSubmit,
    };
  },
};
</script>

<style scoped>
.form {
  display: flex;
  padding: 10px;
}

.input {
  width: 30%;
  height: 30px;
}
.submit {
  width: 80px;
  border-width: 1px;
  margin: 0 0 0 10px;

  cursor: pointer;
}
.submit:hover {
  background: #2196f3;
  color: white;
}
</style>
