<template>
  <Table :musiclist="musicList"></Table>
</template>
<script lang="ts">
import { listChineses } from '@/datasource/DataSource'
import { defineComponent } from 'vue'
import Table from "./table.vue"
export default defineComponent({
  components: { Table },
  setup() {
    const musicList = listChineses();
    return {
      musicList
    }
  },
})
</script>
