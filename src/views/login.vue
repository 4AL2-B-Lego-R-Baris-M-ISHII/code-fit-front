<template>
  <div id='login'>
    <h1>Connexion</h1>
    <label for="username">Nom d'utilisateur</label>
    <br>
    <input
      type='text'
      name='username'
      v-model='username'
      placeholder=''
    />
    <br><br>
    <label for="password">Mot de passe</label>
    <br>
    <input
      type='password'
      name='password'
      v-model='password'
      placeholder=''
    />
    <br><br>
    <button type='button' @click='login()'>Se connecter</button>
    <br>
    <button type='button' @click='signup()'>S'inscrire</button>
  </div>
  <div v-if='token'>
      <p>{{ token }}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      token: null,
      authenticated: false
    }
  },
  mounted () {
    if (!this.authenticated) {
      this.$router.replace({ name: 'login' })
    }
  },
  methods: {
    async login () {
      console.log(this.username)
      console.log(this.password)
      const user = { username: this.username, password: this.password }
      // console.log(user)
      const response = await axios.post('http://localhost:8080/api/auth/signin', user)
      // console.log(response)
      this.token = response.data.token
      // console.log(this.token)
      this.authenticated = true
      // console.log(this.authenticated)
      this.$router.replace({ name: 'editor' })
    },
    signup () {
      this.$router.replace({ name: 'signup' })
    },
    setAuthenticated (status) {
      this.authenticated = status
    }
  }
}
</script>

<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>
