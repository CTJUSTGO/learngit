<template>
  <div id="shop">
    <shop-header />
    <shop-main />
  </div>
</template>

<script>
  import Header from './shop/Header'
  import Main from './shop/Main'
  export default {
    name: 'shop',
    components: {
      'shop-header': Header,
      'shop-main': Main
    },
    mounted () {
      this.$store.dispatch('ratingstags', this.$route.params.id)
    }
  }
</script>

<style lang="scss">

</style>
