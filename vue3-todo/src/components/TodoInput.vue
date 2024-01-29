<template>
  <div>
    <input
      type="text"
      name=""
      id=""
      v-model="todoInput"
      @keyup.enter="addTodo"
    />
    <button @click="addTodo">추가</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup(props, context) {
    // 할일을 등록하면 바로 목록으로 등록되게끔 작업
    // vue3 setup에서는 context에 emit을 담아 이벤트를 보냄

    // data
    // ref('') - 타임스크립트에서 변수 종류를 볼 수 있음
    const todoInput = ref("");

    //methods
    function addTodo() {
      const todo = todoInput.value;
      //   localStorage.setItem(todo, todo);
      if (todo !== "") {
        context.emit("add", todo);
        // 태그 초기화
        clearTodo();
      } else {
        alert("할 일을 등록해주세요!");
      }
    }

    const clearTodo = () => (todoInput.value = "");

    return { todoInput, addTodo };
  },
};
</script>

<style lang="scss" scoped></style>
