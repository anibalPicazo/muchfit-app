<template>
  <v-container fluid>
    <v-row justify="center"  fill >
      <v-col cols="12"  sm="7" md="7">
        <v-card class="mt-5" elevation="10" >
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
                    v-model="item.experiencia_deporte"
                    :items="['De cero a dos meses', 'De dos a ocho meses', 'De ocho meses a un año', 'Más de un año']"
                    label="Experiencia en el gimasio"
                  ></v-autocomplete>
                </v-col>
                <v-col>
                  <v-autocomplete
                    v-model="item.frecuencia_entrenamiento"
                    :items="['Menos de 2 días', 'Entre 2 y 3 días', 'Más de 3 días']"
                    label="Frecuencia de entrenamiento"
                  ></v-autocomplete>
                </v-col>
                <v-col>
                  <v-autocomplete
                    v-model="item.objetivo"
                    :items="['Hipertrofia', 'Ganancia de fuerza']"
                    label="Frecuencia de entrenamiento"
                  ></v-autocomplete>
                </v-col>
                <v-col >
                </v-col>
                <v-col>
                  <v-autocomplete
                    v-model="item.forma_fisica"
                    :items="['Malo', 'Normal', 'Bueno']"
                    label="Estado físico percibido"
                  ></v-autocomplete>
                </v-col>
              </v-card-text>
            </v-col>
          </v-row>
          <v-row class="mx-auto" >
            <v-col md="12">
              <v-btn class="primary" block @click="submmit"  :tile="getTitle">
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

    export default {
        layout: "test",
        data() {
            return {
                item: {uuid:''},
                isNew: false

            }
        },
        watch: {
            item: function (item) {
                if ( item.uuid !== ''){
                  this.isNew = true
                }
            }
        },
        methods:{
            async submmit()  {
                this.item.uuid = this.$uuid.v4();
                let response = await this.$axios.post(`/test_entrenamientos`,this.item)
                console.log('item sended', response.data);
                this.$store.commit("notification/show", {color:"success", text: 'Test de entrenamiento creado.'});
                this.getTest();

            },
            async getTest() {
                let response = await  this.$axios.get(`/test_entrenamientos`)
                if(response.data.len> 0){
                    this.item = response.data
                }
            },
            getTitle() {
                return this.isNew ? "Enviar" : "Ver test";
            }
        }

    }

</script>

<style scoped>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>
