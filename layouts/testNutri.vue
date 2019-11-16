<template>
  <v-app id="fondoNutri">
    <toolbar></toolbar>
    <notification/>
    <v-content>
      <nuxt />

    </v-content>
  </v-app>
</template>

<script>
    import toolbar from '../components/toolbar'
    import Notification from "../components/Notification";

    export default {
        components: { toolbar,Notification },

    }
</script>
<style>

  #fondoNutri {
    font-family: "Roboto", serif;
    background-image: url("../assets/images/nutricion.jpg");
    background-size: cover;

    color: #47494e;

  }
</style>
