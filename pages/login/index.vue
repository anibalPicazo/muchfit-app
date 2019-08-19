<template>
  <div>
            <v-layout align-center justify-center column >
              <v-flex>
                <img src="../../assets/images/logov1peq.png" alt="">
              </v-flex>
              <v-flex xs12 sm8 md7 >

                    <h1>Acceso</h1>
                    <form>
                        <v-text-field
                                v-model="username"
                                outlined
                                label="Usuario"
                                required
                        ></v-text-field>
                        <v-text-field
                                v-model="password"
                                type="password"
                                label="Contraseña"
                                outlined
                                required
                        ></v-text-field>
                      <v-dialog v-model="dialog" persistent max-width="600px">
                        <template v-slot:activator="{ on }">
                          <v-btn  block large dark v-on="on">Registro</v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">Registro de usuario</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container>
                              <v-row>
                                <v-col cols="12" sm="6" md="6">
                                  <v-text-field label="Nombre*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                  <v-text-field label="Apellido*" hint="example of helper text only on focus"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-text-field label="Email*"required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-text-field label="Password*" hint="Introduce una contraseña de mas de 5 caracteres" type="password" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                  <v-select
                                    :items="['0-17', '18-29', '30-54', '54+']"
                                    label="Age*"
                                    required
                                  ></v-select>
                                </v-col>
                                <v-col cols="12" sm="6">
                                  <v-autocomplete
                                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                    label="Interests"
                                    multiple
                                  ></v-autocomplete>
                                </v-col>
                              </v-row>
                            </v-container>
                            <small>*indicates required field</small>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                            <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                        <v-btn block large color="primary" @click="submit">Acceder</v-btn>
                    </form>
                </v-flex>
            </v-layout>



</div>
</template>
<script>
  import {required} from 'vuelidate/lib/validators'
  import  signin  from '../signin/index'

  export default {
    components: { signin },
    name: "login",
    data() {
      return {
        username: '',
        password: '',
        register: true,
        dialog: false,
      }


    },
    validations: {
      username: {
        required
      },
      password: {
        required

      }
    },
    methods: {
      submit() {
        this.$v.$touch();
        if(!this.$v.$invalid)this.login();

      },
      login: async function () {
        try {
          let data = await this.$auth.loginWith('local', {
            data: {
              username: this.username,
              password: this.password
            }
          });
        } catch (e) {
          console.log(e)
          this.error = e.response.data.message
        }
      },
      modalRegister(){
        console.log(this.register);
        this.register = true;

      }
    }
  }
</script>

<style scoped>



</style>
