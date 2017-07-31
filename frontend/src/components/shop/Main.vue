<template>
  <div>
    <mt-navbar v-model="selected"> 
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        111
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        2222
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  export default {
    name: 'main',
    data () {
      return {
        selected: '1'
      }
    }

  }
</script>

<style>

</style>
