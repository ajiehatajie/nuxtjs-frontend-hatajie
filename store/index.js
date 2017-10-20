const GET_DATA = 'GET_DATA'
const GET_PAGING_POST = 'GET_PAGING_POST'
const DETAIL_POST = 'DETAIL_POST'
const API_ERROR = 'API_ERROR'
const KEYWORD_SEARCH = 'KEYWORD_SEARCH'
// const API_URL = 'http://hatajieblog.dev/api/v1/'
const API_URL = 'https://api.hatajie.com/api/v1/'

const DETAIL_POST_SLUG = 'DETAIL_POST_SLUG'
export const state = () => ({
  posts: [],
  post: null,
  paging_post: null,
  singleView: false,
  slug: '',
  searchStatus: ''
})

export const actions = {
  async getPost ({ commit }) {
    const ip = await this.$axios.$get(API_URL + 'post')
    commit('GET_DATA', ip.data.data)
    commit('GET_PAGING_POST', ip.data)
    // console.log(ip.data)
  },
  async getDataPostwithPaging ({commit}, param) {
    const uri = await this.$axios.$get(param)
    // console.log(param + ' dari actions')
    commit('GET_DATA', uri.data.data)
    commit('GET_PAGING_POST', uri.data)
  },
  async getPostDetail ({ commit }, param) {
    const uri = await this.$axios.$get(API_URL + 'post/' + param)
    commit('DETAIL_POST', uri.data.data)
  },
  async getPostDetailSlug ({ commit }, param) {
    const uri = await this.$axios.$get(API_URL + 'post/' + param)
    // console.log(uri.data)
    commit('GET_DATA', uri.data)
    commit('DETAIL_POST_SLUG', uri.data)
  },
  async getSearchPost ({ commit }, param) {
    const uri = await this.$axios.$get(API_URL + 'post?search=' + param)
    commit('GET_DATA', uri.data.data)
    commit('GET_PAGING_POST', uri.data)
  },
  getDetailPost (context, payload) {
    // const uri =  this.$axios.$get(API_URL + 'post/' + param)
    // commit('DETAIL_POST', param)
    context.commit('DETAIL_POST', payload)
   //  console.log(payload)
  },
  updateSearch (context, payload) {
    context.commit('KEYWORD_SEARCH', payload)
  }

}

export const getters = {
  posts: state => {
    return state.posts
  },
  paging_post: state => {
    return state.paging_post
  },
  singleView: state => {
    return state.singleView
  },
  post: state => {
    return state.post
  },
  slug: state => {
    return state.slug
  },
  searchStatus: state => {
    return state.searchStatus
  }

}

export const mutations = {
  [GET_DATA] (state, payload) {
    state.posts = payload
    state.singleView = false
    state.paging_post = payload
    // state.searchStatus = payload
    // console.log(payload)
  },
  [GET_PAGING_POST] (state, payload) {
    state.paging_post = payload
    // state.singleView = false
    // console.log(payload)
  },
  [DETAIL_POST] (state, payload) {
    state.singleView = true
    state.post = payload
    state.slug = payload.slug
    // console.log(payload.slug + ' detail payload ')
  },
  [DETAIL_POST_SLUG] (state, payload) {
    state.singleView = true
    state.post = payload
    state.slug = payload.slug
    // console.log(payload + ' detail payload ')
  },
  [API_ERROR] (state, payload) {
    console.log(payload)
  },
  [KEYWORD_SEARCH] (state, payload) {
    console.log(payload)
    state.searchStatus = payload
  }
}
