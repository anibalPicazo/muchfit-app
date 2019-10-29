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
          <v-flex>
            <p class="white--tex mt3 head-line"> Juanito Perez </p>
          </v-flex>
        </v-layout>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
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
      color="grey darken-3"
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
            title: 'Welcome',
            to: '/'
          },
          {
            icon: 'mdi-chart-bubble',
            title: 'Inspire',
            to: '/inspire'
          }
        ],
        miniVariant: false,
        title: 'Much Fit'
      }
    }
  }
</script>
