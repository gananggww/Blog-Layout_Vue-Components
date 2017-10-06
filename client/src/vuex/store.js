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
  articleIns: null,
  articleSelf: null
}

const getters = {
  filterSelfArticles: (state, getters) => (model) => {
    console.log('ini getters', getters)
    let articlesArray = state.articleSelf
    let searchString = model

    if (!searchString) {
      return articlesArray
    }
    searchString = searchString.trim().toLowerCase()
    articlesArray = articlesArray.filter(function (item) {
      if (item.title.toLowerCase().indexOf(searchString) !== -1) {
        return item
      }
    })
      // Return an array with the filtered data.
    return articlesArray
  },
  filterArticles: (state, getters) => (model) => {
    console.log('ini getters', getters)
    let articlesArray = state.articles
    let searchString = model

    if (!searchString) {
      return articlesArray
    }
    searchString = searchString.trim().toLowerCase()
    articlesArray = articlesArray.filter(function (item) {
      if (item.title.toLowerCase().indexOf(searchString) !== -1) {
        return item
      }
    })
      // Return an array with the filtered data.
    return articlesArray
  }
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
  },
  setSelfArticles (state, payload) {
    state.articleSelf = payload
  },
  setDelSelfArticle (state, payload) {
    state.articleSelf.splice(payload.idx, 1)
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
  },
  getSelfArticles (context, payload) {
    http.get('/articles/self', {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(response => {
      context.commit('setSelfArticles', response.data)
    })
  },
  delSelfArticle (context, payload) {
    http.delete(`/articles/${payload.id}`, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(response => {
      console.log('ini response delete : ', response.data)
      console.log('ini isi payloadid : ', payload.id)
      console.log('ini isi payloadidx : ', payload.idx)
      context.commit('setDelSelfArticle', payload)
    })
  }
}

const store = new vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
