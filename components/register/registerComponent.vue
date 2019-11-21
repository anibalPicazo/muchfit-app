<template>
<v-dialog v-model="dialog" persistent max-width="600px">
  <template v-slot:activator="{ on }">
    <v-btn rounded block large dark v-on="on">Registro</v-btn>
  </template>
  <v-card>
    <v-card-title>
      <span class="headline">Registro de usuario</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-form ref="form" lazy-validation v-model="valid" >

        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-text-field :rules="[v => !!v || 'Obligatorio']" required v-model="item.name" label="Nombre" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field :rules="[v => !!v || 'Obligatorio']" required v-model="item.surname" label="Apellido" hint="example of helper text only on focus"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field :rules="[v => !!v || 'Obligatorio']" required v-model="item.email" label="Email"required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field :rules="[v => !!v || 'Obligatorio']" required v-model="item.username" label="Username"required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field :rules="[v => !!v || 'Obligatorio']" required v-model="item.password" label="Password" hint="Introduce una contraseña de mas de 5 caracteres" type="password" required></v-text-field>
          </v-col>
        </v-row>
        </v-form>

      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
      <v-btn color="blue darken-1" text @click="submit">Save</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>
<script>
  export default {
    name: "register",
    data () {
      return {
        item:{},
        valid:false,
        dialog:false
      }
    },
    methods:{
      async submit(){
        if(this.$refs.form.validate()){
        console.log('sended item',this.item);
        this.item.uuid = this.$uuid.v4();
        let respone = await this.$axios.post('/register',this.item);
        this.dialog=false;
        }else{
            this.$store.commit("notification/show", {color:"error", text: 'Completa los campos obligatorios'});
        }
    }
    }
  }
</script>
