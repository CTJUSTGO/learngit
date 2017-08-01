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
        svg: '<g id="service_XMLID_1_"><path id="service_XMLID_6_" d="M32.2 9.5c-.2-.7-.1-.7-.4-.9-1.7-1.2-5.3.2-6.7 1.9-.8-3.8-3.8-6.1-4.7-5.9-.9-.2-4 2.1-4.8 5.9-1.3-1.7-5-3.1-6.7-1.9-.1.1-.5.6-.5.7C5.4 20.7 15 24.6 19 25.7v8.7c0 .7.3 1.2 1 1.2s1-.5 1-1.2v-8.6c4-1 14.2-4.8 11.2-16.3z"></path><path id="service_XMLID_7_" d="M6 25c-.9 0-1.6.7-1.6 1.5.1.8.7 1.5 1.6 1.5 3.1 0 6.5 1.5 8.5 3.7.3.3.7.6 1.1.6.4 0 .7-.1 1-.4.6-.6.6-1.6.1-2.3C14.1 26.8 10 25 6 25z"></path><path id="service_XMLID_8_" d="M34.6 25c-4 0-8.1 1.9-10.7 4.6-.6.6-.5 1.6.1 2.2.3.3.7.4 1 .4.4 0 .8-.3 1.1-.6 2-2.1 5.3-3.7 8.4-3.7h.1c.8 0 1.5-.7 1.5-1.5 0-.7-.7-1.4-1.5-1.4z"></path></g>',
        text: '服务中心',
        fillcolor: '4aa5f0;'
      }, {
        svg: '<path d="M30 5H10c-2.8 0-5 2.2-5 5v20c0 2.8 2.2 5 5 5h20c2.8 0 5-2.2 5-5V10c0-2.8-2.2-5-5-5zm-3.9 22.7c-.1.2-.3.4-.6.5-4.3 2.8-10.1 1.6-13-2.8-2.8-4.3-1.6-10.2 2.8-13 4.3-2.8 10.2-1.6 13 2.8.2.2.3.5.4.8.1.2 0 .5-.2.7l-8.8 5.7c-.2.2-.6.1-.7-.2l-.5-.7c-.4-.6-.2-1.5.4-1.9l5.6-3.6c.2-.2.3-.5.2-.7l-.1-.1c-2.2-1.8-5.4-2.1-7.9-.4-3.1 2-4 6.1-2 9.2 2 3.1 6.1 4 9.2 2 .6-.4 1.3-.2 1.7.4l.3.7c.1.2.4.5.2.6zm3.1-4.4l-.9.6c-.2.2-.6.1-.7-.2L26.5 22c-.2-.2-.1-.6.2-.7l1.8-1.1c.2-.2.6-.1.7.2l.6.9c.3.6.1 1.5-.6 2z"></path>',
        text: '下载饿了么APP',
        fillcolor: '3cabff;'
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
