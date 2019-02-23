<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Welcome to findMySynonyms!</h1>
    <!-- <Home msg="Welcome to findMySynonyms!"/> -->
    <input type="test" placeholder="Enter a word"
      @keyup="word = $event.target.value"
      />
      <div id="submit-button">
        <button v-on:click="fetch">Find Synonyms!</button>
      </div>
      <p>Synonyms are:</p>
      <ul></ul>
  </div>
</template>

<script>

import Home from './components/Home.vue'
import { fetchSynonyms } from './utils.js'

export default {
  name: 'app',
  components: {
    Home
  },
  data() {
    return {
      word: '',
      synonyms: []
    }
  },
  methods: {
    fetch: async function() {
      const wordSynonyms = await fetchSynonyms(this.word)
      this.synonyms = wordSynonyms
    },
    displaySynonyms(syns) {
      syns.map((word) => {
        return <li>{word}</li>

      })

    }

  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
