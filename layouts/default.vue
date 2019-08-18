<template>
  <div class="back">
  <v-app id="inspire">
    <toolbar></toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
  </div>
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
    background: none;
  }
</style>
