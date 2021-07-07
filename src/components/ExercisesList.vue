<template>
    <div id="list">
        <h1>Liste</h1>
        <table>
          <th>Titre</th>
          <th>Description</th>
          <th>Actions</th>
          <tr v-for="exercise in exercises" :key="exercise.id">
            <td>{{ exercise.title }}</td>
            <td>{{ exercise.description }}</td>
            <td>todo crud</td>
          </tr>
        </table>
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
