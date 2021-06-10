import Vue from 'vue'
import Vuex from 'vuex'
import api from "../api/AllRequestApi.js"

Vue.use(Vuex)

//  Отладочная переменная
//  let counter = 1;

export default new Vuex.Store({
  actions: {
    async addToCart(ctx,paidload){
      return await api.addingCart(paidload).then(
        (res) =>
          {
            console.log(res)
            ctx.dispatch("getCart")
          }
        ,
        (err) => new Error(err)
      )
    },
    async deleteFromCart(ctx,payload){
      return api.deleteItemFromCart(payload)
    },
    async getCart(ctx){
      const result = await api.updateCart().then(
        (res) => {
          return res.data;
        }
      )
      if(result !== undefined){
        ctx.commit("setUserCart",result);
      }
    },
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
      ctx.dispatch("getCart")
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
      ctx.commit("clearUserCart")
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
    username: "",
    cartData: [],
    cartDataCount: 0,
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
    setUserCart(state,payload){
      state.cartData = payload;
      state.cartDataCount = payload.length;
    },
    clearUserCart(state){
      state.cartDataCount = 0;
      state.cartData = []
    }
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
    },
    getCartData(store){
      return store.cartData
    },
    getCartDataCounter(store){
      return store.cartDataCount
    }
  },
  modules: {
    layout(state) {
      return state.layout
    }
  }
})
