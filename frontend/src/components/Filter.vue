<template>
  <div class="filter">
    <my-header />
    <Choose />
  </div>
</template>

<script>
import header from './filter/Header'
import choose from './filter/Choose'
export default {
  name: 'filter',
  data () {
    return {

    }
  },
  components: {
    'my-header': header,
    'Choose': choose
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


</style>