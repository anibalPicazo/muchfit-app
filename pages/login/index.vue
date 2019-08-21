<template>
              <v-layout align-center justify-center row fill-height>
                <v-flex fill-height xs0 sm4>
                <v-layout align-center justify-center  fill-height class="b">

                      <carousel-component hidden--xs--only></carousel-component>


                </v-layout>
                </v-flex >
                <v-flex fill-height xs12 sm8>
                      <v-layout align-center justify-items-center column fill-height>
                      <v-flex >
                          <img src="../../assets/images/raptorlogo.png" alt=""  width="220" height="175">
                      </v-flex>
                      <v-flex >

                        <h2>Login de usuario</h2>
                        <form>
                          <v-text-field
                            v-model="username"
                            outlined
                            label="Usuario"
                            required
                            color="grey"
                          ></v-text-field>
                          <v-text-field
                            v-model="password"
                            type="password"
                            label="Contraseña"
                            outlined
                            required
                            color="grey"
                          ></v-text-field>
                          <register-component></register-component>
                          <v-btn block large color="primary" @click="submit">Acceder</v-btn>
                        </form>
                      </v-flex>
                      </v-layout>
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
  .a{
    background: blue;
  }
.b {
  background-image: url("../../assets/images/boxing.png");
  background-size: auto;
}
</style>
