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
    background-image: url("../assets/images/test_fondo.jpg");

    color: #47494e;

  }
</style>
