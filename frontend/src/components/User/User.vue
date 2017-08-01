<template>
  <div class="user">
    <user-header />
    <user-top />
    <user-discount />
    <user-maintop />
    <user-mainbom />
    <user-bottom />
  </div>
</template>
<script>
import header from './Userheader'
import top from './Usertop'
import discount from './Userdiscount'
import maintop from './Usermaintop'
import mainbom from './Usermainbom'
import bomtab from './Bomtab'
export default {
  name: 'User',
  components: {
    'user-header': header,
    'user-top': top,
    'user-discount': discount,
    'user-maintop': maintop,
    'user-mainbom': mainbom,
    'user-bottom': bomtab
  }
}
</script>
<style lang="scss" scoped>

</style>
