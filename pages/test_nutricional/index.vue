<template>
  <v-container fluid>
    <v-row justify="center"  fill >
      <v-col cols="12"  sm="9" md="9">
        <v-card class="mt-5" elevation="10" >
          <v-form ref="form" lazy-validation v-model="valid" >
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
                  <v-text-field  :rules="[v => !!v || 'Obligatorio']" required id="edad" type="number" v-model="item.edad" label="Edad" ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field  :rules="[v => !!v || 'Obligatorio']" required  id="peso" suffix="Kg" type="number" v-model="item.peso" label="Peso" ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field :rules="[v => !!v || 'Obligatorio']" required id="altura"  suffix="cm" type="number" v-model="item.altura" label="Altura" ></v-text-field>
                </v-col>
                  <v-col>
                    <v-autocomplete :rules="[v => !!v || 'Obligatorio']" required id="actividad_fisica" v-model="item.actividad_fisica" :items="['Hiperactivo','Muy activo','Moderadamente activo','Levemente activo','Sedentario']"  label="Actividad" ></v-autocomplete>
                </v-col>
                </v-row>
                <v-row>
                  <v-col>
                  <v-radio-group  row v-model="item.genero" id="genero">
                    <v-icon large color="blue">mdi-gender-male  </v-icon>
                    <v-radio id="hombre" label="Hombre" value="hombre"> </v-radio>
                    <v-icon large color="pink">mdi-gender-female </v-icon>
                    <v-radio aria-checked="true" id="mujer" label="Mujer" value="mujer"></v-radio>
                  </v-radio-group>
                  </v-col>
                  <v-col>
                    <v-text-field id="imc" type="number" v-model="item.imc"  label="IMC" ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field  id="grasa" type="number" suffix="%" v-model="item.grasa"  label="% Grasa" ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-autocomplete  v-model="item.experiencia" :items="['Más de un año','Menos de dos años','De dos a cuatro años']"  label="Experiencia" ></v-autocomplete>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-col>

          </v-row>
          <span> ¿Con que físico te ves identificado?</span>


          <v-row justify="center" >
            <v-radio-group row v-model="item.estado_fisico"  id="estado_fisicio">
              <v-row >
            <v-col sm="4" >
              <v-row>
                <v-img
                  :src="require('../../assets/images/delgado.jpg')"
                >
                </v-img>
              </v-row>
              <v-row>
                <v-radio id="estado_delgado" label="Delgado" value="Delgado"></v-radio>
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
                <v-radio id="estado_definido" label="Normal" value="Definido"></v-radio>
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
                <v-radio id="estado_tasado" label="Fuerte" value="Tasado"></v-radio>
              </v-row>
            </v-col>
              </v-row>
            </v-radio-group>
          </v-row>
          <span> ¿A que físico te quieres parecer?</span>
          <v-row  justify="center">
            <v-radio-group row v-model="item.estado_fisico_objetivo" id="objetivo_fisico" >
              <v-row >
            <v-col sm="4" >
              <v-row>
                <v-img
                  :src="require('../../assets/images/delgado.jpg')"
                >
                </v-img>
              </v-row>
              <v-row>
                <v-radio id="objetivo_delgado" label="Delgado" value="Delgado"></v-radio>
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
                <v-radio id="objetivo_definido" label="Normal" value="Definido"></v-radio>
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
                <v-radio id="objetivo_tasado" label="Fuerte" value="Tasado"></v-radio>
              </v-row>
            </v-col>
              </v-row>
            </v-radio-group>
          </v-row>
          <v-row class="mx-auto" >
           <v-col md="12">
             <v-btn  id="btnEnviar" class="primary" block @click="submmit">
               Enviar
             </v-btn>
           </v-col>
          </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import Notification from "../../components/Notification";
    export default {
        name: "index.vue",
        layout: "testNutri",
        components: {Notification},
        data() {
            return {
                valid:false,
                item: {'genero': 'mujer','estado_fisico_objetivo':'Definido','estado_fisico':'Tasado'},
                isNew:false,
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
                if(this.$refs.form.validate()){
                    this.item.uuid = this.$uuid.v4()
                    let response = await this.$axios.post(`/api/test_nutricion`,this.item)
                    console.log('response', this.item);
                    this.$store.commit("notification/show", {color:"success", text: 'Test de nutricion creado.'});
                    this.$router.push('/dieta')
                }else{
                    this.$store.commit("notification/show", {color:"error", text: 'Completa los campos obligatorios'});

                }



            },
          async getTest() {
            let response = await  this.$axios.get(`/api/test_rutina`)
            if(response.data.len> 0){
              this.item = response.data
            }
          }
        }
    }
</script>

<style scoped>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
  .radio-group-full-width >>>.v-input__control {
    width: 100%
  }
</style>
