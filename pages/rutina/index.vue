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
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="3" md="6">
                  <v-text-field
                    ref="codigo"
                    :required="true"
                    :rules="[v => !!v || 'Obligatorio']"
                    v-model="item.codigo"
                    label="Código"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="9" md="3">
                  <v-text-field
                    ref="codigo"
                    :required="true"
                    :rules="[v => !!v || 'Obligatorio']"
                    v-model="item.codigo"
                    label="Código"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                  <v-text-field
                    ref="motivo"
                    :required="true"
                    v-model="item.motivo"
                    label="Motivo"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                  <v-text-field
                    ref="codigo"
                    :required="true"
                    :rules="[v => !!v || 'Obligatorio']"
                    v-model="item.codigo"
                    label="Código"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                  <v-text-field
                    ref="codigo"
                    :required="true"
                    :rules="[v => !!v || 'Obligatorio']"
                    v-model="item.codigo"
                    label="Código"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-row>
          </v-row>
          <v-row class="mx-auto" >
            <v-col md="12">
              <v-btn class="primary" block   :title="Enviar">
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
