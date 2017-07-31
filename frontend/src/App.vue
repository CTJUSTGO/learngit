<template>
  <div id="app">
    <router-view></router-view>
    <my-bottomtab />
  </div>
</template>

<script>
import bomtab from './components/Bomtab'
export default {
  name: 'app',
  components: {
    'my-bottomtab': bomtab
  }
}
</script>

<style lang="scss">
@import './assets/css/reset.scss';

</style>
