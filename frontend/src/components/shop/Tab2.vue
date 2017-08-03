<template>
    <div class="index-container">
    <div class="overview-container">
      <div class="overview-col1">
        <b>{{ ratingsscores.overall_score|tofix }}</b>
        <div>综合评价</div>
        <p>高于周边商家{{ ratingsscores.compare_rating|tofix1 }}%</p>
      </div>
      <div class="overview-col2">
        <div class="overview-line">
          <span>服务态度</span>
          <span class="overview-lineContent">
            <div class="rating-wrapper">
              <div class="rating-max">
                <svg><use xlink:href="#rating-star"></use></svg>
                <svg><use xlink:href="#rating-star"></use></svg>
                <svg><use xlink:href="#rating-star"></use></svg>
                <svg><use xlink:href="#rating-star"></use></svg>
                <svg><use xlink:href="#rating-star"></use></svg>
              </div>
              <div class="rating-rating" :style="'width:'+ (ratingsscores.service_score/5)*100 +'%'">
                <svg><use xlink:href="#rating-star"></use></svg>
                <svg><use xlink:href="#rating-star"></use></svg>
                <svg><use xlink:href="#rating-star"></use></svg>
                <svg><use xlink:href="#rating-star"></use></svg>
                <svg><use xlink:href="#rating-star"></use></svg>
              </div>
            </div>
            <span>{{ ratingsscores.service_score|tofix }}</span>
          </span>
        </div>
        <div class="overview-line">
          <span>菜品价格</span>
          <span class="overview-lineContent">
            <div class="rating-wrapper">
              <div class="rating-max">
                <svg><use xlink:href="#rating-star"></use></svg>
                <svg><use xlink:href="#rating-star"></use></svg>
                <svg><use xlink:href="#rating-star"></use></svg>
                <svg><use xlink:href="#rating-star"></use></svg>
                <svg><use xlink:href="#rating-star"></use></svg>
              </div>
              <div class="rating-rating" :style="'width:'+ (ratingsscores.food_score/5)*100 +'%'">
                <svg><use xlink:href="#rating-star"></use></svg>
                <svg><use xlink:href="#rating-star"></use></svg>
                <svg><use xlink:href="#rating-star"></use></svg>
                <svg><use xlink:href="#rating-star"></use></svg>
                <svg><use xlink:href="#rating-star"></use></svg>
              </div>
            </div>
            <span>{{ ratingsscores.food_score|tofix }}</span>
          </span>
        </div>
        <div class="overview-line">
          <span>送达时间</span>
          <span class="overview-small">{{ ratingsscores.deliver_time }}分钟</span>
        </div>
      </div>
    </div>
    <section class="index-rateDetail">
      <div class="index-tagBlock">
        <ul>
          <li :class="{'tags-unsatisfied':item.unsatisfied,'checked':index===addClass,'checked-unsatisfied':item.unsatisfied&&index===addClass}" v-on:click="change(index, item.name)" v-for="(item,index) in ratingstags">{{ item.name }}({{ item.count }})</li>
        </ul>
      </div>
      <ul>
        <li v-for="(item,index) in ratings" class="index-comment">
          <div class="comment-block-container">
            <small>{{ item.rated_at }}</small>
            <img class="img" src="https://fuss10.elemecdn.com/f/2e/20a4300d40b97e98a5889591fb1f2jpeg.jpeg?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/"/>
            <div class="comment-block-content">
              <h3>{{ item.username }}</h3>
              <div class="rating-wrapper">
                <div class="rating-max">
                  <svg><use xlink:href="#rating-star"></use></svg>
                  <svg><use xlink:href="#rating-star"></use></svg>
                  <svg><use xlink:href="#rating-star"></use></svg>
                  <svg><use xlink:href="#rating-star"></use></svg>
                  <svg><use xlink:href="#rating-star"></use></svg>
                </div>
                <div class="rating-rating" :style="'width:' + (item.rating_star/5)*100 + '%'">
                  <svg><use xlink:href="#rating-star"></use></svg>
                  <svg><use xlink:href="#rating-star"></use></svg>
                  <svg><use xlink:href="#rating-star"></use></svg>
                  <svg><use xlink:href="#rating-star"></use></svg>
                  <svg><use xlink:href="#rating-star"></use></svg>
                </div>
              </div>
              <span class="comment-block-rating">{{ item.time_spent_desc }}</span>
              <div class="comment-block-reply" v-if="item.reply_text">商家回复：{{ item.reply_text }}</div>
              <ul class="photos">
                <li v-for="val in item.item_ratings" v-if="val.image_hash">
                  <img :src="val.image_hash|img"/>
                </li>
              </ul>
              <ul class="comment-block-foods">
                <li v-for="(val,key) in item.item_ratings">{{ val.food_name }}</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>  
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'tab2',
  filters: {
    tofix: function (num) {
      if (num) {
        return num.toFixed(1)
      }
    },
    tofix1: function (num) {
      if (num) {
        return num.toFixed(2) * 100
      }
    },
    img: function (img) {
      if (img.substr(-3) === 'png') {
        return 'https://fuss10.elemecdn.com/' + img.substr(0, 1) + '/' + img.substr(1, 2) + '/' + img.substr(3) + '.png?imageMogr/format/webp/thumbnail/!142x142r/gravity/Center/crop/142x142/'
      } else if (img.substr(-3) === 'peg') {
        return 'https://fuss10.elemecdn.com/' + img.substr(0, 1) + '/' + img.substr(1, 2) + '/' + img.substr(3) + '.jpeg?imageMogr/format/webp/thumbnail/!142x142r/gravity/Center/crop/142x142/'
      }
    }
  },
  mounted () {
    var id = this.$route.params.id
    this.$store.dispatch('ratings', { id: id, str: '全部' })
    this.$store.dispatch('ratingsscores', id)
  },
  computed: {
    ...mapState(['ratingstags', 'shopheader', 'ratings', 'ratingsscores'])
  },
  data () {
    return {
      addClass: 0
    }
  },
  methods: {
    change (index, str) {
      this.addClass = index
      var id = this.$route.params.id
      this.$store.dispatch('ratings', { id: id, str: str })
    }
  }
}
</script>

<style lang="scss">
@import '../../../static/hotcss/px2rem.scss';
  .mint-navbar{
    .mint-tab-item{
      padding: 0;
      flex: 1;
      display: block;
      width: 0;
      text-align: center;
      .mint-tab-item-label{
        height: px2rem(90);
         font-size: px2rem(28);
         line-height: px2rem(90);
      }
    }
  }
.index-container{  
  height: px2rem(980);
  background-color: #eee;
  overflow-y: auto;
  margin-top: px2rem(5);
  .overview-container{
    margin-top:4px;
    background-color: #fff;
    margin-bottom:px2rem(20);
    padding:px2rem(30);
    font-size:px2rem(27);
    display: flex;
    align-items: center;
    color: #666;
    .overview-col1{
      border-right: 1px solid #ddd;
      text-align: center;
      padding-right:px2rem(30);
      b{
        font-size: px2rem(48);
        line-height: px2rem(48);
        font-weight: 400;
        color: #f60;
        display: block;
      }
      div{
        font-size: px2rem(28);
        line-height: px2rem(42);
      }
      p{
        font-size: px2rem(20);
        line-height: px2rem(30);
        color: #999;
      }
    }
    .overview-col2{
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      font-size:px2rem(28);
      line-height:px2rem(28);
      .overview-line{
        width: 80%;
        margin: px2rem(10) 0;
        .rating-wrapper{
          margin-left: px2rem(20);
          position: relative;
          overflow: hidden;
          display: inline-block;
          vertical-align: middle;
          .rating-max{
            display: flex;
            height: px2rem(20);
            svg{
              fill: #ddd;
              display: block;
              flex: none;
              width: px2rem(20);
              height: px2rem(20);
            }
          }
          .rating-rating{
            height: px2rem(20);
            display: flex;
            position: absolute;
            left: 0;
            top: 0;
            overflow: hidden;
            svg{
              fill: #ffaa0c;
              display: block;
              flex: none;
              width: px2rem(20);
              height: px2rem(20);
            }
          }
        }
        .overview-small{
          padding-left: px2rem(20);
          font-size: px2rem(20);
          color: #999;
        }
      }
    }
  }
  .index-rateDetail{
    padding:px2rem(30) px2rem(24);
    background-color: #fff;
    font-size:px2rem(24);
    .index-tagBlock{
      padding-bottom:px2rem(30);
      border-bottom: 1px solid #ddd;
      ul{
        li{
          display: inline-block;
            padding:px2rem(15);
            margin: px2rem(5) px2rem(10);
            border-radius: px2rem(10);
            color: #6d7885;
            background-color: #ebf5ff;
            font-size:px2rem(27);
            line-height:px2rem(32); 
        }
        .tags-unsatisfied {
            color: #aaa;
            background-color: #f5f5f5;
        }
        .checked {
            color: #fff;
            background-color: #3190e8;
        }
        .checked-unsatisfied {
            background-color: #ccc!important;
        }
      }	
    }
    ul{
      .index-comment{
        padding: px2rem(30) 0;
        border-bottom: px2rem(1) solid #ddd;
        .comment-block-container{
          position: relative;
          padding-left: px2rem(90);
          small{
            position: absolute;
            top: px2rem(10);
            right: 0;
            font-size: px2rem(24);
            color: #999;
          }
          .img{
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: px2rem(60);
            height: px2rem(60);
            border-radius: 50%;
          }
          .comment-block-content{
            font-size: px2rem(26);
            h3{
              font-size: px2rem(26);
              margin-top: 0;
              margin-bottom: px2rem(10);
              color: #666;
            }
            .rating-wrapper{
              position: relative;
              overflow: hidden;
              display: inline-block;
              vertical-align: middle;
              .rating-max{
                display: flex;
                height: px2rem(20);
                svg{
                  fill: #ddd;
                  display: block;
                  flex: none;
                  width: px2rem(20);
                  height: px2rem(20);
                }
              }
              .rating-rating{
                height: px2rem(20);
                display: flex;
                position: absolute;
                left: 0;
                top: 0;
                overflow: hidden;
                svg{
                  fill: #ffaa0c;
                  display: block;
                  flex: none;
                  width: px2rem(20);
                  height: px2rem(20);
                }
              }
            }
            .comment-block-rating{
              font-size: px2rem(25);
              color: #999;
              vertical-align: middle;
            }
            .comment-block-reply{
              position: relative;
              margin: px2rem(20) 0;
              padding: px2rem(20);
              background: #f3f3f3;
              border-radius: px2rem(8);
              color: #333;
            }
            .photos{
              li{
                display: inline-block;
                margin: px2rem(10);
                img{
                  display: block;
                  width: px2rem(142);
                  height: px2rem(142);
                }
              }
            }
            .comment-block-foods{
              li{
                display: inline-block;
                font-size: px2rem(22);
                color: #999;
                border: 1px solid #ddd;
                padding: px2rem(8) px2rem(20);
                margin: px2rem(7);
                border-radius: px2rem(6);
                max-width: px2rem(120);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
          }
        }
      }
    }
  }
}
</style>

