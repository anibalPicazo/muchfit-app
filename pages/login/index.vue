<template>
        <v-container fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <h1 class="text-center mb-8 secondary--text">CertiApp</h1>
                    <form>
                        <v-text-field
                                v-model="username"
                                label="Usuario"
                                solo
                                required
                        ></v-text-field>
                        <v-text-field
                                type="password"
                                v-model="password"
                                label="Contraseña"
                                solo
                                required
                        ></v-text-field>
                        <v-btn block large color="secondary" @click="submit()">Acceder</v-btn>
                    </form>
                </v-flex>
            </v-layout>
        </v-container>
</template>

<script>

    export default {
        name: "login",
        computed: {

        },
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            submit() {
                this.clickLogin()
            },

            clickLogin: async function () {
                try {
                    const data = await this.$auth.loginWith('local', {
                        data: {
                            username: this.username,
                            password: this.password
                        }
                    })
                } catch (e) {
                    console.log(e)
                    this.error = e.response.data.message
                }
            }
        }
    }
</script>

<style scoped>

</style>
