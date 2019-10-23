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
    background: white;
    font-family: "Roboto", serif;
  }
</style>
