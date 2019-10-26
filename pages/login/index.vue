<template>
              <v-layout align-center fill-height>
                <v-flex class="d-none d-sm-flex b" md4 fill-height>

                </v-flex >
                <v-flex  xs12 md7>
                  <div style="max-width: 40%; margin: auto; text-align: center;">


                        <div style="width: 200px; border-radius: 10px; margin: auto; margin-bottom: 40px !important;">
                          <img src="../../assets/images/raptorlogo.png" style="width: 200px; padding-top: 5px; padding-right: 12px;">
                        </div>
                      <v-flex >

                        <h2>Login de usuario</h2>
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
                          <register-component></register-component>
                          <v-btn class="mt-3" rounded block large color="primary" @click="submit">Acceder</v-btn>
                        </form>
                      </v-flex>
                  </div>
                </v-flex>
              </v-layout>

</template>
<script>
  import {required} from 'vuelidate/lib/validators'
  import  registerComponent from '../../components/register/registerComponent'
  import carouselComponent from '../../components/ui/carouselComponent'
  export default {
    components: { registerComponent,carouselComponent },
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

.b {
  background-image: url("../../assets/images/runner.jpg");
  background-size: cover;
}

</style>
