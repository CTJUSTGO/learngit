<template>
  <div class="home">
    <my-header />
    <my-banner />
    <my-loadmore />
    <my-bottom />
  </div>
</template>

<script>
import header from './Header'
import banner from './Banner'
import loadmore from './Loadmore'
import bomtab from './Bomtab'
export default {
  name: 'home',
  data () {
    return {

    }
  },
  components: {
    'my-header': header,
    'my-banner': banner,
    'my-loadmore': loadmore,
    'my-bottom': bomtab
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


</style>
