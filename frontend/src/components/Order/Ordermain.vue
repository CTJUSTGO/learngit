<template>
  <div class="main">
    <div class="nois-login" v-if="isLogin">
      <img src="https://fuss10.elemecdn.com/6/87/4efda8c6bf4734d39faf86fe190c3gif.gif" alt="">
      <h3>近三个月无外卖订单记录</h3>
      <p>查看三个月前的外卖订单<svg viewBox="0 0 547 987" id="arrow-right" width="100%" height="100%"><path fill="#999" fill-rule="evenodd" d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"></path></svg></p>
    </div>
    <div class="is-login" v-else>
      <img src="https://fuss10.elemecdn.com/f/18/9fb04779371b5b162b41032baf5f3gif.gif" alt="">
      <h3>登录后查看外卖订单</h3>
      <button @click="toLogin">立即登录</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ordermain',
  data () {
    return {
      isLogin: false
    }
  },
  methods: {
    toLogin () {
      window.location.href = '#/login'
    },
    getCookie: function (name) {
      var reg = new RegExp('(^| )' + name + '(?:=([^;]*))?(;|$)')
      var val = document.cookie.match(reg)
      return val ? (val[2] ? unescape(val[2]) : '') : null
    }
  },
  mounted () {
    console.log(this.getCookie('isLogin'))
    if (this.getCookie('isLogin')) {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../static/hotcss/px2rem.scss';
.main{
  .is-login{
    width: 100%;
    margin-top: px2rem(200);
    text-align: center;
    h3{
      color: #6a6a6a;
      font-size: px2rem(34);
      line-height: px2rem(40);
      margin: px2rem(25) 0;
      font-weight: 0;
    }
    button{
      background-color: #56d176;
      color: #fff;
      border: none;
      border-radius: px2rem(4);
      font-size: px2rem(28);
      padding: px2rem(20);
      width: px2rem(210);
    }
  }
  .nois-login{
    width: 100%;
    margin-top: px2rem(200);
    text-align: center;
    h3{
      color: #6a6a6a;
      font-size: px2rem(34);
      line-height: px2rem(40);
      margin: px2rem(25) 0;
      font-weight: 0;
    }
    p{
      font-size: px2rem(24);
      line-height: px2rem(29);
      color: #999;
      svg{
        width: px2rem(10);
        height: px2rem(14);
        margin-left: px2rem(10);
        transform: rotate(90deg);
      }
    }
  }
}
</style>
