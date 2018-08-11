import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 声明一个一个状态
const state = {
  reload: true
}

// 然后给actions注册一个事件处理函数，当函数被触发时候把状态提交给mutations处理
const actions = {
  goback: ({commit}) => commit('goback', 'beforeBack'),
  gobackReload: ({commit}) => commit('gobackReload')
}

// 更新状态
const mutations = {
  goback(state) {
    debugger
    state.reload = false
  },
  gobackReload(state) {
    debugger
    state.reload = true
  }
}

// 获取状态
const getters = {

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
