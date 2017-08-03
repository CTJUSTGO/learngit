<template>
 <div class="header">
      <div class="icon">
        <svg>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left.6f6409e"></use>
        </svg>
      </div>
      <h1>{{titlehead}}</h1>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'my-header',
  data () {
    return {
      title: ''
    }
  },
  mounted () {
    console.log(this)
    if (this.titlehead) {
      this.title = this.titlehead
    }
  },
  computed: {
    ...mapState(['titlehead'])
  }
}
</script>
<style lang="scss" scoped>
@import '../../../static/hotcss/px2rem.scss';
#find {
  padding-bottom:px2rem(50) 
}
.header {
  position: relative;
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
</style>