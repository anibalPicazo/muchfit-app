<template>
  <v-dialog v-model="dialog" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline"
          >{{ item._id ? "Editar" : "Crear" }} Usuario</span
        >
      </v-card-title>
      <v-card-text>
        <v-col class="mt-3">
          <v-text-field v-model="item.name" label="Nombre"></v-text-field>
        </v-col>
        <v-col class="mt-3">
          <v-text-field v-model="item.email" label="Email"></v-text-field>
        </v-col>
        <v-col class="mt-3">
          <v-text-field v-model="item.password" label="Password"></v-text-field>
        </v-col>
        <v-col class="mt-3">
          <v-autocomplete
            id="selectMuscleGroup"
            v-model="item.role"
            :items="roles"
            item-text="name"
            label="Roles"
          ></v-autocomplete>
        </v-col>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="submitUser">
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
      roles: [
        { id: 1, name: "Admin" },
        { id: 2, name: "SuperAdmin" },
        { id: 3, name: "Usuario" },
      ],
      dialog: false,
      muscleGroups: [],
    };
  },

  methods: {
    submitUser() {
      this.item._id ? this.editUser() : this.createUser();
    },
    async editUser() {
      let response = await this.$axios.put(
        `/api/user/${this.item._id}`,
        this.item
      );
      if (response.data.ok) {
        this.$emit("user-saved");
        this.dialog = false;
      }
    },
    async createUser() {
      let response = await this.$axios.post(`/api/user`, this.item);
      if (response.data.ok) {
        this.$emit("user-saved");
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
    