<template>
  <div id="app">
    <i class="fas fa-book-reader"></i>
    <h1>Welcome to <span class="title">findMySynonyms!</span></h1>
    <!-- <Home msg="Welcome to findMySynonyms!"/> -->
    <input type="text" placeholder="Enter a word" id="input"
      @keyup="word = $event.target.value"
      v-on:keyup.delete="reset"
      />
      <div id="submit-button">
        <button v-on:click="fetch">Find synonyms</button>
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

// import Home from './components/Home.vue'
import { fetchSynonyms } from '../utils.js'

export default {
  name: 'app',
  components: {
    
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
body {
  background-color: #120309;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 160px;
}

h1 {
  color: #CECCCC;
}

span {
  color: #FDECEF;
  font-weight: 700;
}

#input {
  width: 300px;
  height: 30px;
  border: 5px solid #CECCCC; 
  background-color: #fff;
}

input::placeholder {
  font-size: 15px;
}

input[type=text] {
  font-size: 15px;
  padding-left: 10px;
}

button {
  height: 30px;
  width: 142px;
  margin: 10px 10px 20px 10px;
  border: 5px solid #CECCCC;
  font-size: 15px;
  
}

button:hover  {
  cursor: pointer;
  background-color: #FDECEF;
}

li:hover {
  cursor: pointer;
}

i {
  font-size: 30px;
  color: #FDECEF;
}
</style>
