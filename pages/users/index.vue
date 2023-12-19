<template>
  <v-container fluid>
    <v-row justify="center" fill>
      <v-col cols="12" sm="12" md="12">
        <v-btn @click="openModal" prepend-icon="more" variant="outlined">
          Crear Usuario
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
                      <td>{{ row.item.email }}</td>
                      <td
                        style="
                          display: flex;
                          flex-direction: row;
                          justify-content: end;
                          align-items: end;
                        "
                      >
                        <v-btn
                          @click="editUser(row.item)"
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
    <create-user-form
      @user-saved="handleUserSaved"
      ref="createUserForm"
      :item="editedItem"
    ></create-user-form>
  </v-container>
</template>
      
      <script>
import CreateUserForm from "../../components/createUserForm.vue";
export default {
  layout: "test",
  created() {
    this.getUsers();
  },
  data() {
    return {
      itemsNumber: 10,
      editedItem: { name: "", email: "" },
      headers: [
        { text: "Nombre", value: "name" },
        { text: "Email", value: "email" },
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
    async getUsers() {
      let response = await this.$axios.get(`/api/users`);
      this.items = response.data.users;
    },
    handleUserSaved() {
      this.getUsers();
    },
    openModal() {
      this.$refs.createUserForm.dialog = true;
    },
    editUser(user) {
      this.editedItem = user;
      this.openModal();
    },
  },
  components: { CreateUserForm },
};
</script>
      
      <style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
      