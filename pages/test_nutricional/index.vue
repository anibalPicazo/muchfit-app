<template>
  <v-container fluid>
    <v-row >
      <v-col sm="12" md="6">
        <v-card class="mt-5" elevation="10">
          <v-sheet
            class="v-sheet--offset ml-4"
            color="blue"
            elevation="8"
            max-width="calc(100% - 500px)"
            height="40px"
          >
            <v-icon large color="white">mdi-progress-clock </v-icon><span style="color: white"> Experiencia</span>
          </v-sheet>
          <v-row>
            <v-col md="12" sm="12">
              <v-card-text>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Legal first name*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Email*" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                    label="Interests"
                    multiple
                  ></v-autocomplete>
                </v-col>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col sm="12" md="6">
        <v-card class="mt-5" elevation="10" >
          <v-sheet
            class="v-sheet--offset ml-4"
            color="blue"
            elevation="8"
            max-width="calc(100% - 500px)"
            height="40px"
          >
            <v-icon large color="white">mdi-progress-clock </v-icon><span style="color: white"> Frecuencia de entrenamiento</span>
          </v-sheet>
          <v-row>
            <v-col md="12" sm="12">
              <v-card-text>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Legal first name*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Email*" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                    label="Interests"
                    multiple
                  ></v-autocomplete>
                </v-col>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>

      </v-col>
    </v-row>

  </v-container>
</template>

<script>
    export default {
        name: "index.vue"
    }
</script>

<style scoped>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>
