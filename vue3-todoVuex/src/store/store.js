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
      const todoItem = localStorage.key(i);
      // items.value.push(todoItem);
      result.push(todoItem);
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
  },
  actions: {},
  getters: {},
});

export default store;
