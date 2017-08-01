
<template>
  <div id="find">
    <div class="header">
      <div class="icon">
        <svg>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left.6f6409e"></use>
        </svg>
      </div>
      <h1>发现</h1>
    </div>
    <div class="list">
      <a>
        <img src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/" />
        <p class="title">积分商城</p>
        <p class="tips">0元好物在这里 !</p>
      </a>
      <a>
        <img src="https://fuss10.elemecdn.com/e/ff/3b9c4a4dfda1df548dc9274f6a7c1jpeg.jpeg?imageMogr/format/webp/" />
        <p class="title" style="color: rgb(245, 120, 93);">美味爆料</p>
        <p class="tips">无啤酒不夏天</p>
      </a>
      <a>
        <img src="https://fuss10.elemecdn.com/6/76/8d42eef97ff4c1c2b671085358541jpeg.jpeg?imageMogr/format/webp/" />
        <p class="title" style="color:rgb(27, 169, 225)">推荐有奖</p>
        <p class="tips">5元现金拿不停</p>
      </a>
    </div>
    <div class="banner">
       <img src="https://fuss10.elemecdn.com/b/6d/656006edcd86033a1b32b23ddea37jpeg.jpeg?imageMogr/format/webp/"/>
    </div>
     <div class="main">
      <div class="activity-header">
        <span class="line left"></span>
        <svg class="activity-icon">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#nice"></use>
        </svg>
        美食热推
        <span class="line right"></span>
      </div>
      <p class="activity-sub-title">你的口味，我都懂得</p>
      <div class="activity-body">
        <a class="discover-food">
          <img src="https://fuss10.elemecdn.com/e/c3/af359945a94fa9ec816cd4a5c1a45jpeg.jpeg?imageMogr/format/webp/" width="324" height="322">
          <p>探险家炒饭套餐+热狗+泡菜+鸡蛋</p>
          <div class="fprice">￥28</div>
        </a>
        <p class="activity-more">查看更多<svg class="svg-next"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#tab_found_next_page"></use></svg></p>

      </div>

    </div>
    <find-bottom />
  </div>
</template>

<script>
import bomtab from './Find/Bomtab'
export default {
  name: 'Find',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'find-bottom': bomtab
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../static/hotcss/px2rem.scss';
.header {
  color: #fff;
  top: 0;
  left: 0;
  background-image: linear-gradient(90deg, #0af, #0085ff);
  width: 100%;
  height: px2rem(88);
}

.header .icon {
  height: px2rem(88);
  width: px2rem(88);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: px2rem(36);
}

svg {
  width: px2rem(44);
  height: px2rem(44);
}

.header h1 {
  font-size: px2rem(36);
  position: absolute;
  top: 0;
  left: 50%;
  max-width: 50%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 700;
  line-height: px2rem(88);
  height: px2rem(88);
  transform: translateX(-50%);
}

.list {
  border-width: 1px 0;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  background: #fff;
  margin-bottom: px2rem(21);
  flex-wrap: wrap;
}

.list a {
  display: block;
  border-bottom: 1px solid #ededed;
  box-sizing: border-box;
  width: 50%;
}

.list a:first-child {
  padding: px2rem(30);
  padding-top: px2rem(48);
  position: absolute;
  height: px2rem(346);
  border-right: 1px solid #ededed;
}

.list a:first-child img {
  margin: px2rem(42) px2rem(52) 0;
  bottom: px2rem(48);
  width: px2rem(150);
  position: absolute;
}

.list a .title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: px2rem(36);
  line-height: px2rem(43);
  color: rgb(255, 151, 0);
  margin-bottom: px2rem(12);
}

.list a .tips {
  color: #999;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: px2rem(29);
  font-size: px2rem(24);
}

.list a:nth-child(2),
.list a:nth-child(3) {
  margin-left: 50%;
  border-bottom: 1px solid #ededed;
  height: px2rem(173);
  padding: px2rem(48) px2rem(30);
}

.list a:nth-child(2) img,
.list a:nth-child(3) img {
  margin-top: px2rem(-10);
  width: px2rem(90);
  float: right;
}

.banner {
  margin-bottom: px2rem(21);
  overflow: hidden;
  height: px2rem(174);
}

.banner img {
  width: 100%;
}

.main {
  margin-bottom: px2rem(21);
  background: #fff;
  .activity-sub-title {
    font-size: px2rem(22);
    color: #999;
    text-align: center;
    padding-bottom: px2rem(16);
}
.activity-body {
    padding: px2rem(24) px2rem(30) px2rem(30);
    white-space: nowrap;
    .discover-food {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    width: px2rem(222);
    margin-right: px2rem(12);
    img {
    width: px2rem(222);
    height: px2rem(220);
    margin-bottom: px2rem(19);
}
    p{
      font-size: px2rem(26);
    color: #333;
    margin-bottom: px2rem(10);
        overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    }
    .fprice{
          height: px2rem(48);
    line-height: px2rem(48);
    font-size: px2rem(24);
        color: #ff5339;
    }

}
.activity-more{
          font-size:px2rem(26);
    color: #999;
    text-align: center;
    padding-bottom:px2rem(36);
    svg{
      height: px2rem(18);
    width: px2rem(10);
    margin-left: px2rem(11);
    }
    }
}
}

.main .activity-header {
  padding-top: px2rem(39);
  text-align: center;
  font-size: px2rem(36);
  font-weight: 700;
  color: #333;
  .line {
    display: inline-block;
    margin: px2rem(16) px2rem(7) px2rem(13);
    border: 1px solid #333;
    width: .4rem;
    height: 0;
    position: relative;
  }
  .line::after {
    position: absolute;
    top: px2rem(-5);
    content: "";
    background: #333;
    height: px2rem(10);
    width: px2rem(10);
    border-radius: 50%;
  }
  .line.left:after {
    right: px2rem(-5);
  }
  .line.right:after {
    left: px2rem(-5);
  }
  .activity-icon {
    position: relative;
    top: px2rem(4);
    width: px2rem(33);
    height: px2rem(33);
  }
}
</style>
