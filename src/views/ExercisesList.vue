<template>
    <div id="list">
        <h1>Liste</h1>
        <ul>
          <li v-for="exercise in exercises" :key="exercise.id">{{ exercise.title }}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'List',
  data () {
    return {
      exercises: ''
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
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
