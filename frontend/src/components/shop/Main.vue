<template>
  <div>
    <mt-navbar v-model="selected"> 
      <mt-tab-item id="1">商品</mt-tab-item>
      <mt-tab-item id="2">评价</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <Tab1 />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <Tab2 />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import Tab2 from './Tab2'
import Tab1 from './Tab1'
export default {
  name: 'main',
  data () {
    return {
      selected: '1'
    }
  },
  components: {
    'Tab1': Tab1,
    'Tab2': Tab2
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
