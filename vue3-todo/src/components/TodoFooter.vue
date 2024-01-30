<template>
  <div><button @click="clearTodo">clear all</button></div>
</template>

<script>
export default {
  setup(props, context) {
    function clearTodo() {
      context.emit("clear");
    }
    return { clearTodo };
  },
};
</script>

<style scoped></style>
