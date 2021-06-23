<template>
    <Nav />
    <div id="admin">
        <router-link to="/list">Liste des exercices</router-link>
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
    } else if (sessionStorage.getItem('code-fit-role') !== 'ROLE_USER') {
      this.$router.replace({ name: 'editor' })
    }
  }
}
</script>

<style>
#admin {
}
</style>
