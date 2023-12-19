<template>
  <v-container fluid>
    <v-row justify="center" fill>
      <v-col cols="12" sm="12" md="12">
        <v-btn @click="openModal" prepend-icon="more" variant="outlined">
          Crear Grupo Muscular
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
    <create-muscle-group-form
      @muscleGroup-saved="handleMuscleGroupSaved"
      ref="createmusclegroupForm"
      :item="editedItem"
    ></create-muscle-group-form>
  </v-container>
</template>
    
    <script>
import CreateMuscleGroupForm from "../../components/createMuscleGroupForm.vue";
export default {
  layout: "test",
  created() {
    this.getMuscleGroups();
  },
  data() {
    return {
      itemsNumber: 10,
      editedItem: { name: "" },
      headers: [
        { text: "Nombre", value: "name" },
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
    async getMuscleGroups() {
      let response = await this.$axios.get(`/api/musclegroup`);
      this.items = response.data.muscleGroups;
    },
    handleMuscleGroupSaved() {
      this.getMuscleGroups();
    },
    openModal() {
      this.$refs.createmusclegroupForm.dialog = true;
    },
    editExercise(exercise) {
      this.editedItem = exercise;
      this.openModal();
    },
  },
  components: { CreateMuscleGroupForm },
};
</script>
    
    <style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
    