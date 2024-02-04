<template>
  <!-- 
    * vue2와는 다르게 3의 경우에는  
    * 컴포넌트 일므은 복합명사 최소한 단어 2개 이상 붙여야 함 -> 그렇지 않으면 error 발생
  -->
  <TodoHeader :appTitle="title" />
  <TodoInput />
  <!-- <TodoInput @하위컴포넌트 이벤트 이름="상위 컴포넌트의 메서드 이름" />-->
  <!-- <TodoList :todoItems="this.$store.state.todoItems" @remove="removeTodoItem" /> -->
  <TodoList :todoItems="this.$store.state.todoItems" />
  <!-- <TodoList :props이름="상위 컴포넌트의 데이터 이름" /> -->
  <!-- <TodoFooter @clear="clearTodoItem" /> -->
  <TodoFooter />
</template>

<script>
import { onBeforeMount, ref } from "vue";
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
// import { useTodo } from "./hooks/useTodo";

export default {
  components: {
    // 컴포넌트 이름 : 컴포넌트 내용
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  setup() {
    const title = ref("TODO LIST");

    // 라이프 사이클 API가 적용된 구간
    // console.log("1: setup called");

    // onMounted(() => {
    //   console.log("3: onMounted called");
    // });

    // 컴포넌트를 지워야 확인 가능한 구문
    // onUnmounted(() => {
    //   console.log("4: onUnmounted called");
    // });

    // function removeTodoItem(){}

    // useTodo에 구현한 기능 불러오기
    //const { todoItems, fecthTodos, addTodoItem, clearTodoItem } = useTodo();

    onBeforeMount(() => {
      // todoItems.value = fecthTodos();
      // todoItems.value = this.$store.state.todoItems;
      //   console.log("2: onBeforeMount called");
    });

    return { title };
  },
  methods: {
    // 인스턴트 방식으로도 이벤트 구현 가능
    // 어느정도는 인스턴트 방식으로 구현하고 코드가 길어지면 setup방식으로 구현하면 좋을 것 같음..
    // removeTodoItem(item, index) {
    //   // this.todoItems.splice(index, 1);
    //   // localStorage.removeItem(item);
    // },
    // 중앙관리식 데이터 요청
    // 한 컴포넌트 안에 기능을 모두 가지고 있고 나머지 컴포넌트 에서는 그 데이터를 접근한 데보다 그 데이터를 바꿔달라고 요청만 하는
  },
};
</script>

<style lang="scss" scoped></style>
