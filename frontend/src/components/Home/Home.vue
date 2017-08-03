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
import { mapState } from 'vuex'
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
  },
  computed: {
    ...mapState(['homeprolist'])
  },
  methods: {
    loadMore () {
      var _this = this
      if (_this.loading) {
        return false
      }
      _this.loading = true
      setTimeout(() => {
        _this.$store.dispatch('homeprolist')
        _this.loading = false
      }, 50)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


</style>
