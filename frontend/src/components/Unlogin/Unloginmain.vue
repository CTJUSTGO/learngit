<template>
  <div>
    <button class="unlogin-btn" @click="delCookie('isLogin')">退出登录</button>
  </div>
</template>
<script>
export default {
  name: 'username',
  methods: {
    getCookie: function (name) {
      var reg = new RegExp('(^| )' + name + '(?:=([^;]*))?(;|$)')
      var val = document.cookie.match(reg)
      return val ? (val[2] ? unescape(val[2]) : '') : null
    },
    delCookie: function (name, path, domain, secure) {
      var value = this.getCookie(name)
      if (value != null) {
        var exp = new Date()
        exp.setMinutes(exp.getMinutes() - 1000)
        path = path || '/'
        document.cookie = name + '=;expires=' + exp.toGMTString() + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '')
      }
      window.location.href = '#/user'
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../static/hotcss/px2rem.scss';
  .unlogin-btn{
    display: block;
    color: #fff;
    background-color: #ff5339;
    font-weight: 800;
    margin: px2rem(30) auto;
    padding: px2rem(22) 0;
    border: none;
    border-radius: px2rem(6);
    font-size: px2rem(34);
    width: 90%;
  }
</style>
