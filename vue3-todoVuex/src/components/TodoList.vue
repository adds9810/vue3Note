<template>
  <transition-group name="list" tag="ul">
    <li
      v-for="(item, index) in todoItems"
      :key="index"
      :class="{ chk: item.complete }"
    >
      <span class="chkBtn" @click="toggleComplete(item)"></span>
      <span>{{ item.item }}</span>
      <button @click="removeTodo(item, index)">삭제</button>
    </li>
  </transition-group>
</template>

<script>
import { watch } from "vue";

// import { ref } from "vue";

export default {
  props: ["todoItems"],
  setup(props, context) {
    // setup(props,{emit}) === setup(props, context)
    // props는 destruturing 하면 안 되지만 emit은 destruturing 해도 됨
    //     //data
    //     const items = ref([]);

    // App.vue로 소스 이동
    // methods
    // function fecthTodos() {
    //   for (let i = 0; i < localStorage.length; i++) {
    //     const todoItem = localStorage.key(i);
    //     items.value.push(todoItem);
    //   }
    // }
    // fecthTodos();

    //     return { items };

    function removeTodo(item, index) {
      context.emit("remove", item, index);
      // emit("remove", item, index);
    }

    // watch
    // 사용을 자제할 것을 추천 : 코드가 많아지면 어디서 뭘 바꾸고 하는 것들을 추적하기 어려울 수 있음(관리가 어려움..)
    // methods, event, emit 명시적인 소통, 선언형 코딩 권장
    watch(props.todoItems, (newValue) => {
      console.log({ newValue });
      //   localStorage.setItem();
    });

    function toggleComplete(item) {
      item.complete = !item.complete;
      // 로컬 스토리지 데이터 갱신
      localStorage.removeItem(item.item);
      localStorage.setItem(item.item, item);
    }

    return { removeTodo, toggleComplete };
  },
};
</script>

<style scoped>
.chkBtn {
  display: inline-block;
  margin-right: 10px;
  width: 10px;
  height: 10px;
  border: 1px solid #000;
}
.chk {
  text-decoration: line-through;
}
.chk .chkBtn {
  background: #000;
}

/* 리스트 아이템 트렌지션 효과 */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
