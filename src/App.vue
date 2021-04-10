<template>
  <div class="app">
    <sidebar class="sidebar" />
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import sidebar from "@/views/Sidebar.vue";
export default defineComponent({
  components: { sidebar },
});
</script>
<style scoped>
.app {
  display: flex;
  /* background-color: rgb(100, 98, 98); */
}
.sidebar {
  width: 20%;
}
</style>
