import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 先写个假数据
const state = {
  totalTime: 0,
  list: [{
    name: '锅锅',
    avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2307347035,3381807498&fm=21&gp=0.jpg',
    date: '2016-6-20',
    totalTime: '6',
    comment: '去环城驾校学车'
  }]
}

export default new Vuex.Store({
  state
})
