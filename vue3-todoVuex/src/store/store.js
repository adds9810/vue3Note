import { createStore } from "vuex";

const storage = {
  fetch() {
    // const arr = [];
    // if (localStorage.length > 0) {
    //   for (let i = 0; i < localStorage.length; i++) {
    //     if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
    //       arr.push(JSON.parse(localStorage.key(i)));
    //     }
    //   }
    // }
    // return arr;
    const result = [];
    for (let i = 0; i < localStorage.length; i++) {
      const todoItem = localStorage.getItem(localStorage.key(i));
      // items.value.push(todoItem);
      result.push(JSON.parse(todoItem));
    }
    return result;
  },
};

const store = createStore({
  state: { todoItems: storage.fetch() },
  mutations: {
    addTodoItem(state, item) {
      const obj = { complete: false, item: item };
      localStorage.setItem(item, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeTodoItem(state, payload) {
      state.todoItems.splice(payload.index, 1);
      localStorage.removeItem(payload.item.item);
    },
    toggleTodoItem(state, payload) {
      state.todoItems[payload.index].complete =
        !state.todoItems[payload.index].complete;
      // 로컬 스토리지 데이터 갱신
      localStorage.removeItem(payload.item.item);
      localStorage.setItem(payload.item.item, JSON.stringify(payload.item));
    },
    clearTodoItem(state) {
      localStorage.clear();
      state.todoItems = [];
    },
  },
  actions: {},
  getters: {},
});

export default store;
