<template>
    <div id="create">
        <h1>Création</h1>
        <div>
          <input type="text" placeholder="Titre" v-model="exe.exeTitle">
          <input type="text" placeholder="Description" v-model="exe.exeDesc">
          <select v-model="exe.exeLang">
            <option value="">Choisir un langage</option>
            <!-- <option value="C">C</option> -->
            <option v-for="langage in langages" :key="langage.id" :value="langage.languageName">{{langage.languageName}}</option>
          </select>
          <button @click="fullExeCreate()">Créer</button>
        </div>
        <component :is="component" v-bind="this.exe"/>
    </div>
</template>

<script>
import axios from 'axios'
import fullExerciseCreate from '@/views/FullExerciseCreate.vue'

export default {
  name: 'List',
  data () {
    return {
      exercises: '',
      langages: [],
      exe: {
        exeTitle: '',
        exeDesc: '',
        exeLang: ''
      },
      component: ''
    }
  },
  async mounted () {
    const token = sessionStorage.getItem('code-fit-token')

    const headers = {
      'Access-Control-Allow-Origin': 'true',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${token}`
    }
    try {
      const response = await axios
        .get('http://localhost:8080/api/exercise',
          {
            headers
          }
        )
      this.exercises = response.data
      const responseLang = await axios
        .get('http://localhost:8080/api/language',
          {
            headers
          }
        )
      this.langages = responseLang.data
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    fullExeCreate () {
      if (this.exe.exeTitle !== '' && this.exe.exeDesc !== '' && this.exe.exeLang !== '') {
        this.component = fullExerciseCreate
      }
    }
  }
}
</script>
