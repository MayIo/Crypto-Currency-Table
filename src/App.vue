<template>
  <div id="app">
    <app-list></app-list>
  </div>
</template>

<script>
import appList from './components/app-list.vue'

export default {
  name: 'app',
  components: {
    appList
  },
  computed: {
    check() {
      return this.$store.state.amount
    }
  }
}
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
}

body {
  overflow: hidden;
  background-image: url('http://www.apollodhaka.com/wp-content/uploads/2015/03/blue-bg2.jpg');
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
