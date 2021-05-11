<template>
  <div id='signup'>
    <h1>Inscription</h1>

    <label for="username">Nom d'utilisateur</label>
    <br>
    <input
      type='text'
      name='username'
      v-model='username'
      placeholder=''
    />
    <br><br>
    <label for="email">Email</label>
    <br>
    <input
      type='email'
      name='email'
      v-model='email'
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
    <button type='button' @click='signup()'>S'inscrire</button>
    <br>
    <button type='button' @click='login()'>Se connecter</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Signup',
  data () {
    return {
      username: '',
      password: '',
      email: ''
    }
  },
  methods: {
    signup () {
      console.log(this.username)
      console.log(this.email)
      console.log(this.password)
      const user = { username: this.username, email: this.email, password: this.password }
      console.log(user)
      axios.post('http://localhost:8080/api/auth/signup', user)
      this.$router.replace({ name: 'login' })
    },
    login () {
      this.$router.replace({ name: 'login' })
    }
  }
}
</script>

<style scoped>
#signup {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>
