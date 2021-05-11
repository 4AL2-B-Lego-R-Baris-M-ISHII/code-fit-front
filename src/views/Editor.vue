<template>
    <div class="editor">
        <h1>Editeur</h1>
        <p>
            Futur éditeur de code pour l'instant en C
        </p>
      <section class="editor__section">
        <div class="editor__section__code">
          <div class="element"></div>
        </div>
        <div>
          <button class="editor__section__button" @click="compileCode">Valider</button>
        </div>
      </section>
      <section class="result_section">
        <div>{{output}}</div>
      </section>

    </div>
    <button type='button' @click='logout()'>Se déconnecter</button>
</template>

<script>
import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import axios from 'axios'

export default {
  name: 'Editor',
  data () {
    return {
      editor: null,
      output: ''
    }
  },
  mounted () {
    this.editor = new Editor({
      element: document.querySelector('.element'),
      extensions: [
        StarterKit
      ],
      content: 'Hello World'
    })
  },
  beforeUnmount () {
    this.editor.destroy()
  },
  methods: {
    logout () {
      this.$router.replace({ name: 'login' })
    },
    async compileCode () {
      const content = this.editor.getJSON().content
        .map(element => element.content[0])
        .filter(element => element.type === 'text')
        .map(element => element.text)
        .join('\n')
      const codeRequest = {
        content,
        language: 'C'
      }
      const token = sessionStorage.getItem('code-fit-token')

      const headers = {
        'Access-Control-Allow-Origin': 'true',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        Authorization: `Bearer ${token}`
      }
      try {
        const response = await axios
          .post('http://localhost:8080/api/code',
            codeRequest,
            {
              headers
            }
          )
        this.output = response.data.output
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .editor {
      background-color: #FFFFFF;
      border: 1px solid #CCCCCC;
      padding: 20px;
      margin-top: 10px;

      &__section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        &__code {
          margin-bottom: 1rem;
          display: flex;
          flex-direction: row;
          justify-content: center;
          padding: 0 5rem;
          border: gray 1rem;
          .element {
            text-align: start;
            width: 100%;

          }
        }
        &__button {
          margin-bottom: 1rem;
          background-color: aqua;
          width: auto;
        }
      }
    }
</style>
