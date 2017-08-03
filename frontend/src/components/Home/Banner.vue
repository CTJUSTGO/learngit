<template>
  <mt-swipe class="banner" :auto="0">
    <mt-swipe-item
      class="banner-list"
      :key="index"
      v-for="(item,index) in banner.bannerPage"
      >
      <a
        class="banner-list-a"
        :key="indexx"
        v-for="(ii,indexx) in banner.bannerPage[index]"
        @click="changet(ii.name)"
        href="#/filter"
        >
        <img class="banner-list-img" :src="sub(ii.image_hash)" alt="" />
        <span class="title">{{ ii.name }}</span>
      </a>
    </mt-swipe-item>
  </mt-swipe>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'banner',
  mounted () {
    this.$store.dispatch('banner')
  },
  computed: {
    ...mapState(['banner'])
  },
  methods: {
    changet: function (title) {
      this.$store.dispatch('changet', title)
      console.log(title)
    },
    sub (e) {
      if (e.substr(-3) === 'png') {
        return 'https://fuss10.elemecdn.com/' + e.substr(0, 1) + '/' + e.substr(1, 2) + '/' + e.substr(3) + '.png?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
      } else if (e.substr(-3) === 'peg') {
        return 'https://fuss10.elemecdn.com/' + e.substr(0, 1) + '/' + e.substr(1, 2) + '/' + e.substr(3) + '.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
      }
    }
  }
}
</script>
<style lang="scss">
@import '../../../static/hotcss/px2rem.scss';
.banner{
  height: px2rem(354);
  background-color: #fff;
  font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
  .mint-swipe-indicator.is-active{
    background: #000;
    opacity: .6;
  }
  .banner-list{
   flex-flow: wrap;
   height: 100%;
   box-sizing: content-box;
   overflow: hidden;
   .banner-list-a{
     display: block;
     float: left;
     margin-top: px2rem(22);
     box-sizing: border-box;
     height: 36%;
     text-align: center;
     text-decoration: none;
     width: 25%;
     .banner-list-img{
       display: inline-block;
       width: px2rem(90);
       height: px2rem(90);
     }
     .title{
       display: block;
       color: #333;
       font-size: px2rem(24);
       margin-top: px2rem(-10);
       margin-top: px2rem(0);
     }
   }
  }
}
</style>
