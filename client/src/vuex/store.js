import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'
// import createPersistedState from 'vuex-persistedstate'

vue.use(vuex)

const http = axios.create({
  baseURL: `http://localhost:3000`
})

const state = {
  dataUser: null,
  articles: null,
  articleID: null,
  articleIns: null
}

const mutations = {
  setUserFB (state, payload) {
    console.log('INI PAYLOAD DARI MUTATIONS : ', payload)
    state.dataUser = payload
  },
  setArticles (state, payload) {
    console.log('ini payload mutations Articles : ', payload)
    state.articles = payload
  },
  setArticlesId (state, payload) {
    state.articleID = payload
  },
  setinsArticle (state, payload) {
    state.articleIns = payload
  }
}

const actions = {
  getUserFB (context, payload) {
    http.get('/users/login', {
      headers: {
        fbaccesstoken: localStorage.getItem('fbaccesstoken')
      }
    })
    .then(response => {
      console.log('INI RESPONSE DARI LOGIN FB ======>', response)
      console.log('INI PAYLOAD DARI LOGIN FB ======>', payload)
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('nameUser', response.data.profile.name)
      localStorage.setItem('imgUser', response.data.profile.picture)
      router.push('/admin')
      context.commit('setUserFB')
    })
  },
  getArticles (context, payload) {
    http.get('/articles')
    .then(response => {
      console.log('ini response articles dari actions :', response)
      context.commit('setArticles', response.data)
    })
  },
  getArticlesId (context, payload) {
    http.get(`/articles/${payload}`)
    .then(response => {
      context.commit('setArticlesId', response.data)
    })
  },
  insArticle (context, payload) {
    http.post('/articles', {
      title: payload.judul,
      short_desc: payload.mini_konten,
      desc: payload.konten,
      picture: payload.gambar
    }, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(response => {
      context.commit('setinsArticle', response.data)
    })
  }
}

const store = new vuex.Store({
  state,
  mutations,
  actions
})

export default store
