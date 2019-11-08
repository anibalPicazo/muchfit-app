<template>
  <v-app id="fondo">
    <Notification></Notification>
    <toolbar></toolbar>
    <v-content>

      <nuxt />

    </v-content>
  </v-app>
</template>

<script>
    import toolbar from '../components/toolbar'
    import Notification from "../components/Notification";
    export default {
        components: { toolbar, Notification },

    }
</script>
<style>

  #fondo {
    font-family: "Roboto", serif;
    background-image: url("../assets/images/test_fondo.jpg");

    color: #47494e;

  }
</style>
