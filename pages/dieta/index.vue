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
            {{item.descripcion}}
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="3" md="3">
                  <v-text-field
                    :required="true"
                    v-model="item.aporte_calorico_diario"
                    label="Desgaste Cálorico"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="9" md="3">
                  <v-text-field
                    :required="true"
                    v-model="item.proteina"
                    label="Dificultad"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                  <v-text-field
                    :required="true"
                    v-model="item.nivel_carbohidratos"
                    label="Frecuencia"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="1">
                  <v-text-field
                    :required="true"
                    v-model="item.nivel_grasas"
                    label="Volumen"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <template v-for="list in this.dias">
            <v-container>
              <v-card-title>{{list.descripcion}}</v-card-title>
              <v-row>
                <v-col cols="12">
                  <v-data-table
                    :headers="headers"
                    :items="list.meals"
                    :items-per-page="5"
                    :group-by = "list.meals.tipo"
                    class="elevation-1"
                    show-group-by
                  ></v-data-table>
                </v-col>
              </v-row>
            </v-container>



          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

    export default {
        layout: "testNutri",
        data() {
            return {
                item: {descripcion:'Rutina de Aclimatacion',aporte_calorico_diario:'800',proteina:'Facil',nivel_carbohidratos: '3',nivel_grasas:'2'},
                user : {},
                dias: [],
                headers: [
                    {
                        text: 'Alimento',
                        align: 'left',
                        sortable: false,
                        value: 'alimento.descripcion',
                    },
                    { text: 'Tipo', value: 'tipo' },
                    { text: 'Kcal', value: 'alimento.energia_kcal' },
                    { text: 'kJul', value: 'alimento.energia_kj' },
                    { text: 'Grasas', value: 'alimento.grasas' },
                    { text: 'Carbohidratos', value: 'alimento.carbohidratos' },
                    { text: 'De los cuales azucares', value: 'alimento.carbohidratos_azucar' },
                    { text: 'Fibra', value: 'alimento.fibra' },
                    { text: 'Proteina', value: 'alimento.proteina' },
                    { text: 'Sal', value: 'alimento.sal' },

                ],

            }
        },
        mounted(){
            this.user = this.$auth.user;
            console.log('user',this.user);
            this.getRutina()
        },
        watch: {

        },
        methods:{
            async getRutina(){
                let response = await this.$axios.get(`/users/${this.user.uuid}/dieta`)
                this.item = response.data
                this.dias = response.data.dias_dieta
                console.log('dia',this.dias);
                console.log(this.item);
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
