<template>
  <div class="bottom">
    <router-link class="bombtn active" to="/">
      <svg>
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#index-regular.b245d60"></use>
      </svg>
      <span>外卖</span>
    </router-link>
    <router-link class="bombtn" to="/find">
      <svg>
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#discover-regular.8ef537f"></use>
      </svg>
      <span>发现</span>
    </router-link>
    <router-link class="bombtn" to="/">
      <svg>
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#order-regular.41c17f8"></use>
      </svg>
      <span>订单</span>
    </router-link>
    <router-link class="bombtn" to="/">
      <svg>
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#profile-regular.c151d62"></use>
      </svg>
      <span>我的</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'Bomtab',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
@import '../../static/hotcss/px2rem.scss';
.bottom{
  position: fixed;
  width: 100%;
  height: px2rem(100);
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: #fff;
  box-shadow: 0 px2rem(-2) px2rem(3) rgba(0,0,0,.1);
  padding-top: px2rem(9);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .bombtn{
    display: block;
    text-align: center;
    text-decoration: none;
    width: 25%;
    height: px2rem(69);
    font-size: px2rem(20);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #666;
    svg{
      width: px2rem(40);
      height: px2rem(40);
      display: block;
    }
    span{
      line-height: px2rem(24);
    }
  }
  .active{
    span{
      color: #0089dc;
    }
    svg{
      stroke: #0089dc;
    }
  }
}
</style>
