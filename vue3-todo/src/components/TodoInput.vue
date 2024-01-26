<template>
  <div>
    <input type="text" name="" id="" v-model="todoInput" />
    <button @click="addTodo">추가</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    // data
    // ref('') - 타임스크립트에서 변수 종류를 볼 수 있음
    const todoInput = ref("");

    //methods
    function addTodo() {
      const todo = todoInput.value;
      localStorage.setItem(todo, todo);
    }

    return { todoInput, addTodo };
  },
};
</script>

<style lang="scss" scoped></style>
