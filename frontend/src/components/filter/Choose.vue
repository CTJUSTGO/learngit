<template>
  <div class="choose">
    <aside data-v-98a11d7e="" data-v-3d8ac645="" class="filter">
      <div data-v-98a11d7e="" class="filter-header">
        <a data-v-98a11d7e="" href="javascript:" class="filter-nav">
          <span data-v-98a11d7e="">分类</span>
          <svg data-v-98a11d7e="" viewBox="0 0 72 32">
            <path data-v-98a11d7e="" d="M36 32l36-32h-72z"></path>
          </svg>
        </a>
        <a data-v-98a11d7e="" href="javascript:" class="filter-nav">
          <span data-v-98a11d7e="">排序</span>
          <svg data-v-98a11d7e="" viewBox="0 0 72 32">
            <path data-v-98a11d7e="" d="M36 32l36-32h-72z"></path>
          </svg>
        </a>
        <a data-v-98a11d7e="" href="javascript:" class="filter-nav filter-nav-more">
          <span data-v-98a11d7e="">筛选</span>
          <svg data-v-98a11d7e="" viewBox="0 0 72 32">
            <path data-v-98a11d7e="" d="M36 32l36-32h-72z"></path>
          </svg>
        </a>
      </div>
      <div class="filter-extend">
        <ul class="first">
          <li v-for="(item,index) in filter.kinds" :key="index" @click="change(index)">
            <span>{{item.name}}</span>
            <span>{{item.count}}</span>
          </li>
        </ul>
        <ul class="second">
            <li v-for="(item,index) in shopList" :key="index">
            <span>{{shopList.name}}</span>
            <span>{{shopList.count}}</span>
          </li>  
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'my-choose',
  data () {
    return {
      shopList: []
    }
  },
  mounted () {
    this.$store.dispatch('filterkinds')
  },
  computed: {
    ...mapState(['filter'])
  },
  methods: {
    change: function (index) {
      if (this.filter.kinds[index].sub_categories) {
        this.shopList = this.filter.kinds[index].sub_categories
        console.log(this.shopList)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../static/hotcss/px2rem.scss';
.filter {
    position: relative;
    border-bottom: 1px solid #ddd;
    height: px2rem(80);
    line-height: px2rem(78);
    z-index: 100;
}
.filter-header{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    /* display: flex; */
    z-index: 3;
    background-color: #fff;
}
.filter-nav {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
    color: #666;
    position: relative;
    font-size: px2rem(26);
    text-decoration: none;
}
.filter-nav>svg{
    width: px2rem(18);
    height: px2rem(8);
    margin-bottom: px2rem(4);
    fill: #999;
    will-change: transform;
    -webkit-transition: all .3s;
    transition: all .3s;
}
.filter-extend {
    left: 0;
    right: 0;
    top: 100%;
    border-top: 1px solid #ddd;
    position: absolute;
    background-color: #fff;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    overflow: auto;
    height: 1000%;
    z-index: 3;
        display: flex;
    .first{
      background-color: #fafafa;
      flex: 2;
      height: 100%;
       overflow: auto;
      li{
            position: relative;
    line-height: px2rem(90);
    padding: 0 px2rem(20) 0 px2rem(10);
      span{
        line-height: px2rem(30);
        font-size: px2rem(24)
      }
      }
    }
    .second{
      flex:3;
      overflow: auto;
       li{
            position: relative;
    line-height: px2rem(90);
    padding: 0 px2rem(20) 0 px2rem(10);
      span{
        line-height: px2rem(30);
        font-size: px2rem(24)
      }
      }
    }
}

</style>