<template>
  <v-container fluid>
    <v-row justify="center"  fill >
      <v-col cols="12"  sm="7" md="7">
        <v-card class="mt-5" elevation="10" height="650px">
          <v-sheet
            class="v-sheet--offset ml-4"
            color="blue"
            elevation="8"
            height="40px"
          >
            <v-icon large color="white">mdi-progress-clock </v-icon><span style="color: white"> Test de entrenamiento</span>
          </v-sheet>
          <v-row>
            <v-col md="12" sm="12">
              <v-card-text>
                <span>
                 Bienvenido al test de entrenamiento, con estos sencillos pasos calcularemos cual sería la rutina ideal,
                  por favor realice el test con la máxima sinceridad para así poder recomendarle de maneras más efectiva
                  una rutina de entrenamiento. Si tiene alguna patología por favor consúltelo con su médico.
                </span>
                <h2 class="mt-3"> Cuestionario </h2>
                <v-col class="mt-3">

                  <v-autocomplete
                    :items="['De 0 a 2 meses', 'De 2 a 8 meses', '8 meses - 1 año y medio', 'Más de un año']"
                    label="Experiencia en el gimasio"
                  ></v-autocomplete>
                </v-col>
                <v-col>
                  <v-autocomplete
                    :items="['1-2 días', '2-3 días', 'más 3 dóas']"
                    label="Frecuencia de entrenamiento"
                  ></v-autocomplete>
                </v-col>
                <v-col >
                </v-col>
                <v-col>
                  <v-autocomplete
                    :items="['Muy Bajo', 'Bajo', 'Medio','Alto']"
                    label="Estado físico percibido"
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
        name: "index.vue",
        layout: "test"

    }
</script>

<style scoped>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>
