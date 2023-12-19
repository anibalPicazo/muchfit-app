<template>
  <v-container>
    <v-row justify="center" fill>
      <v-col cols="12" sm="7" md="7">
        <v-card class="mt-5" elevation="10">
          <v-sheet
            class="v-sheet--offset ml-4"
            color="blue"
            elevation="8"
            height="40px"
          >
            <v-icon large color="white">mdi-progress-clock </v-icon
            ><span style="color: white" id="icon"> Crear rutina</span>
          </v-sheet>
          <v-row>
            <v-col md="12" sm="12">
              <v-card-text style="height: 100vh">
                <v-autocomplete
                  id="selectUser"
                  v-model="item.assignedUser"
                  :items="users"
                  item-value="_id"
                  item-text="name"
                  label="Usuario"
                ></v-autocomplete>
                <v-btn @click="n++" prepend-icon="more" variant="outlined">
                  Añadir día
                </v-btn>
                <v-carousel hide-delimiters progress="primary" height="auto">
                  <div v-for="i in n" :key="i">
                    <v-carousel-item>
                      <create-work-out-form
                        :day="n"
                        v-if="users.length > 0"
                        :users="users"
                        :exercises="exercises"
                        :workoutId="workoutId"
                        :handleCreateWorkoutSet="handleCreateWorkoutSet"
                      ></create-work-out-form>
                    </v-carousel-item>
                  </div>
                </v-carousel>
              </v-card-text>
            </v-col>
          </v-row>
          <v-row class="mx-auto">
            <v-col md="12">
              <v-btn id="submit" class="primary" block @click="submmit">
                Enviar
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import createWorkOutForm from "../../components/createWorkOutForm.vue";
export default {
  components: { createWorkOutForm },
  layout: "test",
  data() {
    return {
      item: { assignedUser: "" },
      users: [],
      n: 1,
      exercises: [],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      handleCreateWorkoutSet: false,
    };
  },

  mounted() {
    this.getUsers();
    this.getExercises();
  },
  methods: {
    async getUsers() {
      let response = await this.$axios.get(`/api/users`);
      this.users = response.data.users;
    },
    async getExercises() {
      let response = await this.$axios.get(`/api/exercise`);
      this.exercises = response.data.exercise;
    },
    async submmit() {
      let response = await this.$axios.post(`/api/workout`, this.item);
      console.log("item sended", response.data);
      this.workoutId = response.data.mg._id;
      this.handleCreateWorkoutSet = true;
    },
    async getTest() {
      let response = await this.$axios.get(`/api/test_entrenamientos`);
      if (response.data.len > 0) {
        this.item = response.data;
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
