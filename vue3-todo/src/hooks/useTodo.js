// 코드가 길어지면 소스를 찾기 어려움 등의 한계가 있어
// 관심사 등에 따라 분리 및 사용 가능
// todo 관련된 동작들을 app.vue에서 옮겨옴
// app.vue에서 필요한 것들만 빠르게 확인 가능

import { ref } from "vue";

function useTodo() {
  // data
  const todoItems = ref([]);

  // methods
  function fecthTodos() {
    const result = [];
    for (let i = 0; i < localStorage.length; i++) {
      const todoItem = localStorage.key(i);
      // items.value.push(todoItem);
      result.push(todoItem);
    }
    return result;
  }

  function addTodoItem(todo) {
    const obj = { complete: false, item: todo };
    todoItems.value.push(obj);
    // localStorage.setItem(todo, obj); JSON.stringify으로 데이터를 넣지 않으면 어떤 값인지 확인 불가
    localStorage.setItem(todo, JSON.stringify(obj));
  }

  function clearTodoItem() {
    localStorage.clear();
    todoItems.value = [];
  }

  // 기능들을 외부에서도 사용할 수 있도록 내보내기
  return { todoItems, fecthTodos, addTodoItem, clearTodoItem };
}

export { useTodo };
