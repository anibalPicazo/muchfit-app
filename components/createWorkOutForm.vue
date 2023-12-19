<template>
  <div>
    <v-col><v-text-field v-model="item.name" label="Día"></v-text-field></v-col>
    <div v-for="i in n" :key="i">
      <create-work-out-set-form
        :exercises="exercises"
        :day="item.name"
        :workoutId="workoutId"
        :handleCreateWorkout="handleCreateWorkout"
      ></create-work-out-set-form>
    </div>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-btn @click="n++" density="compact" icon>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import createWorkOutSetForm from "./createWorkOutSetForm.vue";
export default {
  components: { createWorkOutSetForm },
  props: {
    exercises: [],
    day: 1,
    handleCreateWorkoutSet: null,
    workoutId: "",
  },
  watch: {
    handleCreateWorkoutSet: function (newVal, oldVal) {
      if (newVal === true) {
        this.handleCreateWorkout = true;
      }
    },
  },
  created() {
    this.item.name = `Dia ${this.day}`;
  },
  data() {
    return {
      handleCreateWorkout: false,
      n: 1,
      item: { name: "" },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>