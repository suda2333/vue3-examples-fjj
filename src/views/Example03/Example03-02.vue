<template>
  <div>
    <button type="button" @click="change=!change">change</button>
    <keep-alive>
    <namelogin v-if="change"></namelogin>
    </keep-alive>
    <keep-alive>
    <emaillogin v-if="!change"></emaillogin>
    </keep-alive>
    
  </div>
</template>
<script lang="ts">
import { defineAsyncComponent, defineComponent, ref } from 'vue'
const namelogin = defineAsyncComponent(() => import("./NameLogin.vue"));
import emaillogin from "./EmailLogin.vue";
export default defineComponent({
  components:{ namelogin, emaillogin},
  setup() {
    const change=ref(true);
    return {change};
  },
})
</script>
