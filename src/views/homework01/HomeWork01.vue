<template>
<div class="container">
  <div class="tab">
    <router-link to="/homework01/food">美食</router-link>
    <router-link to="/homework01/Local">本地</router-link>
    <router-link to="/homework01/Local">跑腿</router-link>
    <div class="shoppingList">
    <router-link to="/homework01/order">订单：{{ totalorder }}</router-link>
  </div>
  </div>
  <div class="router"> <router-view></router-view></div>
 
</div>

</template>
<script lang="ts">
import { State } from "@/store";
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const store = useStore<State>();
    const orders = computed(() => store.state.orders);
    const totalorder = computed(() =>
      orders.value
        .reduce((prevalue, n) => prevalue + n.quantity * n.item.price!, 0)
        .toFixed(2)
    );
    return {
      orders,
      totalorder
    };
  }
});
</script>
<style scoped>

.container {
  background-color: #deab8a;
  color:  #fedcbd;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
a {
  text-decoration: none;
  color:  #fedcbd;
}
 a:hover {
   transform: scale(1.2);
   transition: 0.3s;
 }
.router-link-active {
  text-decoration: none;
}
.tab {
  padding: 10px;
  background-color: #f47920;
  display: flex;
  justify-content: space-evenly;
}
.router {
  padding: 10px;
}
</style>
