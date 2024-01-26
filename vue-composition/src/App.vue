<template>
  <div>
    <p>{{ msg }}</p>
    <button @click="chahgeMsg">change</button>
  </div>
</template>

<script>
// composition API 장점
// 타입 추론에 있어서의 강력한 장점
// 재사용성을 극대화

// composition API 단점
// 믹스인, 컴포넌트를 잘 사용하면 composition API 불필요, 찾거나 각 파일에서 불어오는데 불필요한 시간을 소비하게 된다.
// 불필요한 학습시간 소요
// setup 안에서도 computed, methods을 사용할 수 있는데 자칫하면 작성한 코드의 용로를 알 수 없게됨, 잘 구분해서 사용해야함
// 그러나 동일한 코드를 여러 페이지에 길게 사용할 경우는 고민할 필요가 있음
// import { ref } from "vue";
import { useMessage } from "./hooks/useMessage";
export default {
  setup() {
    // \src\hooks\useMessage.js 아래 소스들 이사
    // // data
    // const msg = ref("hello");

    // // methods
    // function chahgeMsg() {
    //   // data의 값을 변경
    //   msg.value = "hi";
    // }

    const { msg, chahgeMsg } = useMessage();
    return { msg, chahgeMsg };
  },
};
</script>

<style lang="scss" scoped></style>
