<template>
  <div class="maintop">
    <router-link class="maintop-router" key="index" to="/" v-for="(item,index) in list">
      <svg class="icon" viewBox="0 0 40 40" id="order" width="100%" height="100%" v-html="item.svg" :style="'fill: #' + item.fillcolor"></svg>
      <div class="maintop-router-text">
        <span>{{item.text}}</span>
        <svg class="r-icon" viewBox="0 0 1024 1024" id="arrow-right" width="100%" height="100%"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path></svg>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'usermaintop',
  data () {
    return {
      list: [{
        svg: '<path d="M31.5 3h-23C6 3 4 5.1 4 7.7v24.7C4 34.9 6 37 8.5 37h23c2.5 0 4.5-2.1 4.5-4.7V7.7C36 5.1 34 3 31.5 3zM11.8 28.2c-1.1 0-2-.9-2-2.1 0-1.1.9-2.1 2-2.1s2 .9 2 2.1c0 1.2-.9 2.1-2 2.1zm0-6.1c-1.1 0-2-.9-2-2.1 0-1.1.9-2.1 2-2.1s2 .9 2 2.1c0 1.1-.9 2.1-2 2.1zm0-6.2c-1.1 0-2-.9-2-2.1 0-1.1.9-2.1 2-2.1s2 .9 2 2.1c0 1.2-.9 2.1-2 2.1zm5.1 11.9h13.5v-2.6H16.9v2.6zm0-6.5h13.5v-2.6H16.9v2.6zm0-6.6h13.5v-2.6H16.9v2.6z"></path>',
        text: '我的商城',
        fillcolor: '4aa5f0;'
      }, {
        svg: '<path d="M34.6 7.1c0-1.1-1-2.1-2.1-2.1h-24c-1.1 0-2 1-2.1 2.1l-1.6 25C4.6 34.3 6.3 36 8.5 36h24c2.2 0 3.9-1.7 3.7-3.9l-1.6-25zm-5.9 6.1c-.2 4.6-3.7 8.2-8.3 8.2-4.6 0-8.2-3.7-8.4-8.3-.3-.2-.5-.6-.5-1 0-.7.6-1.2 1.3-1.2s1.3.6 1.3 1.2c0 .5-.3.9-.7 1.1.2 3.8 3.2 6.8 7.1 6.8 3.9 0 6.8-3.1 7-6.9-.4-.2-.6-.6-.6-1.1 0-.7.6-1.2 1.3-1.2s1.3.6 1.3 1.2c-.2.6-.4 1-.8 1.2z"></path>',
        text: '积分商城',
        fillcolor: 'fc7b53;'
      }, {
        svg: '<path d="M7 33.4c0 1.1.9 1.6 2 1.6h22c1.1 0 2-.5 2-1.6V31H7v2.4z"></path><path d="M32.1 14.3c-.6 2.3-2.6 4-5.1 4-2.9 0-5.3-2.3-5.3-5.2v-.2c-.5.2-1 .3-1.6.3-.6 0-1.1-.1-1.7-.3v.2c0 2.9-2.4 5.2-5.3 5.2-2.5 0-4.6-1.7-5.1-4.1-.5.4-1.2.6-1.8.6-.3 0-.5.1-.8 0L7.2 29h26l1.7-14.2c-.3.1-.5.1-.8.1-.8 0-1.5-.2-2-.6z" class="st0"></path><ellipse cx="20.1" cy="8.2" rx="3.2" ry="3.2"></ellipse><ellipse cx="6.4" cy="10.5" rx="2.4" ry="2.4"></ellipse><ellipse cx="33.8" cy="10.5" rx="2.4" ry="2.4"></ellipse>',
        text: '饿了么会员卡',
        fillcolor: 'ffc636;'
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../static/hotcss/px2rem.scss';
.maintop{
  margin-top: px2rem(20);
  border: px2rem(1) solid #ddd;
  border-left: none;
  border-right: none;
  .maintop-router{
    display: flex;
    background: #fff;
    text-decoration: none;
    align-items: center;
    .icon{
      display: block;
      height: px2rem(36);
      width: px2rem(36);
      margin: 0 px2rem(20);
    }
    .maintop-router-text{
      padding: px2rem(25) px2rem(20);
      padding-left: 0;
      border-bottom: px2rem(1) solid #ddd;
      display: flex;
      justify-content: space-between;
      flex: 1;
      span{
        display: block;
        color: #333;
        line-height: px2rem(34);
        font-size: px2rem(34);
      }
      .r-icon{
        display: block;
        width: px2rem(20);
        height: px2rem(20);
        fill: #bbb;
      }
    }
  }
}
</style>
