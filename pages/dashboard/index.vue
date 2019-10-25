<template>
  <div>
      <v-container >
        <v-row >
         <v-col >

           <v-row>
             <v-col md="3"  sm="6">
               <v-card
                 class="mx-auto"
                 max-width="400"
               >
                 <v-img
                   class="white--text align-end"
                   height="200px"
                   src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                 >
                   <v-card-title>Lentejas</v-card-title>
                 </v-img>
                 <v-card-actions>
                   <v-btn
                     color="orange"
                     text
                   >
                   </v-btn>

                   <v-btn
                     color="orange"
                     text
                   >
                     Explore
                   </v-btn>
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
                   src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                 >
                   <v-card-title>Frutos Rojos</v-card-title>
                 </v-img>




                 <v-card-actions>
                   <v-btn
                     color="orange"
                     text
                   >
                     Share
                   </v-btn>

                   <v-btn
                     color="orange"
                     text
                   >
                     Explore
                   </v-btn>
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
                   <v-btn
                     color="orange"
                     text
                   >
                     Share
                   </v-btn>

                   <v-btn
                     color="orange"
                     text
                   >
                     Explore
                   </v-btn>
                 </v-card-actions>
               </v-card>

             </v-col>
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
