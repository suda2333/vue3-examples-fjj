<template>
<div class="container">
  <div class="orderlist" v-for="(o, index) in orders" :key="index">
    <span>
      {{ o.item.name }}
    </span>
    <span>{{ o.quantity }}</span>
    <br />
  </div>
</div>
  
</template>
<script lang="ts">
import { State } from "@/store";
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const store = useStore<State>();
    const orders = store.state.orders;
    return {
      orders
    };
  }
});
</script>
<style scoped>
.container {
  padding: 5px 10px 0 10px;
  width: 220px;
}
.orderlist {
  display: flex;
  justify-content: space-between;
}
</style>
