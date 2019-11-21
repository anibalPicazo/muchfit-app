<template>
  <v-app dark>






    <v-layout align-center fill-height>
      <v-flex  xs12 md12>
        <div style="max-width: 40%; margin: auto; text-align: center;">


          <div style="width: 200px; border-radius: 10px; margin: auto; margin-bottom: 40px !important;">
            <img src="../assets/images/dinosaur.png" style="width: 200px; padding-top: 5px; padding-right: 12px;">
          </div>
          <v-flex >

            <h2>Upsss, ha ocurrido un error inesperado </h2>
            <h2>Que no cunda el pánico</h2>
            <h3>Porfavor intentelo de nuevo</h3>
            <NuxtLink to="/">
              Pagina de inicio
            </NuxtLink>

          </v-flex>
        </div>
      </v-flex>
    </v-layout>



  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
