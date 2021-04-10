<template>
  <div class="coursetochose">
    <span :style="{ color: total1 >= total2 ? 'green' : 'red' }">
      {{ total1 }}
    </span>
    / {{ total2 }}
    <br />
    <template v-for="(c, index) in listcourses" :key="index">
      <label>
        <input type="checkbox" :value="c" v-model="selectedCourses" />
        {{ c.name }} - {{ c.point }} ({{ c.term }})
      </label>
      <br />
    </template>
  </div>
  <hr />
  <div class="chosedcourses">
    <template v-for="(c, index) in selectedCourses" :key="index">
      {{ c.name }} - {{ c.point }} ({{ c.term }})
      <br />
    </template>
  </div>
</template>
<script lang="ts">
import { listCourses } from "./Example05";
import { computed, defineComponent, ref, watch } from "vue";
import { Course } from "./Example05";

export default defineComponent({
  setup() {
    const listcourses = listCourses().sort((a, b) => a.term - b.term);
    const selectedCourses = ref<Course[]>([]);
    const total1 = computed(() => 
      selectedCourses.value.reduce((prevalue, n) => prevalue + n.point, 0));
    watch(selectedCourses, () => {
      selectedCourses.value.sort((a, b) => a.term - b.term);
    });
    const total2 = 17.5;
    return {
      total2,
      total1,
      listcourses,
      selectedCourses
    };
  }
});
</script>
