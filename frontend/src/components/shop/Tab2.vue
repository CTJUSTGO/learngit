<template>
  <div class="overview-container">
    <div class="overview-col1">
      <b>4.3</b>
      <div>综合评价</div>
      <p>高于周边商家28.7%</p>
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
            <div class="rating-rating">
              <svg><use xlink:href="#rating-star"></use></svg>
              <svg><use xlink:href="#rating-star"></use></svg>
              <svg><use xlink:href="#rating-star"></use></svg>
              <svg><use xlink:href="#rating-star"></use></svg>
              <svg><use xlink:href="#rating-star"></use></svg>
            </div>
          </div>
          <span>4.2</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  
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
  .overview-container{
    margin-top:4px;
    background-color: #fff;
    margin-bottom:px2rem(20);
    padding:px2rem(30);
    font-size:px2rem(27);
    display: flex;
    align-items: center;
    color: #666;
  }
</style>

