<template>
  <v-app id="inspire">
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

  #inspire {
    background: whitesmoke;
    font-family: "Roboto", serif;

    color: #47494e;

  }
</style>
