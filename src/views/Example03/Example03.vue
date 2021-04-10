<template>
  <div>
    {{ sid }} / {{ hid }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  props: {
    sid: String,
    hid: String
  },
  setup(props) {
    const sidR  = ref(props.sid);
    console.log(sidR);
    return {
      sidR
    };
  }
});
</script>
