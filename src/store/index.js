import { createStore } from 'vuex'
import fetchText from '../assets/js/fetchText'

export default createStore({
  state: {
    text: '',
    rightKeys: 1,
    progress: 0,
    speed: 0,
  },
  getters: {
    loading({ text }) {
      return !text.length
    },
    finished({ text, progress }) {
      return text.length == progress
    },
    accuracy({ rightKeys, text }) {
      return Math.round((rightKeys * 1000) / text.length) / 10
    },
  },
  mutations: {
    setText(state, value) {
      state.rightKeys = value.length
      state.text = value
    },
    progressIncrease(state) {
      state.progress++
    },
    reset(state) {
      state.error = false
      state.progress = 0
    },
    decreaseRightKeys(state) {
      state.rightKeys--
    },
    setSpeed(state, value) {
      state.speed = value
    },
  },
  actions: {
    async downloadText({ commit }) {
      const text = await fetchText()
      commit('setText', text)
    },
  },
})
