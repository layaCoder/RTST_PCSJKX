<template>
  <div id="app" >
    <loading-component v-if="this.$store.state.loading"></loading-component>
    <!-- <div v-if="this.$store.state.loading" class="loading">loading</div> -->
    <router-view v-show="!this.$store.state.loading"/>
    <footer v-show="!this.$store.state.loading"></footer>
  </div>
</template>

<script>
import loadingComponent from './components/parts/Common/LoadingComponet.vue'

export default {
  components:{loadingComponent},
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
