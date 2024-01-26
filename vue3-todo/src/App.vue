<template>
  <!-- 
    * vue2와는 다르게 3의 경우에는  
    * 컴포넌트 일므은 복합명사 최소한 단어 2개 이상 붙여야 함 -> 그렇지 않으면 error 발생
  -->
  <TodoHeader />
  <TodoInput />
  <TodoList />
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
export default {
  components: {
    // 컴포넌트 이름 : 컴포넌트 내용
    TodoHeader,
    TodoInput,
    TodoList,
  },
};
</script>

<style lang="scss" scoped></style>
