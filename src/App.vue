<template>

  <div id="app" class="cantainer">
    <link rel="stylesheet" href="//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css">
    <Container />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Container from './components/Container.vue';

@Component({
  components: {
    Container,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #eaedf0;
  color: #8a8f8f;
  padding-top: 20px;
  font: Roboto;
  font-size: 1.2em;
  min-height: 100vh;
}

</style>
