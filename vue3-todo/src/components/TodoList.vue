<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
  </ul>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    //data
    const items = ref(["aa", "bb", "cc"]);

    return { items };
  },
};
</script>

<style lang="scss" scoped></style>
