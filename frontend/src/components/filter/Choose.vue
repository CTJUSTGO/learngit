<template>
  <div class="choose">
    <aside data-v-98a11d7e="" data-v-3d8ac645="" class="filter">
      <div data-v-98a11d7e="" class="filter-header">
        <a data-v-98a11d7e="" href="javascript:" class="filter-nav" @click="openf">
          <span data-v-98a11d7e="">分类</span>
          <svg data-v-98a11d7e="" viewBox="0 0 72 32">
            <path data-v-98a11d7e="" d="M36 32l36-32h-72z"></path>
          </svg>
        </a>
        <a data-v-98a11d7e="" href="javascript:" class="filter-nav" @click="opens">
          <span data-v-98a11d7e="">排序</span>
          <svg data-v-98a11d7e="" viewBox="0 0 72 32">
            <path data-v-98a11d7e="" d="M36 32l36-32h-72z"></path>
          </svg>
        </a>
        <a data-v-98a11d7e="" href="javascript:" class="filter-nav filter-nav-more" @click="opent">
          <span data-v-98a11d7e="">筛选</span>
          <svg data-v-98a11d7e="" viewBox="0 0 72 32">
            <path data-v-98a11d7e="" d="M36 32l36-32h-72z"></path>
          </svg>
        </a>
      </div>
      <div class="filter-extend" v-show="show1" style="height: 1000%">
        <ul class="first">
          <li v-for="(item,index) in filter.kinds" :key="index" @click="change(index)">
            <span>{{item.name}}</span>
            <span>{{item.count}}</span>
          </li>
        </ul>
        <ul class="second">
          <li v-for="(item,index) in shopList" :key="index">
            <span>{{item.name}}</span>
            <span>{{shopList[index].count}}</span>
          </li>
        </ul>
      </div>
      <section data-v-fd238482="" data-v-98a11d7e="" class="filter-extend filter-sort open" v-show="show2">
        <ul data-v-fd238482="">
          <li data-v-fd238482="" :class="active[0]" @click="select(0)">
            <svg data-v-fd238482="">
              <use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#default"></use>
            </svg>
            <span data-v-fd238482="">智能排序</span>
            <svg data-v-fd238482="" class="selected">
              <use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
            </svg>
          </li>
          <li data-v-fd238482=""  :class="active[1]" @click="select(1)">
            <svg data-v-fd238482="">
              <use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#distance"></use>
            </svg>
            <span data-v-fd238482="">距离最近</span>
            <svg data-v-fd238482="" class="selected">
              <use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
            </svg>
          </li>
          <li data-v-fd238482=""  :class="active[2]" @click="select(2)">
            <svg data-v-fd238482="">
              <use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#hot"></use>
            </svg>
            <span data-v-fd238482="">销量最高</span>
            <svg data-v-fd238482="" class="selected">
              <use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
            </svg>
          </li>
          <li data-v-fd238482=""  :class="active[3]" @click="select(3)">
            <svg data-v-fd238482="">
              <use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#price"></use>
            </svg>
            <span data-v-fd238482="">起送价最低</span>
            <svg data-v-fd238482="" class="selected">
              <use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
            </svg>
          </li>
          <li data-v-fd238482=""  :class="active[4]" @click="select(4)">
            <svg data-v-fd238482="">
              <use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#speed"></use>
            </svg>
            <span data-v-fd238482="">配送速度最快</span>
            <svg data-v-fd238482="" class="selected">
              <use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
            </svg>
          </li>
          <li data-v-fd238482=""  :class="active[5]" @click="select(5)">
            <svg data-v-fd238482="">
              <use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating"></use>
            </svg>
            <span data-v-fd238482="">评分最高</span>
            <svg data-v-fd238482="" class="selected">
              <use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
            </svg>
          </li>
        </ul>
      </section>
      <section data-v-d7cbbe24="" data-v-98a11d7e="" class="filter-extend filter-more open" v-show="show3"><!----><div data-v-d7cbbe24="" class="filter-scroller"><dl data-v-d7cbbe24=""><dt data-v-d7cbbe24="">配送方式</dt></dl><dl data-v-d7cbbe24=""><dt data-v-d7cbbe24="">商家属性 (可多选)</dt><dd data-v-d7cbbe24="" class=""><!----><svg data-v-d7cbbe24="" class="selected-icon"><use data-v-d7cbbe24="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use></svg><i data-v-d7cbbe24="" style="color: rgb(63, 189, 230);">
          品
        </i><!----><span data-v-d7cbbe24="">品牌商家</span></dd><dd data-v-d7cbbe24="" class=""><!----><svg data-v-d7cbbe24="" class="selected-icon"><use data-v-d7cbbe24="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use></svg><i data-v-d7cbbe24="" style="color: rgb(232, 132, 45);">
          新
        </i><!----><span data-v-d7cbbe24="">新店</span></dd><dd data-v-d7cbbe24="" class=""><!----><svg data-v-d7cbbe24="" class="selected-icon"><use data-v-d7cbbe24="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use></svg><i data-v-d7cbbe24="" style="color: rgb(153, 153, 153);">
          票
        </i><!----><span data-v-d7cbbe24="">开发票</span></dd><dd data-v-d7cbbe24="" class=""><!----><svg data-v-d7cbbe24="" class="selected-icon"><use data-v-d7cbbe24="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use></svg><i data-v-d7cbbe24="" style="color: rgb(255, 78, 0);">
          付
        </i><!----><span data-v-d7cbbe24="">在线支付</span></dd></dl></div><div data-v-d7cbbe24="" class="filter-btn"><a data-v-d7cbbe24="" href="javascript:">清空</a><a data-v-d7cbbe24="" href="javascript:">
      确定<!----></a></div></section>
      <section data-v-98a11d7e="" class="filter-modal" v-show="showall"></section>
    </aside>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Vue from 'vue'

export default {
  name: 'my-choose',
  data () {
    return {
      shopList: [],
      show1: false,
      show2: false,
      show3: false,
      showall: false,
      active: ['', '', '', '', '', '']
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
    },
    openf: function () {
      this.show1 = !this.show1
      this.show2 = false
      this.show3 = false
      this.showall = !this.showall
    },
    opens: function () {
      this.show2 = !this.show2
      this.show1 = false
      this.show3 = false
      this.showall = !this.showall
    },
    opent: function () {
      this.show3 = !this.show3
      this.show2 = false
      this.show1 = false
      this.showall = !this.showall
    },
    select: function (index) {
      var active = this.active
      Vue.set(active, index, 'active')
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

.filter-header {
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

.filter-nav>svg {
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
  z-index: 3;
  display: flex;
  .first {
    background-color: #fafafa;
    flex: 2;
    height: 100%;
    overflow: auto;
    li {
      position: relative;
      line-height: px2rem(90);
      padding: 0 px2rem(20) 0 px2rem(10);
      span {
        line-height: px2rem(30);
        font-size: px2rem(24)
      }
    }
  }
  .second {
    flex: 3;
    overflow: auto;
    li {
      position: relative;
      line-height: px2rem(90);
      padding: 0 px2rem(20) 0 px2rem(10);
      span {
        line-height: px2rem(30);
        font-size: px2rem(24)
      }
    }
  }
}
.filter ul{
  width:100%;
}
.filter-sort li {
    position: relative;
    padding-left: px2rem(30);
    line-height: px2rem(100);
    height: px2rem(100);
    font-size: px2rem(24);
    border-bottom: 1px #ccc solid;
    svg{
      width: px2rem(30);
    height: px2rem(30);
    margin-right: px2rem(20);
    vertical-align: middle;
    }
}
.filter-scroller{
    overflow: auto;
    height: 100%;
    line-height: normal;
    font-size: px2rem(24);
    width:100%;
    dl {
    margin: px2rem(20) 0;
    padding: 0 px2rem(30);
    overflow: hidden;
 dt {
    margin-bottom: px2rem(15);
    color: #666;
}
dd {
    margin: 0;
    float: left;
    width: 32%;
    margin-right: 2%;
    border: 1px solid #ddd;
    padding: px2rem(13) 0;
    height: px2rem(70);
    margin-bottom: px2rem(15);
    border-radius:px2rem(5);
    box-sizing: border-box;
    svg{
      display: none;
    }
}
}

}
.filter-more{
  padding-bottom:px2rem(110) 
}
.filter-btn {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #eee;
    background-color: #fafafa;
    padding: 0 px2rem(10);
    height: px2rem(110);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    a {
    font-size: px2rem(36);
    line-height:px2rem(82);
    border-radius: px2rem(6);
    text-align: center;
    text-decoration: none;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
a:last-child{
      color: #fff;
    background-color: #56d176;
    border: 1px solid #56d176;
}
a:first-child{
      background-color: #fff;
    border: 1px solid #ddd;
    margin-right: px2rem(20);
    color: #333;
}
}
.filter-sort li.active{
    color: #0089dc;
}
.filter-modal {
      opacity: 1;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    background: rgba(0,0,0,.2);
    transition: all .3s ease-in-out;
}
</style>