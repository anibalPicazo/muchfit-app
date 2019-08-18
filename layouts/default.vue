<template>
  <v-app dark>
    <toolbar></toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import toolbar from '../components/toolbar'
export default {
  components: { toolbar },

}
</script>
