<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Welcome to findMySynonyms!</h1>
    <!-- <Home msg="Welcome to findMySynonyms!"/> -->
    <input type="text" placeholder="Enter a word" id="input"
      @keyup="word = $event.target.value"
      v-on:keyup.delete="reset"
      />
      <div id="submit-button">
        <button v-on:click="fetch">Find Synonyms!</button>
        <button v-on:click="reset">Reset</button>
      </div>

      <div v-if="synonyms.length > 1">
        <p>Synonyms for {{ word }} are:</p>
        <ul id="syns-array">
          <li v-for="(item, index) in synonyms" v-bind:key="`item-${index}`" v-on:click="updateWord">
            {{ item }} 
          </li>
        </ul>
      </div>
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
      const wordSynonyms = await fetchSynonyms(this.$data.word)
      this.$data.synonyms = wordSynonyms
      let input = document.getElementById("input")
      input.value = ''
    },
    reset: function() {
      this.$data.synonyms = []
      this.$data.word = ''
    },
    updateWord: async function(e) {
     this.$data.word = e.target.innerText 
     const wordSynonyms = await fetchSynonyms(this.$data.word)
     this.$data.synonyms = wordSynonyms   
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
