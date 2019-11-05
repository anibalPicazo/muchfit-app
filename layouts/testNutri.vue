<template>
  <v-app id="fondo">
    <toolbar></toolbar>
    <v-content>

      <nuxt />

    </v-content>
  </v-app>
</template>

<script>
    import toolbar from '../components/toolbar'
    export default {
        components: { toolbar },

    }
</script>
<style>

  #fondo {
    font-family: "Roboto", serif;
    background-image: url("../assets/images/nutricion.jpg");
    background-size: cover;

    color: #47494e;

  }
</style>
