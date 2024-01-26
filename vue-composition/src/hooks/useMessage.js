import { ref } from "vue";

function useMessage() {
  // data
  const msg = ref("hello");

  // methods
  function chahgeMsg() {
    // data의 값을 변경
    msg.value = "hi";
  }

  return { msg, chahgeMsg };
}

export { useMessage };
