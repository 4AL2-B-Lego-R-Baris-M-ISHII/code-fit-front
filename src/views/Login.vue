<template>
  <Nav />
  <div id='login'>
    <h1>Connexion</h1>
    <label for="username">Nom d'utilisateur</label>
    <br>
    <input
      id="username"
      type='text'
      name='username'
      v-model='username'
      placeholder=''
    />
    <br><br>
    <label for="password">Mot de passe</label>
    <br>
    <input
      id="password"
      type='password'
      name='password'
      v-model='password'
      placeholder=''
    />
    <br><br>
    <button type='button' @click='login()'>Se connecter</button>
    <br>
    <router-link to="/signup">S'inscrire</router-link>
  </div>
</template>

<script>
import axios from 'axios'
import Nav from '@/components/Nav'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    Nav
  },
  methods: {
    async login () {
      const user = { username: this.username, password: this.password }
      const response = await axios.post('http://localhost:8080/api/auth/signin', user)
      sessionStorage.setItem('code-fit-token', response.data.token)
      sessionStorage.setItem('code-fit-user-id', response.data.id)
      sessionStorage.setItem('code-fit-role', response.data.roles[0])
      this.$router.replace({ name: 'editor' })
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
