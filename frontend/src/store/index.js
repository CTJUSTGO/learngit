import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)
var _this = this
var offset = 0

export default new Vuex.Store({
  state: {
    homeinput: '搜索商家、商品',
    weather: '',
    place: '',
    hotsearch: '',
    banner: {
      bannerPage: ''
    },
    homeprolist: '',
    shopheader: ''

  },
  mutations: {
    WEATHER: function (state) {
      state.weather = _this.weather
    },
    HOTSEARCH: function (state) {
      state.hotsearch = _this.hotsearch
    },
    PLACE: function (state) {
      state.place = _this.place.name
    },
    BANNER: function (state) {
      state.banner.bannerPage = _this.bannerPage
    },
    HOMEPROLIST: function (state) {
      state.homeprolist = state.homeprolist.concat(_this.homeprolist)
    },
    SHOPHEADER: function (state) {
      state.shopheader = _this.shopheader
    }
  },
  // getters state 的计算属性
  getters: {

  },
  // actions 操作异步的，其实就是提交的 mutaions
  actions: {
    weather: function (context) {
      Vue.http.get('http://localhost:3000/weather').then(function (res) {
        _this.weather = res.body
        context.commit('WEATHER')
      }, function (err) {
        console.log(err)
      })
    },
    hotsearch: function (context) {
      Vue.http.get('http://localhost:3000/hotsearch').then(function (res) {
        _this.hotsearch = res.body
        context.commit('HOTSEARCH')
      }, function (err) {
        console.log(err)
      })
    },
    place: function (context) {
      Vue.http.get('http://localhost:3000/place').then(function (res) {
        _this.place = res.body
        context.commit('PLACE')
      }, function (err) {
        console.log(err)
      })
    },
    banner: function (context) {
      Vue.http.get('http://localhost:3000/banner').then(function (res) {
        _this.bannerPage = []
        var n = (Math.ceil(res.body[0].entries.length / 8))
        for (var j = 0; j < n; j++) {
          var bannerPage = []
          if (res.body[0].entries.length > 8) {
            for (var i = 0; i < 8; i++) {
              bannerPage.push(res.body[0].entries[i])
            }
            _this.bannerPage.push(bannerPage)
            res.body[0].entries.splice(0, 8)
          } else {
            for (var k = 0; k < res.body[0].entries.length; k++) {
              bannerPage.push(res.body[0].entries[k])
            }
            _this.bannerPage.push(bannerPage)
          }
        }
        context.commit('BANNER')
      }, function (err) {
        console.log(err)
      })
    },
    homeprolist: function (context) {
      Vue.http.get('http://localhost:3000/homeproductslist', {
        params: {
          offset: offset
        }
      }).then(function (res) {
        _this.homeprolist = res.body
        context.commit('HOMEPROLIST')
      }, function (err) {
        console.log(err)
      })
      offset += 20
    },
    shopheader: function (context) {
      Vue.http.get('http://localhost:3000/shop/header').then(function (res) {
        _this.shopheader = res.body
        console.log(_this.shopheader)
        context.commit('SHOPHEADER')
      }, function (err) {
        console.log(err)
      })
    }
  }
})
