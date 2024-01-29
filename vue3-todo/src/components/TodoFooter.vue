<template>
  <div><button @click="clearTodo">clear all</button></div>
</template>

<script>
export default {
  setup() {
    function clearTodo() {
      localStorage.clear();
    }
    return { clearTodo };
  },
};
</script>

<style scoped></style>
