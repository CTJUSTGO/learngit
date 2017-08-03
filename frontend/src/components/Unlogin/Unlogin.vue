<template>
  <div>
    <unlogin-header />
    <unlogin-main />
  </div>
</template>
<script>
import header from './Unloginheader'
import main from './Unloginmain'
export default {
  name: 'Unlogin',
  components: {
    'unlogin-header': header,
    'unlogin-main': main
  }
}
</script>
<style lang="scss" scoped>

</style>
