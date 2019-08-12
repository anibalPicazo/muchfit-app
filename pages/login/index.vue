<template>
        <v-container fill-height >
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <h1 class="text-center mb-8 secondary--text">Acceso</h1>
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
                        <v-btn block large color="primary" @click="submit">Acceder</v-btn>
                    </form>
                </v-flex>
            </v-layout>
        </v-container>
</template>

<script>
  import {required} from 'vuelidate/lib/validators'

  export default {
    name: "login",
    data() {
      return {
        username: '',
        password: ''
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
        if(this.$v.$error) this.login();

      },
      login: async function () {
        try {
          let data = await this.$auth.loginWith('local', {
            data: {
              username: this.username,
              password: this.password
            }
          })
        } catch (e) {
          console.log(e)
          this.error = e.response.data.message
        }
      }
    }
  }
</script>

<style scoped>

</style>
