import Vue from 'vue'
import Vuex from 'vuex'
import api from "../api/index.js"

Vue.use(Vuex)

//  Отладочная переменная
//  let counter = 1;

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
      //  TODO: Запрос вызывается два раза
      //  console.log(counter++);
      const request = await api.auth()
      if(request === undefined){
        return false
      }
      ctx.commit("authorized",request.data);
      return true
    },
    async logout(ctx){
      await api.logout()
      ctx.commit("logout");
    },
    async checkPermission(){
      const responsePerm = await api.checkPermission()
      if (responsePerm === undefined) return false

      if(responsePerm === "Authorized"){
        return true
      }else{
        return false
      }
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
    },
    logout(state){
      state.username = ""
      state.isAuthorized = false
    },
  },
  getters:{
    getAuthStatus(store){
      if(store.isAuthorized === false || store.nickname === ""){
        return false
      }
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
