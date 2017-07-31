<template>
  <div>
    <mt-navbar v-model="selected"> 
      <mt-tab-item id="1">商品</mt-tab-item>
      <mt-tab-item id="2">评价</mt-tab-item>
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

<style lang="scss">
@import '../../../static/hotcss/px2rem.scss';
  .mint-navbar{
    .mint-tab-item{
      padding: 0;
      flex: 1;
      display: block;
      width: 0;
      text-align: center;
      .mint-tab-item-label{
        height: px2rem(90);
         font-size: px2rem(28);
         line-height: px2rem(90);
      }
    }
  }
</style>
