<template>
    <div id="fullExeCreate">
        <div>
          <input type="text" placeholder="Titre" v-model="exeTitle">{{ exe.exeTitle }}
          <input type="text" placeholder="Description" v-model="exeDesc">
          <select v-model="exeLang">
            <option value="">Choisir un langage</option>
            <option value="C">C</option>
            <option v-for="langage in langages" :key="langage.id" :value="langage.languageName">{{langage.languageName}}</option>
          </select>
        </div>
    </div>
</template>

<script>
export default {
  name: 'fullExerciseCreate',
  data () {
    return {
    }
  },
  mounted () {
    console.log(this.exeTitle)
  }
}
</script>
