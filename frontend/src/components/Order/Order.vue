<template>
  <div>
    <ord-header />
    <ord-main />
    <ord-bottom />
  </div>
</template>
<script>
import header from './Orderheader'
import main from './Ordermain'
import bomtab from './Bomtab'
export default {
  name: 'Order',
  components: {
    'ord-header': header,
    'ord-main': main,
    'ord-bottom': bomtab
  }
}
</script>
<style lang="scss" scoped>

</style>
