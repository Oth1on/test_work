import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    isLoggedIn: false,
    users: [
      {
        email: 'Admin',
        password: 'Admin'
      }
    ],
    isUserExist: false,
    currentUser: null,
    loginError: false
  },

  getters: {
    users: state => state.users,
    isUserExist: state => state.isUserExist,
    isLoggedIn: state => state.isLoggedIn,
    currentUser: state => state.currentUser,
    loginError: state => state.loginError
  },

  mutations: {
    addUser: (state, user) => state.users.push(user),
    setUserExist: state => state.isUserExist = true,
    resetUserExist: state => state.isUserExist = false,
    setIsLoggedIn: state => state.isLoggedIn = true,
    setCurrentUser: (state, user) => state.currentUser = user,
    setLoginError: state => state.loginError = !state.loginError
  },

  actions: {
    signUpUser({ commit, state }, data) {
      if (!_.find(state.users, { email: data.email })) {
        commit('addUser', data)
      } else {
        commit('setUserExist')
        setTimeout(() => {
          commit('resetUserExist')
        }, 2000)
      }
    },

    signInUser({ commit, state }, data) {
      if (_.find(state.users, { email: data.email, password: data.password })) {
        commit('setIsLoggedIn')
        commit('setCurrentUser', data)
      } else {
        commit('setLoginError')
        setTimeout(() => {
          commit('setLoginError')
        }, 2000)
      }
    }
  }
})
