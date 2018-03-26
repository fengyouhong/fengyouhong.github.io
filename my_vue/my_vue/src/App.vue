<template>
  <div id="app">

    <header-view></header-view>
    <contact-view></contact-view>
    
     <router-link to="router1">router1</router-link>
    <router-link to="router2">router2</router-link>
    <router-view></router-view>

    <footer-view></footer-view>

  </div>
</template>

<script>
import HeaderView from './components/headerview'
import FooterView from './components/footerview'
import ContactView from './components/contactview'
export default {
  name: 'app',
  data () {
    return {
    }
  }, 
  components: {
    HeaderView,
    FooterView,
    ContactView
  }
  
}
</script>

<style>
body{
  margin: 0;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
li {
    text-decoration: none;
    list-style-type: none;
  }
</style>
