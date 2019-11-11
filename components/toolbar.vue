<template>
  <div>
    <v-navigation-drawer
      color="grey darken-3"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      temporary>
      <v-list>
        <v-layout mt-4 column align-center>
          <v-flex>
            <v-avatar >
              <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
            </v-avatar>
          </v-flex>
          <v-flex class="mt-3">
            <p style="color: white"> Anibal Picazo </p>
            <v-spacer></v-spacer>
            <v-list-item class="ma-1 shadow-1 ml-4">
              <v-list-item-content>
                <div class="overline">
                 <v-btn color="grey darken-3" elevation="0" @click="logout"> <v-icon color="error" class="mr-3">mdi-location-exit</v-icon></v-btn>
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-flex>

        </v-layout>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          dark
          v-show="manageView(item)"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="primary" dark style="box-shadow: none !important;"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-avatar><img src="../assets/images/logov1peq.png" alt="avatar"></v-avatar>
    </v-app-bar>

  </div>
</template>
<script>
  export default {
    name: "toolbar",
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          {
            icon: 'mdi-apps',
            title: 'Panel de control',
            to: '/dashboard'
          },
          {
            icon: 'mdi-book-open-page-variant',
            title: 'Cuaderno de entrenamiento',
            to: '/inspire'
          },
          {
            icon: 'mdi-weight-lifter',
            title: 'Mi Rutina',
            to: '/inspire'
          },{
            icon: 'mdi-food-apple',
            title: 'Mi Dieta',
            to: '/inspire'
          },
          {
            icon: 'mdi-clipboard-alert-outline',
            title: 'Test Nutricional',
            to: '/test_nutricional'
          },
          {
            icon: 'mdi-clipboard-pulse',
            title: 'Test Rutina',
            to: '/test_entrenamiento'
          }

        ],
        miniVariant: false,
        title: 'Much Fit'
      }
    },
    methods:{
        logout() {
            this.$auth.logout()
            this.$router.push("/login")
        },
        manageView(item){
         if(item.title === 'Mi Rutina'){
             return !! this.$auth.user.rutina;
         }
         if(item.title === 'Mi Dieta'){
             return !! this.$auth.user.dieta;

         }
         return true;

        }
    }
  }
</script>
