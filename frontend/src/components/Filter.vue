<template>
  <div class="filter">
    <my-header />
    <Choose />
    <loadmore />
  </div>
</template>

<script>
import header from './filter/Header'
import choose from './filter/Choose'
import loadmore from './filter/Loadmore'
import { mapState } from 'vuex'
export default {
  name: 'filter',
  data () {
    return {

    }
  },
  components: {
    'my-header': header,
    'Choose': choose,
    'loadmore': loadmore
  },
  mounted () {
  },
  computed: {
    ...mapState(['homeList'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


</style>