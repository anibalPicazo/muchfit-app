<template>
  <v-container fluid>
    <v-row justify="center"  fill >
      <v-col cols="12"  sm="9" md="9">
        <v-card class="mt-5" elevation="10" height="1000px">
          <v-sheet
            class="v-sheet--offset ml-4"
            color="blue"
            elevation="8"
            height="50px"
          >
            <v-row justify="center">
              <v-col cols="3">
                <v-icon large color="white">mdi-food-apple  </v-icon><span style="color: white"> Test  Nutricional</span>
              </v-col>
            </v-row>
          </v-sheet>
          <v-row>
            <v-col md="12" sm="12">
              <v-card-text>
                <span>
                  Bienvenido al test de nutricional, con estos sencillos pasos calcularemos cual seria su dieta ideal,
                  porfavor realice el test con la maxima sinceridad para asi poder recomendarle de maneras mas efectiva
                  su rutina ideal. Si tiene alguna patlogía porfavor consulterlo con su medico.
                </span>
                <h2 class="mt-3"> Cuestionario </h2>
                <v-row>
                <v-col>
                  <v-text-field  label="Edad" ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field  label="Peso" ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field  label="Altura" ></v-text-field>
                </v-col>
                </v-row>
                <v-row>
                  <v-col>
                  <v-radio-group  row>
                    <v-icon large color="blue">mdi-gender-male  </v-icon>
                    <v-radio label="Hombre" value="hombre"> </v-radio>
                    <v-icon large color="pink">mdi-gender-female </v-icon>
                    <v-radio label="Mujer" value="mujer"></v-radio>
                  </v-radio-group>
                  </v-col>
                  <v-col>
                    <v-text-field  label="IMC" ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field  label="% Grasa" ></v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-col>

          </v-row>
          <span> ¿Con que físico te ves identificado?</span>
          <v-row justify="center" >
            <v-radio-group row >
              <v-row >
            <v-col sm="4" >
              <v-row>
                <v-img
                  :src="require('../../assets/images/delgado.jpg')"
                >
                </v-img>
              </v-row>
              <v-row>
                <v-radio label="Delgado" value="bajo"></v-radio>
              </v-row>
            </v-col >
            <v-col sm="4">
              <v-row>
                <v-img
                  :src="require('../../assets/images/fuerte.jpg')"
                >
                </v-img>
              </v-row>
              <v-row>
                <v-radio label="Normal" value="medio"></v-radio>
              </v-row>
            </v-col>
            <v-col sm="4">
              <v-row>
                <v-img
                  :src="require('../../assets/images/tasado.jpg')"
                >
                </v-img>
              </v-row>
              <v-row>
                <v-radio label="Fuerte" value="alto"></v-radio>
              </v-row>
            </v-col>
              </v-row>
            </v-radio-group>
          </v-row>
          <span> ¿A que físico te quieres parecer?</span>
          <v-row  justify="center">
            <v-radio-group row >
              <v-row >
            <v-col sm="4" >
              <v-row>
                <v-img
                  :src="require('../../assets/images/delgado.jpg')"
                >
                </v-img>
              </v-row>
              <v-row>
                <v-radio label="Delgado" value="bajo"></v-radio>
              </v-row>
            </v-col >
            <v-col sm="4">
              <v-row>
                <v-img
                  :src="require('../../assets/images/fuerte.jpg')"
                >
                </v-img>
              </v-row>
              <v-row>
                <v-radio label="Normal" value="medio"></v-radio>
              </v-row>
            </v-col>
            <v-col sm="4">
              <v-row>
                <v-img
                  :src="require('../../assets/images/tasado.jpg')"
                >
                </v-img>
              </v-row>
              <v-row>
                <v-radio label="Fuerte" value="alto"></v-radio>
              </v-row>
            </v-col>
              </v-row>
            </v-radio-group>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
        name: "index.vue",
        layout: "testNutri"

    }
</script>

<style scoped>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>
