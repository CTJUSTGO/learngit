<template>
  <div class="loadmore">
    <h3 class="index-title">推荐商家</h3>
    <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="80" class="ul-list">
      <li class="pro-list" :key="index" v-for="(item,index) in homeprolist">
        <router-link :to="'/shop/'+item.id">
          <div class="pro-list-l">
            <img :src="sub(item.image_path)" alt="" />
          </div>
        </router-link>
          <div class="pro-list-r">
            <router-link :to="'/shop/'+item.id" class="pro-list-router">
            <h3 class="pro-list-r-t">
              <div v-if="item.is_premium" class="pro-list-r-t-l-before">{{ item.name }}</div>
              <div v-else class="pro-list-r-t-l">{{ item.name }}</div>
              <div class="pro-list-r-t-r">
                <i :key="nindex" v-if="item.supports" v-for="(n,nindex) in item.supports" class="title-logo">{{ n.icon_name }}</i>
              </div>
            </h3>
            <div class="pro-list-r-m">
              <div class="pro-list-r-m-l">
                <div class="rating-wrapper">
                  <div class="rating-max">
                    <svg class="rating-gray" key="index" v-for="(item,index) in rating">
                      <use  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use>
                    </svg>
                  </div>
                  <div class="rating-rating" :style="'width:'+ (item.rating/5)*100 +'%'">
                    <svg class="rating-yellow" key="index" v-for="(item,index) in rating">
                      <use  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use>
                    </svg>
                  </div>
                </div>
                <span class="index-rate">{{ item.rating }}</span>
                <span>月售{{ item.recent_order_num }}单</span>
              </div>
              <div class="pro-list-r-m-r">
                <span v-if="item.delivery_mode" :style="'backgorund-color:#' + item.delivery_mode.color">{{ item.delivery_mode.text }}</span>
              </div>
            </div>
            <div class="pro-list-r-b">
              <div class="pro-list-r-b-l">
                <span>{{ item.float_minimum_order_amount }}元起送</span>
                <span>/ {{ item.piecewise_agent_fee.description }}</span>
                <span>/ {{ item.average_cost }}</span>
              </div>
              <div class="pro-list-r-b-r">
                <span v-if="item.distance < 1000">{{ item.distance }}m</span>
                <span v-else>{{ (item.distance / 1000).toFixed(2) }}km </span>
                <span class="need-time">/ {{ item.order_lead_time }}分钟</span>
              </div>
            </div>
            </router-link>
            <div class="pro-list-actor">
              <div class="pro-list-actor-list">
                <div v-if="index < 2 || item.isShow" class="pro-list-actor-list-con" v-for="(ii,index) in item.activities">
                  <i :style="'background-color: #' + ii.icon_color + ';color: rgb(255, 255, 255); border-color: #' + ii.icon_color + ';'">{{ ii.icon_name }}</i>
                  <span>{{ ii.description }}</span>
                </div>
              </div>
              <div v-if="item.activities.length > 2" class="pro-list-actor-btn" @click="addClick(index)">
                {{ item.activities.length }}个活动
              </div>
            </div>
          </div>
      </li>
      <span class="loding">正在加载<mt-spinner class="lod-icon" type="fading-circle"></mt-spinner></span>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'loadmore',
  data () {
    return {
      'rating': 5
    }
  },
  mounted () {
    this.$store.dispatch('filter')
  },
  computed: {
    ...mapState(['homeprolist'])
  },
  methods: {
    loadMore () {
      var _this = this
      if (_this.loading) {
        return false
      }
      _this.loading = true
      setTimeout(() => {
        _this.$store.dispatch('homeprolist')
        _this.loading = false
      }, 500)
    },
    addClick (i) {
      this.homeprolist[i].isShow = !this.homeprolist[i].isShow
    },
    sub (e) {
      if (e.substr(-3) === 'png') {
        return 'https://fuss10.elemecdn.com/' + e.substr(0, 1) + '/' + e.substr(1, 2) + '/' + e.substr(3) + '.png?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/'
      } else if (e.substr(-3) === 'peg') {
        return 'https://fuss10.elemecdn.com/' + e.substr(0, 1) + '/' + e.substr(1, 2) + '/' + e.substr(3) + '.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../static/hotcss/px2rem.scss';
.pro-list-router{
  display: block;
  text-decoration: none;
  color: #333;
}
.loadmore{
  background: #fff;
  font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
  .index-title {
    margin-top: px2rem(20);
    padding-left: px2rem(30);
    font-size: px2rem(30);
    display: block;
    color: #333;
    line-height: px2rem(68);
    font-weight: 600;
    border: px2rem(1) solid #eee;
  }
  ul{
    padding-bottom: px2rem(105);
    .loding{
      display: flex;
      font-size: px2rem(24);
      height: 100%;
      justify-content: center;
      color: #999;
      .lod-icon{
        margin-left: px2rem(10);
      }
    }
    .pro-list{
      display: flex;
      border-bottom: px2rem(1) solid #eee;
      .pro-list-l{
        padding: px2rem(30) px2rem(20);
        width: px2rem(120);
        height: px2rem(120);
        box-sizing: content-box;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .pro-list-r{
        padding: px2rem(30) px2rem(20);
        padding-left: 0;
        flex: 1;
        color: #666;
        font-size: px2rem(22);
        .pro-list-r-t{
          display: flex;
          justify-content: space-between;
          align-items: center;
          .pro-list-r-t-l-before{
            display: flex;
            align-items: center;
            max-width: px2rem(375);
            color: #333;
            font-weight: 700;
            height: px2rem(32);
            font-size: px2rem(30);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            &::before{
              background-color: #ffd930;
              color: #52250a;
              height: px2rem(30);
              font-size: px2rem(22);
              border-radius: px2rem(4);
              content: '品牌';
              font-weight: 700;
              text-align: center;
              vertical-align: top;
              line-height: px2rem(30);
              white-space: nowrap;
              padding: 0 px2rem(5);
              margin-right: px2rem(10);
            }
          }
          .pro-list-r-t-l{
            display: flex;
            align-items: center;
            max-width: px2rem(375);
            color: #333;
            font-weight: 700;
            height: px2rem(32);
            font-size: px2rem(30);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .pro-list-r-t-r{
            display: flex;
            align-items: center;
            .title-logo{
              margin-left: px2rem(5);
              border: px2rem(1) solid #dddddd;
              color: #999999;
              display: block;
              font-size: px2rem(20);
            }
          }
        }
        .pro-list-r-m{
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: px2rem(26);
          margin-top: px2rem(15);
          .pro-list-r-m-l{
            display: flex;
            .rating-wrapper{
              position: relative;
              overflow: hidden;
              width: px2rem(110);
              .rating-max{
                display: flex;
                .rating-gray{
                  fill: #ddd;
                  margin: 0 px2rem(1);
                  width: px2rem(20);
                  height: px2rem(20);
                  flex: none;
                  display: block;
                }
              }
              .rating-rating{
                display: flex;
                position: absolute;
                top: 0;
                left: 0;
                width: 90%;
                overflow: hidden;
                .rating-yellow{
                  fill: #ffaa0c;
                  margin: 0 px2rem(1);
                  width: px2rem(20);
                  height: px2rem(20);
                  flex: none;
                  display: block;
                }
              }
            }
            .index-rate{
              color: #ff6000;
              margin: 0 px2rem(8);
              font-size: px2rem(22);
            }
          }
          .pro-list-r-m-r{
            span{
              border: px2rem(1) solid #44a5ff;
              background-color: #2395ff;
              color: #fff;
              display: block;
              padding: 0 px2rem(4);
              border-radius: px2rem(4);
            }
          }
        }
        .pro-list-r-b{
          margin-top: px2rem(17);
          display: flex;
          align-items: center;
          justify-content: space-between;
          .need-time{
            color: #2395ff;
          }
        }
        .pro-list-actor{
          margin-top: px2rem(15);
          border-top: px2rem(1) solid #eee;
          color: #939393;
          position: relative;
          .pro-list-actor-list{
            padding-top: px2rem(10);
            .pro-list-actor-list-con{
              font-size: px2rem(20);
              line-height: px2rem(32);

            }
          }
          .pro-list-actor-btn{
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            color: #999;
            text-align: right;
            padding: px2rem(20) 0 px2rem(15);
            font-size: px2rem(20);
            line-height: px2rem(20);
          }
        }
      }
    }
  }
}

</style>
