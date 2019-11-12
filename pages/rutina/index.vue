<template>
  <v-container fluid>
    <v-row justify="center" fill>
      <v-col cols="12"  sm="7" md="7">
        <v-card class="mt-5" elevation="10" >
          <v-sheet
            class="v-sheet--offset ml-4"
            color="blue"
            elevation="8"
            height="40px"
          >
            <v-icon large color="white">mdi-arm-flex-outline  </v-icon><span style="color: white"> Tu Rutina</span>
          </v-sheet>
          <v-card-title>
            {{item.nombre}}
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="3" md="3">
                  <v-text-field
                    :required="true"
                    v-model="item.desgaste_calorico"
                    label="Desgaste Cálorico"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="9" md="3">
                  <v-text-field
                    :required="true"
                    v-model="item.dificultad_usuario"
                    label="Dificultad"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                  <v-text-field
                    :required="true"
                    v-model="item.frecuencia"
                    label="Frecuencia"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="1">
                  <v-text-field
                    :required="true"
                    v-model="item.volumen"
                    label="Volumen"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                  <v-text-field
                    :required="true"
                    v-model="item.duracion"
                    label="Duración"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-container>
            <v-card-title>Dia A</v-card-title>
            <v-row>
            <v-col cols="12">
            <v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="5"
              class="elevation-1"
            ></v-data-table>
            </v-col>
          </v-row>
          </v-container>
          <v-container>
            <v-card-title>Dia B</v-card-title>
          <v-row>
            <v-col cols="12">
            <v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="5"
              class="elevation-1"
            ></v-data-table>
            </v-col>
          </v-row>
          </v-container>
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
                item: {nombre:'Rutina de Aclimatacion',desgaste_calorico:'800',dificultad_usuario:'Facil',frecuencia: '3',volumen:'2',duracion:'121'},
                headers: [
                    {
                        text: 'Dessert (100g serving)',
                        align: 'left',
                        sortable: false,
                        value: 'name',
                    },
                    { text: 'Calories', value: 'calories' },
                    { text: 'Fat (g)', value: 'fat' },
                    { text: 'Carbs (g)', value: 'carbs' },
                    { text: 'Protein (g)', value: 'protein' },
                    { text: 'Iron (%)', value: 'iron' },
                ],
                desserts: [
                    {
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        iron: '1%',
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                        iron: '1%',
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                        iron: '7%',
                    },
                    {
                        name: 'Cupcake',
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3,
                        iron: '8%',
                    },
                    {
                        name: 'Gingerbread',
                        calories: 356,
                        fat: 16.0,
                        carbs: 49,
                        protein: 3.9,
                        iron: '16%',
                    },
                    {
                        name: 'Jelly bean',
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0,
                        iron: '0%',
                    },
                    {
                        name: 'Lollipop',
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0,
                        iron: '2%',
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                        iron: '45%',
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                        iron: '22%',
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7,
                        iron: '6%',
                    },
                ],
            }
        },
        watch: {

        },
        methods:{

        }

    }

</script>

<style scoped>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>
