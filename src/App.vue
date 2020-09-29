<template>
<div id="app">
  <div>
    <router-link to="/">home</router-link>
    <router-link to="/Top">Top</router-link>
    <router-link to="/Infomation">Infomation</router-link>
    <router-link to="/A">A</router-link>
    <router-link to="/B">B</router-link>
    <router-link to="/C">C</router-link>
  </div>
  <hr>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App nijnij'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>