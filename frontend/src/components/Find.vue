
<template>
  <div id="find">
    <div class="header">
      <div class="icon">
        <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left.6f6409e"></use></svg>
      </div>
      <h1>发现</h1>
    </div>
    <div class="list">
      <a>
        <img src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/"/>
        <p class="title">积分商城</p>
        <p class="tips">0元好物在这里 !</p>
      </a>
      <a>
        <img src="https://fuss10.elemecdn.com/e/ff/3b9c4a4dfda1df548dc9274f6a7c1jpeg.jpeg?imageMogr/format/webp/"/>
        <p class="title" style="color: rgb(245, 120, 93);">美味爆料</p>
        <p class="tips">无啤酒不夏天</p>
      </a>
       <a>
        <img src="https://fuss10.elemecdn.com/6/76/8d42eef97ff4c1c2b671085358541jpeg.jpeg?imageMogr/format/webp/"/>
        <p class="title" style="color:rgb(27, 169, 225)">推荐有奖</p>
        <p class="tips">5元现金拿不停</p>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Find',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  font-size:36px;
  color:#fff;
  top: 0;
  left: 0;
  background-image: linear-gradient(90deg,#0af,#0085ff);
  width: 100%;
  height: 88px;

}
.header .icon{
    height: 88px;
    width:88px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
}
svg{
  width:44px;
  height: 44px;
}
.header h1{
    position: absolute;
    top: 0;
    left: 50%;
    max-width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
    line-height:88px; 
    height: 88px;
    transform: translateX(-50%);
}
.list{
    border-width: 1px 0;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    background: #fff;
    margin-bottom: 21px;
        flex-wrap: wrap;
}
.list a{
    display: block;
    border-bottom: 1px solid #ededed;
    box-sizing:border-box;
    width:50%;
}
.list a:first-child{
  padding: 30px;
  padding-top:48px;
  position: absolute;
  height: 346px;
  border-right: 1px solid #ededed;
}
.list a:first-child img{
  margin:42px 52px 0;
  bottom: 48px;
  width:150px;
  position: absolute;

}
.list a .title{
  overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 36px;
    line-height: 43px;
        color: rgb(255, 151, 0);
        margin-bottom: 12px;
}
.list a .tips{
  color: #999;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 29px;
    font-size: 24px;
}
.list a:nth-child(2),.list a:nth-child(3){
    margin-left: 50%;
    border-bottom: 1px solid #ededed;
    height:173px;
    padding:48px 30px;
}
.list a:nth-child(2) img,.list a:nth-child(3) img{
  margin-top:-10px;
  width:90px;
  float: right;
}
</style>
