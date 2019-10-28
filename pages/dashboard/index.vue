<template>
  <div>
      <v-container >
        <v-row >
         <v-col >
              <v-card-title> Comidas recomendadas</v-card-title>
           <v-row justify="space-between" class="mx-auto">
             <v-col md="3"  sm="6">
               <v-card
                 class="mx-auto"
                 max-width="400"
               >
                 <v-img
                   class="white--text align-end"
                   height="200px"
                   :src="require('../../assets/images/ensalada.jpg')"
                 >
                   <v-card-title>Ensalada</v-card-title>
                 </v-img>
                 <v-card-actions>
                   <v-col>
                     <v-icon>mdi-cards-heart</v-icon>
                   </v-col>
                   <v-col>
                     <v-icon>mdi-tag-plus </v-icon>
                   </v-col>
                   <v-col>
                     <v-icon>mdi-share-variant</v-icon>
                   </v-col>
                 </v-card-actions>
               </v-card>
             </v-col>
             <v-col md="3"  sm="6">
               <v-card
                 class="mx-auto"
                 max-width="400"
               >
                 <v-img
                   class="white--text align-end"
                   height="200px"
                   :src="require('../../assets/images/frutos_rojos.jpg')"
                 >
                   <v-card-title >Frutos Rojos</v-card-title>
                 </v-img>
                 <v-card-actions>
                   <v-col>
                     <v-icon>mdi-cards-heart</v-icon>
                   </v-col>
                   <v-col>
                     <v-icon>mdi-tag-plus </v-icon>
                   </v-col>
                   <v-col>
                     <v-icon>mdi-share-variant</v-icon>
                   </v-col>
                 </v-card-actions>
               </v-card>

             </v-col>
             <v-col md="3"  sm="6">
               <v-card
                 class="mx-a3"
                 max-width="400"
               >
                 <v-img
                   class="white--text align-end"
                   height="200px"
                   :src="require('../../assets/images/lentejas.jpg')"
                 >
                   <v-card-title>Lentejas</v-card-title>
                 </v-img>

                 <v-card-actions>
                   <v-col>
                     <v-icon>mdi-cards-heart</v-icon>
                   </v-col>
                   <v-col>
                     <v-icon>mdi-tag-plus </v-icon>
                   </v-col>
                   <v-col>
                     <v-icon>mdi-share-variant</v-icon>
                   </v-col>
                </v-card-actions>
               </v-card>

             </v-col>
           </v-row>
           <v-row>
             <v-card elevation="5">

             </v-card>
           </v-row>
         </v-col>
          <v-col>

          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
    export default {
        name: "dashboard"
    }
</script>

<style scoped>

</style>
