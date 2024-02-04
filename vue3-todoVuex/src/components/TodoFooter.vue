<template>
  <div><button @click="clearTodo">clear all</button></div>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    function clearTodo() {
      store.commit("clearTodoItem");
    }
    return { clearTodo };
  },
};
</script>

<style scoped></style>
