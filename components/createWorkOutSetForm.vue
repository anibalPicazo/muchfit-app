
<template>
  <v-row justify="center" style="margin-left: 0px" fill>
    <v-col m="12" md="3">
      <v-autocomplete
        v-model="item.exercise"
        id="selectFrecuencia"
        :items="exercises"
        item-text="name"
        item-value="_id"
        label="Ejercicios"
      ></v-autocomplete>
    </v-col>
    <v-col sm="12" md="3">
      <v-text-field v-model="item.weight" label="Peso"></v-text-field>
    </v-col>
    <v-col sm="12" md="3">
      <v-text-field v-model="item.reps" label="Repeticiones"></v-text-field>
    </v-col>
    <v-col sm="12" md="3">
      <v-text-field v-model="item.series" label="Series"></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    exercises: [],
    day: "",
    workoutId: "",
    handleCreateWorkout: null,
  },
  methods: {
    async createWorkOutSet() {
      const payload = {
        ...this.item,
        name: this.day,
        workout: this.workoutId,
      };
      let response = await this.$axios.post(`/api/workout/workoutset`, payload);
      if (response.mg.ok) {
        this.$store.commit("notification/show", {
          color: "success",
          text: "Entrenamiento creado.",
        });
      } else {
        this.$store.commit("notification/show", {
          color: "error",
          text: "Error al crear el entrenamiento.",
        });
      }
    },
  },
  watch: {
    handleCreateWorkout: function (newVal, OldVal) {
      if (newVal === true) {
        this.createWorkOutSet();
      }
    },
  },
  data() {
    return {
      item: {},
    };
  },
};
</script>

<style>
</style>