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
    homeprolist: [],
    shopheader: '',
    giftList: [],
    saleList: [],
    filter: {
      kinds: []
    },
    shoptab1: [],
    ratingstags: [],
    ratings: []
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
    },
<<<<<<< HEAD
    FINDGIFT: function (state) {
      state.giftList = _this.giftList
    },
    FINDSALE: function (state) {
      state.saleList = _this.saleList
    },
    FILTERKINDS: function (state) {
      state.filter.kinds = _this.filterkinds
=======
    SHOPTAB1: function (state) {
      state.shoptab1 = _this.shoptab1
    },
    RATINGSTAGS: function (state) {
      state.ratingstags = _this.ratingstags
    },
    RATINGS: function (state) {
      state.ratings = state.ratings.concat(_this.ratings)
>>>>>>> 8d523d9cd5932bbd675117af26f14e83d2bedaf1
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
        context.commit('SHOPHEADER')
      }, function (err) {
        console.log(err)
      })
    },
<<<<<<< HEAD
    findgift: function (context) {
      Vue.http.get('http://localhost:3000/find/gift').then(function (res) {
        _this.giftList = res.body
        context.commit('FINDGIFT')
=======
    shoptab1: function (context) {
      Vue.http.get('http://localhost:3000/shop/tab1').then(function (res) {
        _this.shoptab1 = res.body
        console.log(_this.shoptab1)
        context.commit('SHOPTAB1')
>>>>>>> 8d523d9cd5932bbd675117af26f14e83d2bedaf1
      }, function (err) {
        console.log(err)
      })
    },
<<<<<<< HEAD
    findsale: function (context) {
      Vue.http.get('http://localhost:3000/find/sale').then(function (res) {
        _this.saleList = res.body
        context.commit('FINDSALE')
=======
    ratingstags: function (context) {
      Vue.http.get('http://localhost:3000/ratings/tags').then(function (res) {
        _this.ratingstags = res.body
        console.log(_this.ratingstags)
        context.commit('RATINGSTAGS')
>>>>>>> 8d523d9cd5932bbd675117af26f14e83d2bedaf1
      }, function (err) {
        console.log(err)
      })
    },
<<<<<<< HEAD
    filterkinds: function (context) {
      Vue.http.get('http://localhost:3000/filter/kinds').then(function (res) {
        _this.filterkinds = res.body
        console.log(res.body)
        context.commit('FILTERKINDS')
      }, function (err) {
        console.log(err)
      })
=======
    ratings: function (context) {
      Vue.http.get('http://localhost:3000/ratings', {
        params: {
          offset: offset
        }
      }).then(function (res) {
        _this.ratings = res.body
        console.log(_this.ratings)
        context.commit('RATINGS')
      }, function (err) {
        console.log(err)
      })
      offset += 10
>>>>>>> 8d523d9cd5932bbd675117af26f14e83d2bedaf1
    }
  }
})
