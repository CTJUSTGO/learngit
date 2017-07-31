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
    }
  }
</script>

<style lang="scss">

</style>
