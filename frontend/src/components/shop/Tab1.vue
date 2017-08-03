<template>
  <div class="menuview">
    <div class="menuview1">
      <ul class="menucategory-29kyE">
        <li v-for="(item,index) in shoptab1" :class="{'checked':index===addClass}">
          <img v-if="item.icon_url" :src="'https://fuss10.elemecdn.com/'+ item.icon_url.substr(0,1) + '/' + item.icon_url.substr(1,2) + '/' + item.icon_url.substr(3) +'.jpeg?imageMogr/format/webp/thumbnail/18x/'" />
          <span>{{ item.name }}</span>
        </li>
      </ul>
      <section class="container">
        <div class="scroller">
          <dl v-for="(item,index) in shoptab1" class="odl">
            <dt>
              <b>{{ item.name }}</b>
              <span>{{ item.description }}</span>
              <div>
                <span v-on:click="change(index)">...</span>
                <p v-show="item.isShow" class="popup">{{ item.name }}{{ item.description }}</p>
              </div>
            </dt>
            <dd v-for="(val, key) in item.foods">
              <span class="foodimg">
                <img :src="val.image_path|img" alt="" v-if="val.image_path">
              </span>
              <section class="foodinfo">
                <h3>
                  {{ val.name }}
                  <span v-if="val.attributes.length">{{ val.attributes[0].icon_name }}</span>
                </h3>
                <p v-if="val.description" class="fooddescription">{{ val.description }}</p>
                <p class="foodsales">
                  <span v-if="val.month_sales">月售{{ val.month_sales }}份</span>
                  <span v-if="val.satisfy_rate">好评率{{ val.satisfy_rate }}%</span>                  
                </p>
                <strong class="foodprice">
                  <span>{{ val.specfoods[0].price }}</span>
                  <span v-if="val.specfoods.length>1" class="foodprice-lowest">起</span>                  
                </strong>
                <div class="cartbutton" v-if="val.specfoods.length>1">选规格</div>
                <div v-else-if="val.specfoods.length=1" class="cartbutton1">
                  <svg v-if="val.counter"><use xlink:href="#cart-add" v-on:click="minus(index,key)"></use></svg>
                  <span v-if="val.counter">{{val.counter}}</span>
                  <svg v-on:click="add(index,key)"><use xlink:href="#cart-minus"></use></svg>
                </div>
              </section>
            </dd>
          </dl>
        </div>
      </section>
      <div class="bottom">
					<div class="bottomNav">
						<span class="gwc"></span>
						<div class="bottomNav1">
							<p class="bottomP1">￥0</p>
							<p class="bottomP2" v-for="shopheader in shopheader">{{ shopheader.piecewise_agent_fee.tips }}</p>
						</div>
            <div>
						  <a href="javascript:" class="bottomNav2" v-for="shopheader in shopheader">¥{{ shopheader.float_minimum_order_amount }}起送</a>
            </div>
          </div>
				</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import $ from 'jquery'
export default {
  name: 'tab1',
  mounted () {
    var id = this.$route.params.id
    this.$store.dispatch('shoptab1', id)
    this.$store.dispatch('shopheader', id)
    this.flag = true
    var that = this
    var shopLeft = $('.menucategory-29kyE')
    var shopRight = $('.container')
    var oDl = $('.odl')
    console.log(shopRight)
    console.log(shopLeft.find('li').eq(0))
    shopLeft.find('li').eq(0).addClass('checked')
    shopLeft.on('click', 'li', function () {
      that.flag = false
      var index = $(this).index()
      console.log(index)
      $(this).addClass('checked').siblings().removeClass('checked')
      shopRight.animate({
        scrollTop: that.getHeight(index)
      }, function () {
        that.flag = true
      })
    })
    shopRight.scroll(function () {
      oDl.each(function (index) {
        if ($(this).position().top <= 0 && that.flag === true) {
          shopLeft.find('li').removeClass('checked').eq(index).addClass('checked')
        }
      })
    })
  },
  computed: {
    ...mapState(['shoptab1', 'shopheader'])
  },
  data () {
    return {
      addClass: 0
    }
  },
  filters: {
    img: function (img) {
      if (img.substr(-3) === 'png') {
        return 'https://fuss10.elemecdn.com/' + img.substr(0, 1) + '/' + img.substr(1, 2) + '/' + img.substr(3) + '.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'
      } else if (img.substr(-3) === 'peg') {
        return 'https://fuss10.elemecdn.com/' + img.substr(0, 1) + '/' + img.substr(1, 2) + '/' + img.substr(3) + '.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'
      }
    }
  },
  methods: {
    add (index, key, counter) {
      this.shoptab1[index].foods[key].counter += 1
    },
    minus (index, key) {
      this.shoptab1[index].foods[key].counter -= 1
    },
    change (index) {
      this.shoptab1[index].isShow = !this.shoptab1[index].isShow
    },
    getHeight (num) {
      var totalHeight = 0
      var oDl = $('.odl')
      for (var i = 0; i < num; i++) {
        totalHeight += oDl.eq(i).height()
      }
      return totalHeight
    }
  }
}
</script>

<style lang="scss">
@import '../../../static/hotcss/px2rem.scss';
.menuview{
  position:relative;
	width:100%;
	height:px2rem(980);
  .menuview1{
    padding-bottom:px2rem(96);
    height:100%;
    overflow:hidden;
    display: flex;
    .menucategory-29kyE{
      height:100%;
      overflow-y:auto;
      width:px2rem(170);
      margin-top: px2rem(4); 
      padding-bottom: px2rem(10);
      li{
        position: relative;
        padding:px2rem(35) px2rem(15);
        border-bottom:1px solid #ededed;
        color:#666;
        font-size:px2rem(26);
        line-height:px2rem(26);
        width:100%;
        img{
          display:inline-block;
          width:px2rem(18);
          height:px2rem(25);
        }
      }
      .checked{
        background-color: #fff;
        border-left: px2rem(4) solid #3190e8;
        font-weight: 600;
      }
    }
    .container{
      height: 100%;
			flex: 1;
			position: relative;
      top: px2rem(4);
			overflow-y:auto;
      margin-top: px2rem(2);
      dl{
        width:100%;
        dt{
          padding:px2rem(15) px2rem(20);
					width:100%;
					background-color: #f1f1f1;
					position:relative;
          b{
            font-weight:700;
						font-size:px2rem(32);
						color: #666;
						margin-right:px2rem(4);
          }
          span{
            display: inline-block;
						color: #999;
						font-size:px2rem(20);
						flex:1;
          }
          div{
            span{
              position:absolute;
              right: 0;
              top: 0;
              bottom: 0; 
              line-height: px2rem(64);
              width:px2rem(70);
              text-align:center;
              font-size:px2rem(32);
              color: #999;
            }
            .popup{
              position: absolute;
              top: px2rem(60);
              background-color: #39373a;
              opacity: .97;
              width: 63%;
              right: px2rem(8);
              z-index: 55;
              color: #eee;
              font-size: px2rem(24);
              border-radius: px2rem(8);
              padding: px2rem(18) px2rem(20);
              &:before{
                content: "";
                position: absolute;
                top: 0;
                transform: translateY(-100%);
                right: px2rem(20);
                border: px2rem(10) solid transparent;
                border-bottom-color: #39373a;
              }
            }
          }
        }
        dd{
          margin-bottom:px2rem(3);
          background-color: #fff;
          position: relative;
					padding:px2rem(30) px2rem(20);
					display: flex;
          .foodimg{
            margin-right: 4%;
            width:px2rem(103.6);
            display: block;
            
            vertical-align: top;
            img{
              display: block;
              width:px2rem(103.6);
						  height:px2rem(103.5);
            }
          }
          .foodinfo{
            padding-bottom:px2rem(50);
						flex:1;
						position: relative;
            h3{
              font-size:px2rem(30);
							display: flex;
							justify-content: space-between;
              span{
								border:1px solid red;
								color:red;
								border-radius:px2rem(12);
								height:px2rem(26);
								padding:0 px2rem(6);
								font-size:px2rem(16);
								text-align:center;
								line-height:px2rem(26);
							}
            }
            .fooddescription{
              margin: px2rem(10) 0;
              font-size: px2rem(19);
              color: #999;
            }
            .foodsales{
              margin: px2rem(13) 0;
              color: #666;
              font-size: px2rem(22);
              line-height: 1;
            }
            .foodprice{
              position: absolute;
              left: 0;
              bottom: 0;
              font-weight: 700;
              font-size: px2rem(32);
              line-height: px2rem(32);
              color: #f60;
              &:before{
                font-weight: 400;
                content: "\A5";
                font-size: px2rem(22);
                display: inline-block;
              }
              .foodprice-lowest{
                margin-left: px2rem(4);
                font-size: px2rem(24);
                color: #666;
                font-weight: 400;
              }
            }
            .cartbutton{
              position: absolute;
              right: 0;
              bottom: -px2rem(5);
              color: #fff;
              background-color: #3199e8;
              text-decoration: none;
              padding: 0 px2rem(15);
              font-size: px2rem(24);
              border-radius: px2rem(26);
              line-height: px2rem(50);
            }
            .cartbutton1{
              position: absolute;
              right: 0;
              bottom: -px2rem(5);
              svg{
                padding: px2rem(7);
                width: px2rem(41);
                height: px2rem(41);
                vertical-align: middle;
                fill: #3190e8;
                z-index: 9;
              }
              span{
                text-align: center;
                color: #666;
                font-size: px2rem(28);
                min-width: px2rem(30);
                max-width: px2rem(56);
                overflow: hidden;
              }
            }
          }
        }
      }
    }
    .bottom{
			position:absolute;
			bottom:0;
			left:0;
			right:0;
			height:px2rem(96);
			background-color:#ccc;
			.bottomNav{
				position:relative;
				height:100%;
				padding-left:px2rem(156);
				width:100%;
				background-color:#3d3d3f;
				display: flex;
				align-items: center;
				.gwc{
					position: absolute;
					left:px2rem(16);
					bottom:px2rem(10);
					border:px2rem(10) solid #444;
					width:px2rem(80);
					height:px2rem(80);
					border-radius:50%;
					background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OCA1OCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIHg9Ii01MCUiIHk9Ii01MCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxLjUiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wOCAwIiBpbj0ic2hhZG93Qmx1ck91dGVyMSIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjEiLz48ZmVNZXJnZT48ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSIvPjxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPjwvZmVNZXJnZT48L2ZpbHRlcj48cGF0aCBpZD0iYiIgZD0iTTcuNjE0IDQuMDUxYy0xLjA2Ni4wODYtMS40NTItLjM5OC0xLjc1Mi0xLjU4NEM1LjU2MiAxLjI4LjMzIDUuODguMzMgNS44OGwzLjcxIDE5LjQ3NmMwIC4xNDgtMS41NiA3LjUxNS0xLjU2IDcuNTE1LS40ODkgMi4xOS4yOTIgNC4yNyAzLjU2IDQuMzIgMCAwIDM2LjkxNy4wMTcgMzYuOTIuMDQ3IDEuOTc5LS4wMTIgMi45ODEtLjk5NSAzLjAxMy0zLjAzOS4wMy0yLjA0My0xLjA0NS0yLjk3OC0yLjk4Ny0yLjk5M0w4LjgzIDMxLjE5MnMuODYtMy44NjUgMS4wNzctMy44NjVjMCAwLTUuNzg4LjEyMiAzMi4wNjUtMS45NTYuNjA2LS4wMzMgMi4wMTgtLjc2NCAyLjI5OC0xLjg0OCAxLjExMy00LjMxNyA0LjAwOC0xMy4yNiA0LjQ1OC0xNS42NC45MzItNC45MjUgMi4wNjEtOC41NTgtNC4yOC03LjQwNSAwIDAtMzUuNzY4IDMuNDg3LTM2LjgzMyAzLjU3M3oiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWx0ZXI9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMikiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDM4IDcuODA4KSI+PG1hc2sgaWQ9ImMiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2IiLz48L21hc2s+PHVzZSBmaWxsPSIjNUY1RjYzIiB4bGluazpocmVmPSIjYiIvPjxwYXRoIGZpbGw9IiNFQkVFRjMiIGQ9Ik01My45NjIgNy43NzRsLTUuNzAxIDE5LjMwNS00MC43OCAxLjU3NHoiIG9wYWNpdHk9Ii4wNSIgbWFzaz0idXJsKCNjKSIvPjwvZz48cGF0aCBzdHJva2U9IiM1RjVGNjMiIHN0cm9rZS13aWR0aD0iNiIgZD0iTTkuMzc0IDE4LjcyMlM3Ljg2OCAxMS4yODMgNy4zMjMgOC43MUM2Ljc3OCA2LjEzNiA1Ljg2IDUuMzMgMy45NzggNC41MiAyLjA5NiAzLjcxMy4zNjcgMi4yODYuMzY3IDIuMjg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSI0NiIgY3k9IjUxIiByPSI0IiBmaWxsPSIjNUY1RjYzIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI1MSIgcj0iNCIgZmlsbD0iIzVGNUY2MyIvPjwvZz48L3N2Zz4=);
					background-size:px2rem(48);
					background-color:#3d3d3f;
					background-repeat:no-repeat; 
					background-position:center;

				}
				.bottomNav1{
					color:#fff;
					flex:1;
					.bottomP1{
						font-size:px2rem(36);
					}
					.bottomP2{
						font-size:px2rem(20);
					}
				}
				a{
					display:block;
					color:#fff;
					text-align:center;
					height:100%;
					line-height:px2rem(96);
					width:px2rem(210);
					text-decoration:none;
					font-size:px2rem(32);
					background-color: #535356;
				}
			}
		}
  }
}
</style>

