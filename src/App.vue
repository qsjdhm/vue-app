<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from './vuex/store';
  export default {
    name: 'app',
    store: store
  }
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
    padding: 0;
    margin: 0;
    height: 100%;
}
</style>
