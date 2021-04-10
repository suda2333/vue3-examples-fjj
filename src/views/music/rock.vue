<template>
  <Table :musiclist="musicList"></Table>
</template>
<script lang="ts">
import { listRock } from '@/datasource/DataSource'
import { defineComponent } from 'vue'
import Table from "./table.vue"
export default defineComponent({
  components: { Table },
  setup() {
    const musicList = listRock();
    return {
      musicList
    }
  },
})
</script>
