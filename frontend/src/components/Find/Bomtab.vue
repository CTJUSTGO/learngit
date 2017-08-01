<template>
  <div class="bottom">
    <div class="bombtn" key="index" v-for="(item,index) in bottom">
      <router-link class="bottom-a" :to="item.route">
          <svg v-html="item.svgtrue" v-if="bottom[index].isActive"></svg>
          <svg v-html="item.svg" v-else></svg>
          <span v-if="bottom[index].isActive" :style="'color:#'+item.texttrue">{{item.text}}</span>
          <span v-else>{{item.text}}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Bomtab',
  data () {
    return {
      bottom: [{
        text: '外卖',
        texttrue: '0089dc',
        route: '/',
        svg: '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#index-regular.b245d60"></use>',
        svgtrue: '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#index.18edf5a"></use>',
        isActive: false
      }, {
        text: '发现',
        texttrue: '0089dc',
        route: '/find',
        svg: '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#discover-regular.8ef537f"></use>',
        svgtrue: '<g fill="none" fill-rule="evenodd"><path fill="url(#discover.5811137_a)" d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"></path><path fill="#FFF" d="M12.79 28.126c-1.515.68-2.169.016-1.462-1.484l3.905-8.284c.47-.999 1.665-2.198 2.66-2.675l8.484-4.064c1.497-.717 2.153-.08 1.46 1.435l-3.953 8.64c-.46 1.006-1.647 2.186-2.655 2.64l-8.44 3.792z"></path><path fill="url(#discover.5811137_a)" d="M6.482 5.44c-.684-.294-.678-.764 0-1.055L11.54 2.45c.517-.198.936.085.936.65v3.625c0 .558-.412.852-.936.65L6.48 5.44z" transform="rotate(-45 34.258 3.92)"></path></g>',
        isActive: true
      }, {
        text: '订单',
        texttrue: '0089dc',
        route: '/',
        svg: '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#order-regular.41c17f8"></use>',
        svgtrue: '<g fill="none" fill-rule="evenodd"><rect width="38" height="38" fill="url(#order.070ae2a_a)" rx="2"></rect><rect width="24" height="2" x="7" y="8" fill="#FFF" rx="1"></rect><rect width="20" height="2" x="7" y="17" fill="#FFF" rx="1"></rect><rect width="8" height="2" x="7" y="26" fill="#FFF" rx="1"></rect></g>',
        isActive: false
      }, {
        text: '我的',
        texttrue: '0089dc',
        route: '/user',
        svg: '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#profile-regular.c151d62"></use>',
        svgtrue: '<path fill="url(#profile.dbc5ebf_a)" fill-rule="evenodd" d="M10 11.833V8.999A8.999 8.999 0 0 1 19 0c4.97 0 9 4.04 9 8.999v2.834l-.013.191C27.657 16.981 23.367 21 19 21c-4.616 0-8.64-4.02-8.987-8.976L10 11.833zM0 32.675C0 26.763 10.139 22 19.027 22 27.916 22 38 26.763 38 32.757v3.312C38 37.136 37.098 38 35.997 38H2.003C.897 38 0 37.137 0 36.037v-3.362z"></path></use>',
        isActive: false
      }]
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
@import '../../../static/hotcss/px2rem.scss';
.bottom-a{
  text-decoration: none;
  color: #666;
}
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
}
</style>