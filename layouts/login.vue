<template>
  <v-app id="inspire">
    <v-content>
      <notification/>


      <nuxt />

    </v-content>
  </v-app>
</template>

<script>
    import Notification from "../components/Notification";

    export default {
        components: { Notification },

    }
</script>
<style>

  #inspire {
    background: whitesmoke;
    font-family: "Roboto", serif;

    color: #47494e;

  }
</style>
