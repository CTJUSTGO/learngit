<template>
  <div class="shop-header">
    <div class="shop-header-background"></div>
    <div class="shop-header-navBar">
      <router-link to="/">
        <svg><use xlink:href="#arrow-left"></use></svg> 
      </router-link>
    </div>
    <div class="shop-header-main">
      <img src="https://fuss10.elemecdn.com/9/ec/1f13f62196de7301242a6cebbc8e0png.png" />
      <div class="shop-header-content">
        <h2 class="shop-header-shopName">乐凯撒比萨（皇庭广场店）</h2>
        <p class="shop-header-delivery">
          <span>商家配送 / </span>
          <span>37分钟送达 / </span>
          <span>配送费¥9</span>
        </p>
        <div class="shop-header-notice">
          <span>公告：</span>
          <span>欢迎光临，用餐高峰期请提前下单，谢谢。</span>
        </div>
        <svg><use xlink:href="#arrow-right"></use></svg>
      </div>
    </div>
    <div class="shop-header-activities">
      <p>
        <i>新</i>
        <span>新用户下单立减17.0元(不与其它活动同享)</span>
      </p>
      <div>4个活动</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header'
  }
</script>

<style lang="scss">
@import '../../../static/hotcss/px2rem.scss';
  .shop-header{
    position: relative;
    padding-bottom:px2rem(60);
    color: #fff;
    font-size:px2rem(22);
    .shop-header-background{
      background-image: url('https://fuss10.elemecdn.com/9/ec/1f13f62196de7301242a6cebbc8e0png.png?imageMogr/format/webp/thumbnail/!40p/blur/50x40/');
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: #3190e8;
      background-size: cover;
      background-repeat: no-repeat;
      &:before{
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(119,103,137,.43);
      }
    }
    .shop-header-navBar{
      position: relative;
      padding:px2rem(8) px2rem(20);
      a{
        display:block;
        svg{
          width:px2rem(50);
          height:px2rem(50);
        }
      }
    }
    .shop-header-main{
      position: relative;
      display: flex;
      img{
        display: block;
        width: px2rem(128);
        height: px2rem(128);
        border: 1px solid #fff;
        border-radius:px2rem(5);
        margin:0 px2rem(20);
      }
      .shop-header-content{
        flex: 1;
        display: block;
        width: 0;
        padding-right:px2rem(10);
        h2{
          display:block;
          margin: 0;
          font-size:px2rem(35);
          line-height: px2rem(42);
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .shop-header-delivery{
          white-space: nowrap;
          height:px2rem(50);
          line-height:px2rem(50);
        }
        .shop-header-notice{
          height:px2rem(40);
          line-height:px2rem(40);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        svg{
          position:absolute;
          right:px2rem(10);
          top:50%;
          transform: translateY(-50%);
          fill:#fff;
          width:px2rem(50);
          height:px2rem(25);
        }
      }
    }
    .shop-header-activities{
      position: absolute;
      left:px2rem(20);
      right:px2rem(26);
      bottom:px2rem(10);
      color:#fff;
      p{
        display: flex;
        align-items: center;
        font-size:px2rem(20);
        line-height:px2rem(32);
        padding-right:px2rem(96);
        i{
          background-color: rgb(112, 188, 70);
          color: rgb(255, 255, 255);
          border-color: rgb(112, 188, 70);
          margin-right:px2rem(10);
          font-size:px2rem(20);
          font-style: normal;
          line-height: 1;
          height:px2rem(20);
          display: inline-block;
          box-sizing: border-box;
          text-align: center;
          border: 1px solid;
          border-radius: px2rem(1);
        }
      }
      div{
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
</style>

