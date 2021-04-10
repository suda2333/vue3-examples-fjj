<template>
  <div class="card" v-for="(s, index) in shopList" :key="index">
    <router-link :to="`/homework01/shop/${s.id}`">
      <div class="title">{{ s.name }}</div>
    <div class="score">{{ s.point }}</div>
    </router-link>
  </div>
</template>
<script lang="ts">
import { State } from '@/store';
import { useStore } from 'vuex'
import { computed, defineComponent } from 'vue'
import { GET_SHOPS } from '@/store/VuexTypes';

export default defineComponent({
  setup() {
    const store = useStore<State>();
    store.dispatch(GET_SHOPS);
    const shopList = computed(() => store.state.shopList);
    return {
      shopList
    }
  },
})
</script>
<style scoped>
.card {
  /* margin: 10px; */
  width: 200px;
  padding: 10px;
  border-radius: 10px;
  
}
a {
  text-decoration: none;
  color:  #fedcbd;
}
.router-link-active {
  text-decoration: none;
}

.card:hover {
  box-shadow: 0 10px 15px  rgba(223, 99, 17, 0.4);
}
.title {
  font-weight: bold;
}
</style>
