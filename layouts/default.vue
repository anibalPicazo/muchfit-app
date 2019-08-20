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

  .back {
    background-image: url("../assets/images/black_background.jpg");
    background-size: cover;
  }
  #inspire {
    background-image: url("../assets/images/black_background.jpg");
  }
</style>
