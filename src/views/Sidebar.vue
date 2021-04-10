<template>
  <div class="container">
    <ul>
      <router-link to="/Chinese"><li>华语</li></router-link>
      <router-link to="/polular"><li>流行</li></router-link>

      <router-link to="/rockenroll">
        <li>摇滚</li>
      </router-link>

      <router-link to="/ballad">
        <li>民谣</li>
      </router-link>

      <router-link to="/electric"><li>电子</li></router-link>
      <li><router-link to="/example05">homework01</router-link></li>
      <li><router-link to="/homework01">homework02</router-link></li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
<style scoped>
ul {
  padding: 0;
  margin: 0;
}
li {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  list-style: none;
  color: rgb(207, 205, 205);
}
li:hover {
  background-color: #fff;
  text-decoration: none;
}
</style>
