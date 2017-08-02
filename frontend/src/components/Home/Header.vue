<template>
  <div class="my-header">
    <div class="my-header-t">
      <div class="my-header-t-l">
        <svg class="index-3guVd">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#location"></use>
        </svg>
        <span>{{ place }}</span>
        <svg class="index-9eIfV">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow"></use>
        </svg>
      </div>
      <div class="my-header-t-r" v-for="item in weather">
        <div class="my-header-t-r-l">
          <span>{{ item.temperature + '°' }}</span>
          <span>{{ item.description }}</span>
        </div>
        <div class="my-header-t-r-r">
          <img :src="sub(item.image_hash)" alt="">
        </div>
      </div>
    </div>
    <div class="my-header-m">
      <router-link to="/shop/1" class="serach">
        <input type="text" :value="homeinput">
      </router-link>
    </div>
    <div class="my-header-b">
      <router-link to="/serach" key="index" class="hot-serach" v-for="(item, index) in hotsearch">{{ item.word }}</router-link>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'my-header',
  mounted () {
    this.$store.dispatch('weather')
    this.$store.dispatch('hotsearch')
    this.$store.dispatch('place')
  },
  computed: {
    ...mapState(['weather', 'place', 'hotsearch', 'homeinput'])
  },
  methods: {
    sub (e) {
      if (e.substr(-3) === 'png') {
        return 'https://fuss10.elemecdn.com/' + e.substr(0, 1) + '/' + e.substr(1, 2) + '/' + e.substr(3) + '.png?imageMogr/format/webp/thumbnail/!69x69r/gravity/Center/crop/69x69/'
      } else if (e.substr(-3) === 'peg') {
        return 'https://fuss10.elemecdn.com/' + e.substr(0, 1) + '/' + e.substr(1, 2) + '/' + e.substr(3) + '.jpeg?imageMogr/format/webp/thumbnail/!69x69r/gravity/Center/crop/69x69/'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../static/hotcss/px2rem.scss';
.my-header{
  height: px2rem(203.984);
  box-sizing: content-box;
  padding: px2rem(20) px2rem(28);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: linear-gradient(90deg,#0af,#0085ff);
  font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
  .my-header-t{
    display: flex;
    justify-content: space-between;
    .my-header-t-l{
      width: 60%;
      display: flex;
      align-items: center;
      .index-3guVd{
        width: px2rem(26);
        height: px2rem(31);
      }
      span{
        font-size: px2rem(36);
        display: block;
        margin: 0 px2rem(10);
        max-width: 80%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #FFF;
        height: px2rem(43);
        line-height: px2rem(43);
      }
      .index-9eIfV{
        width: px2rem(14);
        height: px2rem(7);
      }
    }
    .my-header-t-r{
      display: flex;
      .my-header-t-r-l{
        text-align: right;
        span{
          display: block;
          color: #FFF;
          font-size: px2rem(28);
          line-height: px2rem(33.6);
          &:nth-child(2){
            font-size: px2rem(24);
            line-height: px2rem(28.8);
          }
        }
      }
      .my-header-t-r-r{
        img{
          width: px2rem(55);
          height: px2rem(55);
          margin-left: px2rem(8);
        }
      }
    }
  }
  .my-header-m{
    .serach{
      text-decoration: none;
      input{
        margin: px2rem(15) 0;
        display: block;
        width: 100%;
        height: px2rem(70);
        color: #333;
        text-align: center;
        border: px2rem(1) solid #999;
        box-shadow: 0 px2rem(1) px2rem(2) 0 rgba(0,0,0,.2);
        font-size: px2rem(26);
        border-radius: px2rem(70);
      }
    }
  }
  .my-header-b{
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow-x: auto;
    .hot-serach{
      text-decoration: none;
      color: #FFF;
      font-size: px2rem(24);
      line-height: px2rem(28.8);
      margin-right: px2rem(30);
    }
  }
}

</style>
