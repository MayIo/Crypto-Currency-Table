<template>
  <div id="app">
    <main-tab></main-tab>
  </div>
</template>

<script>
import mainTab from './components/main-tab.vue'

export default {
  name: 'app',
  components: {
    mainTab
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
