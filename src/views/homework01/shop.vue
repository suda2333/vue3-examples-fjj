<template>
  <div class="container">
    <h3>{{ shop.name }}</h3>
    <div class="itemlist" v-for="(i, index) in shop.items" :key="index">
      <img :src="i.url" />
      <div class="discript">
        {{ i.name }}
        <br />
        价格:{{ i.price }}
        <br />
        月销量: {{ i.sales }}
        <br />
        <div class="editquantity">
          <button @click="reduce(i)">-</button>
          <span class="quantity">{{ cpquantity(i) }}</span>
          <button @click="add(i)">+</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { State } from "@/store";
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";
import { GET_SHOP } from "@/store/VuexTypes";
import { Item } from "./homework01";
export default defineComponent({
  props: {
    sid: String
  },
  setup(props) {
    const store = useStore<State>();
    store.dispatch(GET_SHOP, props.sid);
    const shop = computed(() => store.state.shopCache);
    const orders = store.state.orders;
    const cpquantity = computed(() => (i: Item) => {
      const order = orders.find(o => o.item.id == i.id);
      return order ? order.quantity : 0;
    });
    const add = (item: Item) => {
      const order = orders.find(o => o.item.id == item.id);
      if (order) order.quantity++;
      else {
        orders.push({ quantity: 1, item: item });
      }
      return item;
    };
    const reduce = (item: Item) => {
      const order = orders.find(o => o.item.id == item.id);
      if (order) {
        order.quantity--;
      if (order?.quantity == 0) orders.splice(orders.indexOf(order), 1);
      }
    };
    return {
      shop,
      orders,
      cpquantity,
      add,
      reduce
    };
  }
});
</script>
<style scoped>
.container {
  /* padding: 0 15px 15px 15px; */
}
img {
  width: 100px;
  margin-right: 15px;
  margin-bottom: 15px;
}
.itemlist {
  display: flex;
}
.quantity {
  display: inline-block;
  width: 30px;
  text-align: center;
}
</style>
