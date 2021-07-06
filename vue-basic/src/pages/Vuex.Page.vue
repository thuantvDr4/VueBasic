<!---HOME-PAGE-->
<template>
  <div>
    <div v-if="isLogin" >
      <todo-form></todo-form>
      <div class="mainClass">
        <section class="card">
          <todo-list></todo-list>
        </section>
        <section class="card">
          <todo-status></todo-status>
        </section>
      </div>
    </div>

    <div v-else>
      <h3>You are not login</h3>
    </div>
  </div>
</template>

<!--Script-->
<script>
import { useStore } from "vuex";
import { computed } from "vue";
//
import Todos from "../components/Todos.vue";
import TodosStatus from "../components/Todos.Status.Component.vue";
import TodoForm from "../components/Todo.Form.Component.vue";

export default {
  components: {
    "todo-list": Todos,
    "todo-status": TodosStatus,
    "todo-form": TodoForm,
  },
  setup() {
    const store = useStore();
    const isLogin = computed(() => store.state.auth.isLogin);
    return {
      isLogin,
    };
  },
};
</script>

<!--style-->
<style scoped>
.mainClass {
  display: flex;
  flex: 1;
  flex-wrap: wrap;

  padding: 10px;
  align-items: center;
  justify-content: space-between;

  background: grey;
}

.card {
  flex-basis: 48%;
  min-height: 400px;
}
</style>
