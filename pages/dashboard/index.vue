<template>
  <div>
      <v-container >
        <v-row >
         <v-col md="7" >
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
           <v-card elevation="3">
           <v-row class="mx-auto">
             <v-col md="6" sm="6">
               <v-row>
                 <div class="text-center ma-12">
                   Entrenamientos realizados
                 <v-progress-circular
                   :rotate="45"
                   :size="49"
                   :value="42"
                   :width="12"
                   color="light-blue"
                 >32</v-progress-circular>
                 </div>
               </v-row>
               <v-row>
                 <div class="text-center ma-12">
                   Entrenamientos realizados:
                   <v-progress-circular
                     :rotate="45"
                     :size="49"
                     :value="42"
                     :width="12"
                     color="pink lighten-1"
                   >32</v-progress-circular>
                 </div>
               </v-row>
             </v-col>
             <v-col md="6" sm="6">
               <v-card
                 class="mx-auto text-center"
                 dark
                 max-width="600"
               >
                 <v-card-text>
                   <v-sheet >
                     <v-sparkline
                       :value="value"
                       color="rgba(255, 255, 255, .7)"
                       height="100"
                       padding="24"
                       stroke-linecap="round"
                       smooth
                     >
                       <template v-slot:label="item">
                         {{ item.value }} Kg
                       </template>
                     </v-sparkline>
                   </v-sheet>
                 </v-card-text>

                 <v-card-text>
                 <div class="display-1 font-weight-thin">Indice de mejora </div>
               </v-card-text>

                 <v-divider></v-divider>

                 <v-card-actions class="justify-center">
                   <v-btn block text>Go to Report</v-btn>
                 </v-card-actions>
               </v-card>
             </v-col>
           </v-row>
           </v-card>

         </v-col>
          <v-col>

          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
    export default {
        data: () => ({
            value: [
                56,
                61,
                62,
                57,
                55,
                66,
                71,
            ],
        }),
    }
</script>

<style scoped>

</style>
