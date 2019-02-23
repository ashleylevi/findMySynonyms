<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Home msg="Welcome to findMySynonyms!"/>
  </div>
</template>

<script>

import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  },
  // methods: {
  //   async fetchWords() {
  //     const response = await fetch('')
  //     const words = await response.json()

  //   }

  // }

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
