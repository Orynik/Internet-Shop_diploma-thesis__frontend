import Vue from 'vue'
import Vuex from 'vuex'
import api from "../api/index.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layout: 'default-layout',
    isAuthorized: false,
    username: "qweqwe"
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
      }
  },
  getters:{
    getAuthStatus(store){
      return store.isAuthorized;
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
