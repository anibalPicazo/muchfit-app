<template>
  <v-container fluid>
    <v-row justify="center" fill>
      <v-col cols="12" sm="12" md="12">
        <v-btn @click="openModal" prepend-icon="more" variant="outlined">
          Crear Ejercicio
        </v-btn>
        <v-card class="mt-5" elevation="10">
          <v-row>
            <v-col md="12" sm="12">
              <v-card-text>
                <v-data-table
                  :headers="headers"
                  :items="items"
                  :items-per-page="itemsNumber"
                >
                  <template v-slot:item="row">
                    <tr>
                      <td>{{ row.item.name }}</td>
                      <td>
                        {{
                          row.item.muscleGroup ? row.item.muscleGroup.name : "-"
                        }}
                      </td>
                      <td
                        style="
                          display: flex;
                          flex-direction: row;
                          justify-content: end;
                          align-items: end;
                        "
                      >
                        <v-btn
                          @click="editExercise(row.item)"
                          density="compact"
                          icon
                        >
                          <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                      </td>
                    </tr>
                  </template>
                </v-data-table>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <create-exercise-form
      :item="editedItem"
      ref="createExerciseForm"
      @exercise-saved="handleExerciseSaved"
    ></create-exercise-form>
  </v-container>
</template>
  
  <script>
import CreateExerciseForm from "../../components/createExerciseForm.vue";
export default {
  layout: "test",
  created() {
    this.getExercises();
  },
  data() {
    return {
      itemsNumber: 10,
      editedItem: { name: "", muscleGroup: "" },
      headers: [
        { text: "Nombre", value: "name" },
        { text: "Grupo Muscular", value: "muscleGroup.name" },
        {
          text: "Editar",
          align: "center",
          value: "edit",
          sortable: false,
          width: "100px",
          slot: "edit",
        },
      ],
      items: [],
    };
  },

  methods: {
    async getExercises() {
      let response = await this.$axios.get(`/api/exercise`);
      this.items = response.data.exercise;
    },
    openModal() {
      this.$refs.createExerciseForm.dialog = true;
    },
    editExercise(exercise) {
      this.editedItem = exercise;
      this.openModal();
    },
    handleExerciseSaved() {
      this.getExercises();
    },
  },
  components: { CreateExerciseForm },
};
</script>
  
  <style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
  