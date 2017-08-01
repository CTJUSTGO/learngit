<template>
  <div class="user-head">
    <svg>
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left.6f6409e"></use>
    </svg>
    <h1 class="title">我的</h1>
  </div>
</template>
<script>
export default {
  name: 'user-header'
}
</script>
<style lang="scss" scoped>
@import '../../../static/hotcss/px2rem.scss';
.user-head{
  background-image: linear-gradient(90deg,#0af,#0085ff);
  height: px2rem(87.98);
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: px2rem(36);
  .title{
    position: absolute;
    left: 50%;
    font-weight: 700;
    max-width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transform: translateX(-50%);
  }
  svg{
    width: px2rem(44);
    height: px2rem(44);
    margin-left: px2rem(22);
  }

}
</style>
