<template>
    <div id="editor">
        <h1>Editeur</h1>
        <p>
            Futur éditeur
        </p>
      <div class="element"></div>
    </div>
    <button type='button' @click='logout()'>Se déconnecter</button>
</template>

<script>
import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'

export default {
  name: 'Editor',
  data () {
    return {
      authenticated: true,
      editor: null
    }
  },

  mounted () {
    this.editor = new Editor({
      element: document.querySelector('.element'),
      extensions: [
        StarterKit
      ],
      content: '<p>Hello World!</p>'
    })
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
