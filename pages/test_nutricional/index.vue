<template>
  <v-container fluid>
    <v-card>
    <v-row>
      <v-col md="12" sm="12">
        <v-card-title>
          <span class="headline">Test de entrenamiento</span>
        </v-card-title>
        <v-card-text>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Legal first name*" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Legal last name*"
              hint="example of persistent helper text"
              persistent-hint
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Email*" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Password*" type="password" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              :items="['0-17', '18-29', '30-54', '54+']"
              label="Age*"
              required
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6">
            <v-autocomplete
              :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
              label="Interests"
              multiple
            ></v-autocomplete>
          </v-col>
        </v-card-text>
      </v-col>
    </v-row>
    </v-card>
  </v-container>
</template>

<script>
    export default {
        name: "index.vue"
    }
</script>

<style scoped>

</style>
