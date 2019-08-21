<template>
  <div class="d-none d-lg-block d-print-block">
  <v-carousel hide-delimiters hide-delimiter-background cycle show-arrows-on-hover>
    <v-carousel-item
      v-for="(color, i) in colors"
      :key="color"
    >

      <v-row
        class="fill-height"
        align="center"
        justify="center"
      >
        <div class="div-mens"><span class="mensajes">{{color}}</span> </div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
  </div>
</template>

<script>
  export default {
    name: 'carouselComponent',
    data () {
      return {
        colors: [
          '"La clave del exito se encuentra en tí"',
          '"Un campeón fue un dia alguien quien fracasó y no se rindió"',
          '"No lo dejes para mañana, hazlo ya"',
          '"Facil y sencillo "',
          '"Hazlo duradero, los objetivos se ven a largo plazo"',
        ],
      }
    }
  }

</script>


<style scoped>

  .mensajes{
    font-family:"IBM Plex Serif Light";
    font-size: 25px;
    text-align: center;

  }.div-mens{
     text-align: center;
   }

</style>
