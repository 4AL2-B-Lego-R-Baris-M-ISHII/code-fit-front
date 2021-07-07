<template>
    <Nav />
    <div id="admin">
        <router-link to="/admin/list">Liste des exercices</router-link>
        <router-link to="/admin/create">Créer un exercice</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
  name: 'Admin',
  components: {
    Nav
  },
  mounted () {
    if (sessionStorage.getItem('code-fit-token') === null) {
      this.$router.replace({ name: 'login' })
    } else if (sessionStorage.getItem('code-fit-role') !== 'ROLE_ADMIN') {
      this.$router.replace({ name: 'editor' })
    }
  }
}
</script>

<style lang='scss'>
#admin {
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
