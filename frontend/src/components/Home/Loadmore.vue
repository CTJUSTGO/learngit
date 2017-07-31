<template>
  <div class="loadmore">
    <h3 class="index-title">推荐商家</h3>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <ul>
        <li class="pro-list" key="index" v-for="(item,index) in homeprolist">
          <div class="pro-list-l">
            <img src="https://fuss10.elemecdn.com/0/3a/199d358d7d5757ab2f6184b153cc4jpeg.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/" alt="" />
          </div>
          <div class="pro-list-r">
            <h3 class="pro-list-r-t">
              <div class="pro-list-r-t-l">深圳麦当劳民田路餐厅</div>
              <div class="pro-list-r-t-r">
                <i class="title-logo">票</i>
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
                  <div class="rating-rating">
                    <svg class="rating-yellow" key="index" v-for="(item,index) in rating">
                      <use  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use>
                    </svg>
                  </div>
                </div>
                <span class="index-rate">4.4</span>
                <span>月售2281单</span>
              </div>
              <div class="pro-list-r-m-r">
                <span>蜂鸟专送</span>
              </div>
            </div>
            <div class="pro-list-r-b">
              <div class="pro-list-r-b-l">
                <span>50元起送</span>
                <span>/ 配送费¥20</span>
                <span>/ ¥29/人</span>
              </div>
              <div class="pro-list-r-b-r">
                <span>852m</span>
                <span class="need-time">/ 35分钟</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">Loading...</span>
      </div>
    </mt-loadmore>
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
    this.$store.dispatch('homeprolist')
  },
  computed: {
    ...mapState(['homeprolist'])
  }
}
</script>
<style lang="scss" scoped>
@import '../../../static/hotcss/px2rem.scss';
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
      }
    }
  }
}

</style>
