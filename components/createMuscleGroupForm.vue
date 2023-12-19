<template>
  <v-dialog v-model="dialog" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">
          {{ item._id ? "Editar" : "Crear" }} Grupo Muscular</span
        >
      </v-card-title>
      <v-card-text>
        <v-form ref="form" @submit.prevent="submitMuscleGroup">
          <v-col class="mt-3">
            <v-text-field
              :rules="nameRule"
              v-model="item.name"
              label="Nombre"
            ></v-text-field>
          </v-col>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!isComplete"
          color="blue-darken-1"
          variant="text"
          @click="submitMuscleGroup"
        >
          Guardar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
    
    <script>
export default {
  props: { item: {} },
  data() {
    return {
      nameRule: [
        (value) => {
          if (value) return true;
          return "El campo nombre es obligatorio";
        },
      ],
      dialog: false,
      muscleGroups: [],
    };
  },
  watch: {
    dialog: function (newValue, old) {
      if (!newValue) {
        this.resetForm();
      }
    },
  },
  computed: {
    isComplete() {
      return this.item.name;
    },
  },
  methods: {
    resetForm() {
      this.item._id = null;
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
    },

    submitMuscleGroup() {
      this.item._id ? this.editMuscleGroup() : this.createMuscleGroup();
    },
    async editMuscleGroup() {
      let response = await this.$axios.put(
        `/api/musclegroup/${this.item._id}`,
        this.item
      );
      if (response.data.ok) {
        this.$emit("muscleGroup-saved");
        this.dialog = false;
      }
    },
    async createMuscleGroup() {
      let response = await this.$axios.post(`/api/musclegroup`, this.item);
      if (response.data.ok) {
        this.$emit("muscleGroup-saved");
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
    