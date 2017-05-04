<template>
  <div id="app">
      <transition name="slide-left">
          <router-view class="child-view"></router-view>
      </transition>
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
    overflow-x: hidden;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
    opacity: 0
}
.child-view {
    position: absolute;
    transition: all .5s cubic-bezier(.55,0,.1,1);
    top: 0;
    bottom: 0;
    overflow-x: hidden!important;
}
.slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
}
</style>
