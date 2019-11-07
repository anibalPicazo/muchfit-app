<template>
  <v-snackbar top v-model="$store.state.notification.display" :color="$store.state.notification.color" :timeout="$store.state.notification.timeout">
    {{ $store.state.notification.text }}
    <v-btn dark text @click="$store.state.notification.display = false"><i class="material-icons">close</i></v-btn>
  </v-snackbar>

</template>

<script>
    export default {
        name: "Notification",
    }
</script>

<style scoped>

</style>
