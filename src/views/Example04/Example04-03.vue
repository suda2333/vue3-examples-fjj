<template>
  <form>
    <label>
      <input type="checkbox" v-model="agree" />
      tongyitiaokuan
    </label>
    <br />
    <template v-for="(c, index) in courses" :key="index">
      <label>
        <input
          type="checkbox"
          v-model="selectedCoursesRef"
          :value="{ id: c.id }"
          :ref="checkRef"
          :disabled="!agree"
        />
        {{ c.name }}
      </label>
      <br />
    </template>
  </form>
  <button type="button" :disabled="!agree || selectedCoursesRef.length < amout">
    tijiao
  </button>

  {{ selectedCoursesRef }}
</template>
<script lang="ts">
import { Course } from "@/datasource/Types";
import { defineComponent, ref, watch } from "vue";
import { listCourses } from "@/datasource/DataSource";

export default defineComponent({
  setup() {
    const agree = ref(true);
    const selectedCourses: Course[] = [];
    const selectedCoursesRef = ref<Course[]>(selectedCourses);
    const checkboxs: HTMLInputElement[] = [];
    const checkRef = (el: HTMLInputElement) => checkboxs.push(el);
    const courses = listCourses();
    const amout = 2;
    watch(selectedCoursesRef, () => {
      const checkboxDis = selectedCoursesRef.value?.length >= amout;
      checkboxs
        .filter(c => !c.checked)
        .forEach(c => (c.disabled = checkboxDis));
    });
    return {
      agree,
      courses,
      selectedCoursesRef,
      checkRef,
    };
  }
});
</script>
