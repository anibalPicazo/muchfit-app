<template>
  <div>
      <v-container fluid>
        <v-row >
         <v-col md="7" sm="12" >
            <v-card>
              <v-card-title> Comidas recomendadas</v-card-title>
              <v-row justify="space-between" class="mb-3 pa-3" >
             <v-col md="3"  sm="12">
               <v-card
                 max-height="200"
               >
                 <v-img
                   class="white--text align-end"
                   height="150px"
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
                <v-col md="3"  sm="12">
                  <v-card
                    max-height="200"
                  >
                    <v-img
                      class="white--text align-end"
                      height="150px"
                      :src="require('../../assets/images/chicken.jpg')"
                    >
                      <v-card-title>Pollo</v-card-title>
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
             <v-col md="3"  sm="12">
               <v-card
                 max-height="200"
               >
                 <v-img
                   class="white--text align-end"
                   height="150px"
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
             <v-col md="3"  sm="12">
               <v-card
                 max-height="200"
               >
                 <v-img
                   class="white--text align-end"
                   height="150px"
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
            </v-card>
           <v-card elevation="3">
           <v-row class="mx-auto">
             <v-col md="6" sm="6">
               <v-row>
                 <div class="text-center ma-12">
                   <p>Entrenamientos realizados</p>
                 <v-progress-circular
                   :rotate="45"
                   :size="82"
                   :value="82"
                   :width="12"
                   color="light-blue"
                 >82</v-progress-circular>
                 </div>
               </v-row>
               <v-row>
                 <div class="text-center ma-12">
                   <p>Entenamientos saltados</p>
                   <v-progress-circular
                     :rotate="45"
                     :size="82"
                     :value="18"
                     :width="12"
                     color="pink lighten-1"
                   >12</v-progress-circular>
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
           <v-card>
           <v-row  class="mx-auto mt-5">
             <v-toolbar dense class="vuely-toolbar">
               <v-toolbar-title class="title-vuely">Planificador entrenamiento</v-toolbar-title>
               <v-spacer></v-spacer>
               <v-icon class="icon-toolbar">mdi-calendar</v-icon>
             </v-toolbar>
             <v-calendar
               class="pa-1"
               color="primary"
               type="month"
               now="2019-01-08"
               value="2019-01-08"
               :events="events"
               :event-color="getEventColor"
               locale="ES-ES"
               first-day-of-week="1"
             ></v-calendar>
           </v-row>
           </v-card>

         </v-col>
          <v-col md="5" sm="12">
            <v-card
              class="mx-auto"
            >
              <v-card-title> Enrenamiento de hoy</v-card-title>

              <v-row justify="center">


              <v-list
                  three-line="three-line"
                  shaped
                  rounded
                  max-width="450"
                >
                  <v-list-item-group v-model="item" color="primary">
                    <v-list-item
                      v-for="(item, i) in items"
                      :key="i"
                    >
                      <v-list-item-avatar v-if="avatar">
                        <v-img :src="item.avatar"></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title v-html="item.title"></v-list-item-title>
                        <v-list-item-subtitle v-if="threeLine" v-html="item.subtitle"></v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>

            </v-row>
            </v-card>
            <v-card class="mt-3">
              <v-card-title> Menú rapido</v-card-title>
            <v-row justify="space-around" >
              <v-icon large color="green darken-2">mdi-domain</v-icon>

              <v-icon large color="blue darken-2">mdi-message-text</v-icon>

              <v-icon large color="purple darken-2">mdi-dialpad</v-icon>

              <v-icon large color="teal darken-2">mdi-email</v-icon>

              <v-icon large color="blue-grey darken-2">mdi-call-split</v-icon>

              <v-icon large color="orange darken-2">mdi-arrow-up-bold-box-outline</v-icon>

            </v-row>
            </v-card>
            <v-card class="mt-3">
              <v-card-title>Contacto</v-card-title>
              <v-row>

                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="overline mb-4" style="color: #1db817">Online</div>
                      <v-list-item-title class="headline mb-1">Mateo Sánchez</v-list-item-title>
                      <v-list-item-subtitle>Entrenador personal y nutricionista</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-avatar size="150px">
                      <v-img
                        class="white--text align-end mt-12"
                        :src="require('../../assets/images/trainer.jpg')"
                      >

                      </v-img>

                    </v-list-item-avatar>
                  </v-list-item>

                  <v-card-actions>
                    <v-btn text>Llamar</v-btn>
                    <v-btn text>Correo</v-btn>
                  </v-card-actions>
              </v-row>
            </v-card>



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
            events: [
                {
                    name: "Descanso",
                    start: "2018-12-30",
                    end: "2019-01-02",
                },
                {
                    name: "Full body dia A",
                    start: "2019-01-07",
                },
                {
                    name: "Full body dia A",
                    start: "2019-01-03",
                },
                {
                    name: "Full body dia B",
                    start: "2019-01-17",
                    color: 'light-green'
                },
                {
                    name: "Full body dia A",
                    start: "2019-01-21",
                },
                {
                    name: "Vacaiones",
                    start: "2019-01-30",
                    end: "2019-02-01",
                    color: 'orange'

                }
            ],
            item: 6,
            items: [
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    title: 'Pecho',
                    subtitle: "<span class='text--primary'>3 series x 12 reps</span> &mdash; Press Banca, Fondos en paralelas lastrados, flexiones explosivas",
                },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                    title: 'Espalda <span class="grey--text text--lighten-1"></span>',
                    subtitle: "<span class='text--primary'>4 series en 12-10-8-6 reps</span> &mdash; Dominadas lastradas, Peso muerto y Remo con mancuerna",
                },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    title: 'Triceps',
                    subtitle: "<span class='text--primary'>4 series en 12-10-8-6 reps</span> &mdash;Extensión de codos sentado, Extensión a una mano con mancuerna ",
                },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                    title: 'Biceps',
                    subtitle: "<span class='text--primary'>3 series x 12 reps</span> &mdash; Curl de biceps, Misionero, Dominadas con agarre supino lastradas",
                },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                    title: 'Cardio',
                    subtitle: "<span class='text--primary'>15 minutos</span> &mdash; Eliptica, Cinta de correr y escalada ",
                },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                    title: 'Abdominales',
                    subtitle: "<span class='text--primary'> 3 series x 12 reps</span> &mdash; Crunch abdominal, Plancha 40 segundos, Rueda ",
                },
            ],
            threeLine: true,
            avatar:false
        }),
        methods: {
            getEventColor(event) {
                if (event.color) return event.color
                else return 'light-blue'
            },
        }
    }
</script>

<style scoped>
  .vuely-toolbar {
    border: 0px !important;
    -webkit-box-shadow: 0 1px 15px 1px rgba(69,65,78,.08) !important;
    box-shadow: 0 1px 15px 1px rgba(69,65,78,.08) !important;
    -webkit-transition: all .4s ease-in-out 0s !important;
    transition: none !important;
  }
  .link {
    cursor: pointer !important;
  }
</style>
