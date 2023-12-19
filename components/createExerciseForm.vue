<template>
  <v-dialog v-model="dialog" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline"
          >{{ item._id ? "Editar" : "Crear" }} Ejercicio</span
        >
      </v-card-title>
      <v-card-text>
        <v-form ref="form" @submit.prevent="submitExercise">
          <v-col class="mt-3">
            <v-text-field
              :rules="nameRule"
              v-model="item.name"
              label="Nombre"
            ></v-text-field>
          </v-col>
          <v-col class="mt-3">
            <v-autocomplete
              :rules="nameRule"
              v-model="item.muscleGroup"
              id="selectMuscleGroup"
              :items="muscleGroups"
              item-text="name"
              item-value="_id"
              label="Grupo Muscular"
            ></v-autocomplete>
          </v-col>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!isComplete"
          color="blue-darken-1"
          variant="text"
          @click="submitExercise"
        >
          Guardar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
  
  <script>
export default {
  layout: "test",
  props: {
    item: {},
  },
  data() {
    return {
      nameRule: [
        (value) => {
          if (value) return true;

          return "El campo  es obligatorio";
        },
      ],
      dialog: false,
      muscleGroups: [],
    };
  },
  computed: {
    isComplete() {
      return this.item.name && this.item.muscleGroup;
    },
  },
  watch: {
    dialog: function (newValue) {
      if (!newValue) {
        this.resetForm();
      }
    },
  },
  created() {
    this.getMuscleGroups();
  },
  methods: {
    async getMuscleGroups() {
      let response = await this.$axios.get(`/api/musclegroup`);
      this.muscleGroups = response.data.muscleGroups;
    },
    submitExercise() {
      this.item._id ? this.editExercise() : this.createExercise();
      this.resetForm();
    },
    resetForm() {
      this.item._id = null;
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
    },
    async editExercise() {
      let response = await this.$axios.put(
        `/api/exercise/${this.item._id}`,
        this.item
      );
      if (response.data.ok) {
        this.$emit("exercise-saved");
        this.dialog = false;
      }
    },
    async createExercise() {
      let response = await this.$axios.post(`/api/exercise`, this.item);
      if (response.data.ok) {
        this.$emit("exercise-saved");
        this.dialog = false;
      }
    },
  },
};
</script>
  
  <style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
  