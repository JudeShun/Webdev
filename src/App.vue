<template>
  <div id="app">
    <Header>

    </Header>
   
  </div>
  
</template>


<script>
import Header from './components/Frame/Header.vue'
import AppBody from './components/Frame/Body.vue'

export default {
  name: 'app',
  components: {
    Header,
    AppBody
  }
}
</script>

<style>

/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
