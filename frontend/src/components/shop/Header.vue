<template>
  <div>
  <div class="shop-header" v-for="shopheader in shopheader">
    <div class="shop-header-background" :style="image(shopheader.image_path)"></div>
    <div class="shop-header-navBar">
      <router-link to="/">
        <svg><use xlink:href="#arrow-left"></use></svg> 
      </router-link>
    </div>
    <div class="shop-header-main" v-on:click="fage = !fage">
      <img :src="sub(shopheader.image_path)" alt="">
      <div class="shop-header-content">
        <h2 class="shop-header-shopName">{{ shopheader.name }}</h2>
        <p class="shop-header-delivery">
          <span>商家配送/</span>
          <span>{{ shopheader.order_lead_time }}分钟送达 / </span>
          <span>配送费¥{{ shopheader.float_delivery_fee }}</span>
        </p>
        <div class="shop-header-notice">
          <span>公告：</span>
          <span>{{ shopheader.promotion_info }}</span>
        </div>
        <svg><use xlink:href="#arrow-right"></use></svg>
      </div>
    </div>
    <div class="shop-header-activities" v-on:click="show = !show">
      <p>
        <i>{{ shopheader.activities[0].icon_name }}</i>
        <span>{{ shopheader.activities[0].description }}</span>
      </p>
      <div>{{ shopheader.activities.length }}个活动</div>
    </div>
    <transition name="fade">
      <div v-if="show" class="bulletin-modal-container">
        <h2>{{ shopheader.name }}</h2>
        <div class="rating-wrapper">
          <div class="rating-max">
            <svg><use xlink:href="#rating-star"></use></svg>
            <svg><use xlink:href="#rating-star"></use></svg>
            <svg><use xlink:href="#rating-star"></use></svg>
            <svg><use xlink:href="#rating-star"></use></svg>
            <svg><use xlink:href="#rating-star"></use></svg>
          </div>
          <div class="rating-rating">
            <svg><use xlink:href="#rating-star"></use></svg>
            <svg><use xlink:href="#rating-star"></use></svg>
            <svg><use xlink:href="#rating-star"></use></svg>
            <svg><use xlink:href="#rating-star"></use></svg>
            <svg><use xlink:href="#rating-star"></use></svg>
          </div>
        </div>
        <h3><span>优惠信息</span></h3>
        <p v-for="item in shopheader.activities" class="activity-container">
          <i>{{ item.icon_name }}</i>
          <span>{{ item.description }}</span>
        </p>
        <h3><span>商家公告</span></h3>
        <div>{{ shopheader.promotion_info }}</div>
        <div class="bulletin-modal-close" v-on:click="show = !show">
          <svg><use xlink:href="#res-x"></use></svg>
        </div>
      </div>
    </transition>
    <transition name="fage">
      <div v-if="fage" class="modal-container">
        <header>
          <svg v-on:click="fage = !fage"><use xlink:href="#arrow-left"></use></svg>
          <h1>商家详情</h1>
        </header>
        <div class="modal-content">
          <section class="section">
            <h3>活动与属性</h3>
            <div>
              <div v-for></div>
            </div>
          </section>
        </div>
      </div>
    </transition>
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'header',
  mounted () {
    var id = this.$route.params.id
    this.$store.dispatch('shopheader', id)
  },
  computed: {
    ...mapState(['shopheader'])
  },
  data () {
    return {
      'show': false,
      'fage': false
    }
  },
  methods: {
    sub (e) {
      if (e.substr(-3) === 'png') {
        return 'https://fuss10.elemecdn.com/' + e.substr(0, 1) + '/' + e.substr(1, 2) + '/' + e.substr(3) + '.png?imageMogr/format/webp/thumbnail/!69x69r/gravity/Center/crop/69x69/'
      } else if (e.substr(-3) === 'peg') {
        return 'https://fuss10.elemecdn.com/' + e.substr(0, 1) + '/' + e.substr(1, 2) + '/' + e.substr(3) + '.jpeg?imageMogr/format/webp/thumbnail/!69x69r/gravity/Center/crop/69x69/'
      }
    },
    image (e) {
      if (e.substr(-3) === 'png') {
        return 'background-image:url(https://fuss10.elemecdn.com/' + e.substr(0, 1) + '/' + e.substr(1, 2) + '/' + e.substr(3) + '.png?imageMogr/format/webp/thumbnail/!40p/blur/50x40/)'
      } else if (e.substr(-3) === 'peg') {
        return 'background-image:url(https://fuss10.elemecdn.com/' + e.substr(0, 1) + '/' + e.substr(1, 2) + '/' + e.substr(3) + '.jpeg?imageMogr/format/webp/thumbnail/!40p/blur/50x40/)'
      }
    }
  }
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
          fill:#fff;
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  .fage-enter-active, .fage-leave-active {
    transition: opacity .5s
  }
  .fage-enter, .fage-leave-to {
    opacity: 0
  }
  .bulletin-modal-container{
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: px2rem(60) solid transparent;
    border-top-width: px2rem(80);
    border-bottom-width: px2rem(180);
    overflow: auto;
    background-color: #262626;
    color: #fff;
    h2{
      text-align: center;
      font-size: px2rem(36);
    }
    .rating-wrapper{
      margin-top: px2rem(10);
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      display: inline-block;
      vertical-align: middle;
      .rating-max{
        display: flex;
        height: px2rem(40);
        svg{
          fill: #ddd;
          display: block;
          flex: none;
          width: px2rem(40);
          height: px2rem(40);
        }
      }
      .rating-rating{
        height: px2rem(40);
        display: flex;
        position: absolute;
        left: 0;
        top: 0;
        overflow: hidden;
        svg{
          fill: #ffaa0c;
          display: block;
          flex: none;
          width: px2rem(40);
          height: px2rem(40);
        }
      }
    }
    h3{
      text-align: center;
      margin: px2rem(60) 0 px2rem(40) 0;
      background-position: 50%;
      background-size: 100% 1px;
      background-repeat: no-repeat;
      font-weight: 400;
      span{
        font-size: px2rem(24);
        padding: px2rem(10) px2rem(20);
        border-radius: px2rem(50);
        border: px2rem(1) solid #555;
        background-color: #262626;
      }
    }
    .activity-container{
      font-size: px2rem(20);
      line-height: px2rem(32);
      display: flex;
      i{
        background-color: rgb(240, 115, 115);
        color: rgb(255, 255, 255);
        border-color: rgb(240, 115, 115);
        margin-right: px2rem(10);
        margin-top: px2rem(5);
        font-style: normal;
        line-height: 1;
        height: px2rem(20);
        display: inline-block;
        box-sizing: border-box;
        text-align: center;
        border: 1px solid;
        border-radius: px2rem(3);
      }
    }
    .bulletin-modal-close{
      position: fixed;
      left: 0;
      right: 0;
      bottom: px2rem(50);
      margin: auto;
      width: px2rem(88);
      height: px2rem(88);
      border: 1px solid #888;
      border-radius: 50%;
      svg{
        fill: #fff;
        width: 100%;
        height: 100%;
        transform: scale(.3);
      }
    }
  }
  .modal-container{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: auto;
    z-index: 100;
    background-color: red;
    header{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      text-align: center;
      background-color: #2196f3;
      color: #fff;
      height: px2rem(88);
      line-height: px2rem(88);
      z-index: 999;
      svg{
        position: absolute;
        width: px2rem(60);
        height: px2rem(40);
        left: px2rem(8);
        top: px2rem(24);
        fill: #fff;
      }
      h1{
        font-size: px2rem(40);
        font-weight: 400;
      }
    }
    .modal-content{
      padding-top: px2rem(88);
      height: 100%;
      box-sizing: border-box;
      overflow: auto;
    }
  }
</style>

