<template>
  <table cellspacing="0" border-collapse:collapse>
    <thead>
      <tr>
        <td>#</td>
        <td>歌曲标题</td>
        <td>时长</td>
        <td>歌手</td>
        <td>专辑</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(s, index) in musiclist" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ s.title }}</td>
        <td>{{ s.length }}</td>
        <td>{{ s.singer }}</td>
        <td>{{ s.album }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
import { Song } from '@/datasource/Types'
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  props:{
    musiclist: Object as PropType<Song[]>
  }
})
</script>
<style scoped>
table {
  margin-top: 15px;
  text-align: center;
  border: 1px;
}
thead {
  color: rgb(223, 219, 219);
  font-weight: bold;
}
td {
  padding: 10px;
  border: 1px solid black;
}
thead {
  background-color: rgb(31, 29, 29);
}
tbody tr:nth-child(2n-1) td{
    background:#807b7b;
}
tbody tr:nth-child(2n) td{
    background:hsl(0, 3%, 34%);
}
</style>
