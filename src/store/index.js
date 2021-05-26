import Vue from 'vue'
import Vuex from 'vuex'
import api from "../api/index.js"

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    async login(ctx,user){
      const request = await api.loginUser(user).catch(
        (err) =>{
          if(err.response.data === "Error: User does not exist"){
            throw new Error("Такого пользователя не существует")
          }
          else{
            throw new Error("Непредвиденная ошибка")
          }
        }
      );
      ctx.commit("authorized",user.Login);
      return request
    },
    async auth(ctx){
      const request = await api.auth()
      console.log(request);
      ctx.commit("authorized",request);
      return true
    }
  },
  state: {
    layout: 'default-layout',
    isAuthorized: false,
    username: ""
  },
  mutations: {
    setLayout(state, payload) {
      state.layout = payload
    },
    authorized(state,payload){
      state.username = payload
      state.isAuthorized = true
      console.log(payload)
    },

  },
  getters:{
    getAuthStatus(store){
      if(store.isAuthorized !== false || store.nickname !== ""){
        return store.isAuthorized;
      }
      return false
    },
    getUserName(store){
      return store.username
    }
  },
  modules: {
    layout(state) {
      return state.layout
    }
  }
})
