<template>
    <div id="editor">
        <h1>Editeur</h1>
        <p>
            Futur éditeur
        </p>
    </div>
    <button type='button' @click='logout()'>Se déconnecter</button>
</template>

<script>
export default {
  name: 'Editor',
  data () {
    return {
      authenticated: true
    }
  },
  methods: {
    logout () {
      this.authenticated = false
      this.$router.replace({ name: 'login' })
    }
  }
}
</script>

<style scoped>
    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>
