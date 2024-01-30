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

    <Modal v-if="showModal" @close="showModal = false">
      <template #header>{{ modalTit }}</template>
      <template #body>{{ modalTxt }}</template>
    </Modal>
  </div>
</template>

<script>
import { ref } from "vue";
import Modal from "./common/ModalWrap.vue";

export default {
  components: { Modal },
  setup(props, context) {
    // 할일을 등록하면 바로 목록으로 등록되게끔 작업
    // vue3 setup에서는 context에 emit을 담아 이벤트를 보냄

    // data
    // ref('') - 타임스크립트에서 변수 종류를 볼 수 있음
    const showModal = ref(false);
    const todoInput = ref(""),
      modalTit = ref(""),
      modalTxt = ref(""),
      modalFooter = ref("");

    //methods
    function addTodo() {
      const todo = todoInput.value;
      //   localStorage.setItem(todo, todo);
      if (todo !== "") {
        context.emit("add", todo);
        // 태그 초기화
        clearTodo();
      } else {
        showModal.value = !showModal.value;
        modalTit.value = "경고!";
        modalTxt.value = "할 일을 등록해주세요!";

        // alert("할 일을 등록해주세요!");
      }
    }

    const clearTodo = () => (todoInput.value = "");

    return { todoInput, addTodo, showModal, modalTit, modalTxt, modalFooter };
  },
};
</script>

<style lang="scss" scoped></style>
