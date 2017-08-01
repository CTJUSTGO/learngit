<template>
  <div class="discount">
    <router-link class="dis" to="/">
      <svg class="youhuisvg" viewBox="0 0 48 48" id="luckybag" width="100%" height="100%"><path fill-rule="evenodd" d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm7.6 15H16.4c.1.1.1.2.1.4.4 2.5 3.3 4.3 7.1 4.4 2.4 0 4.8-.6 6.1-1.6.4-.3 1.1-.3 1.4.2.3.5.3 1.1-.2 1.4-1.6 1.3-4.3 2.1-7.1 2.1h-.5c-3.9-.2-7-2-8.3-4.6V32c0 .5.7 1 1.4 1h15.2c.8 0 1.4-.5 1.4-1V16c0-.5-.7-1-1.4-1zM35 32c0 1.7-1.5 3-3.4 3H16.4c-1.9 0-3.4-1.3-3.4-3V16c0-1.4 1-2.5 2.5-2.9h.2c.1-.1.3-.1.4-.1h15.5c1.9 0 3.4 1.3 3.4 3v16z"></path></svg>
      <p class="dis-text">优惠</p>
    </router-link>
    <router-link class="dis" to="/">
      <svg class="jifensvg" viewBox="0 0 48 48" id="profile-coins" width="100%" height="100%"><path fill-rule="evenodd" d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm-9 26.8v3.3c0 1.2 3.6 2.9 9 2.9s9-1.7 9-2.9v-3.3c-2.1 1.3-5.6 1.9-9 1.9-3.4.1-6.9-.6-9-1.9zM24 15c-5.8 0-9 1.8-9 2.8 0 1 3.2 2.8 9 2.8s9-1.8 9-2.8c0-1-3.2-2.8-9-2.8zm-9 5.6V24c0 .9 3.2 2.8 9 2.8s9-1.8 9-2.8v-3.4c-2.1 1.3-5.6 1.9-9 1.9-3.4 0-6.9-.6-9-1.9zM35 24v6.1c0 3.2-5.5 4.9-11 4.9s-11-1.7-11-4.9V17.8c0-3.1 5.5-4.8 11-4.8s11 1.6 11 4.8V24z"></path></svg>
      <p class="dis-text">积分</p>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'userdiscount'
}
</script>
<style lang="scss" scoped>
@import '../../../static/hotcss/px2rem.scss';
.discount{
  display: flex;
  justify-content: space-between;
  height: px2rem(168);
  .dis{
    width: 49.9%;
    background: #fff;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    svg{
      height: px2rem(52);
      width: px2rem(52);
      display: block;
    }
    .youhuisvg{
      fill: #ff5f3e;
    }
    .jifensvg{
      fill: #6ac20b;
    }
    .dis-text{
      font-size: px2rem(24);
      line-height: px2rem(28);
      margin-top: px2rem(10);
      color: #666;
    }
  }
}
</style>
