<template>
  <table>
    <thead>
      <td>#</td>
      <td>name</td>
      <td>creattime</td>
      <td>operation</td>
    </thead>
    <tbody>
      <tr v-for="(c, index) in courses" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ c.name }}</td>
        <td>{{ c.createTime }}</td>
        <td>
          <button
            @click="
              courseEdit = c;
              active = true;
            "
          >
            edit
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  {{ courseEditedName }}
  <editbutton
    v-if="active"
    :course="courseEdit"
    @emitClose="active = false"
    @emitSubmit="emitSubmit"
  ></editbutton>
</template>
<script lang="ts">
import { defineAsyncComponent, defineComponent, Ref, ref } from "vue";
import { listCourses } from "@/datasource/DataSource";
const editbutton = defineAsyncComponent(() => import("./Example01.vue"));
import { Course } from "@/datasource/Types";
export default defineComponent({
  components: { editbutton },
  setup() {
    const courses = listCourses();
    const active = ref(false);
    const courseEdit: Ref<Course> = ref({});
    const courseEditedName = ref("");
    const emitSubmit = (name: string) => {
      courseEditedName.value = name;
      active.value = false;
    };
    return {
      courses,
      active,
      courseEdit,
      courseEditedName,
      emitSubmit
    };
  }
});
</script>
