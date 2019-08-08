<template>
        <v-container fill-height >
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <h1 class="text-center mb-8 secondary--text">Acceso</h1>
                    <form>
                        <v-text-field
                                outlined
                                label="Usuario"
                        ></v-text-field>
                        <v-text-field
                                type="password"
                                label="Contraseña"
                                outlined
                        ></v-text-field>
                        <v-btn block large color="primary">Acceder</v-btn>
                    </form>
                </v-flex>
            </v-layout>
        </v-container>
</template>

<script>


  export default {
    name: "login",
        data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
