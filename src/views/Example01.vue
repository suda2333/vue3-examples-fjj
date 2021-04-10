<template>
  <div class="model"  @click="$emit('emitClose')">
    <div class="model-dialog" @click.stop>
      <div class="model-header">
        <h3>Model title</h3>
      </div>
      <div class="model-content">
        <input type="text" v-model="courseR.name">
      </div>
      <div class="model-footer">
        <button type="button" @click="submit">savechanges</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Course } from "@/datasource/Types";
import { defineComponent, PropType, ref, SetupContext } from "vue";

export default defineComponent({
  props: {
    course: Object as PropType<Course>
  },
  setup(props,{ emit }: SetupContext) {
    const active = ref(false);
    const courseR = ref<Course>({ name: props.course?.name });
    const submit = () => emit("emitSubmit", courseR.value.name)
    return {
      active,
      courseR,
      submit
    };
    
  }
});
</script>
<style scoped>
.btn {
  color: aqua;
}
.model {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.2);
}
.model .model-dialog {
  width: 450px;
  margin: auto;
  background-color: rgb(105, 35, 35);
  top: 30px;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
}
</style>