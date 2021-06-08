<template>
    <div id='nav'>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <router-link class="navbar-brand" to="/main">Accueil</router-link>
        <router-link v-if="authenticated" class="navbar-brand" to="/editor">Editeur</router-link>
        <a class="navbar-brand" v-if="authenticated" @click="logout()">Se déconnecter</a>
        <router-link class="navbar-brand" v-if="!authenticated" to="/login">Se connecter</router-link>
      </nav>
    </div>
</template>

<script lang="ts">
export default {
  name: 'Nav',
  data () {
    return {
      authenticated: ''
    }
  },
  methods: {
    logout () {
      sessionStorage.removeItem('code-fit-token')
      this.$router.replace({ name: 'login' })
    }
  },
  mounted () {
    const auth = sessionStorage.getItem('code-fit-token')
    if (auth !== null) {
      this.authenticated = auth
    }
  }
}
</script>

<style lang='scss'>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 15px;
    cursor: pointer;
    text-decoration: underline;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
