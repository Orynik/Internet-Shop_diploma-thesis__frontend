import axios from 'axios'

const url = "http://localhost:4444/";
const motors = "motors";
const serials = "serials";
const manufacturers = "manufacturers";
const products = "products";
const cart = "cart";
const reg = "singup";
const signin = "signin";
const auth = "auth";
const logout = "logout";
const checkPerm = "checkPermission";

axios.defaults.withCredentials = true

export default {
    async checkPermission(){
      return await axios.get(url + checkPerm).then(
        (req) => req.data,
        () => {
          // TODO: Обработка ошибки
          return false
        }
      )
    },
    async auth(){
      return axios.get(url + auth,{
        withCredentials: true,
      }).then(
        (res) => res,
          // TODO: Обработка ошибки
        () => undefined
      )
    },
    async logout(){
      return axios.get(url + logout)
    },
    async updateCart(){
      return await axios.get(url + cart)
    },
    async addingCart(obj){
      return axios.post(url + cart,obj,{
        withCredentials: true,
      })
    },

    async registratonUser(user){
      return axios.post(url + reg,user)
    },

    async loginUser(user){
      return axios.post(url + signin,user,{
        withCredentials: true
      });
    },

    // Serials-request

    async getSerials(){
      return axios.get(
        url + serials,{
          withCredentials: true
        }
      )
    },
    async createSerial(obj){
      return axios.post(url + serials,obj)
      .then(
        () => alert("Запись успешно создана"),
        function (responceError){
            if(responceError.response.status === 400){
              if(responceError.response.data === "ER_DATA_TOO_LONG"){
                alert("Недопустима длина поля")
              }
            }if(responceError.response.status === 500){
              if(responceError.response.data === "ER_DUP_KEY"){
                alert("Внутреннаяя ошибка базы")
              }
            }
        }
      )
    },
    async getSerialById(id){
      return axios.get(
        url + serials + "/?id=" + id,
      ).then(
        res => res.data[0]
      )
    },
    async updateSerial(obj){
      return axios.put(url + serials ,obj).then(
        () => alert("Изменение прошло успешно"),
        (err) => err,
      )
    },
    async deleteSerial(id){
      return axios.delete(url + serials,
        {
          params: {id}
        }
      )
        .then(
        () => alert("Удаление прошло успешно"),
        (err) => err,
      )
    },

  // Motors-request

  async getMotors(){
    return axios.get(
      url + motors
    )
  },
  async getMotorById(id){
    return axios.get(
      url + motors + "?id=" + id,
    ).then(
      res => res.data[0]
    )
  },
  async getMotorByNameAndSerial(Name,Serial){
    return axios.get(
      url + motors + `?name=${Name}&serial=${Serial}`
    ).then(
      res => res.data[0]
    )
  },
  async getMotorSerials(){
    return axios.get(
      url + motors + `?serial`
    ).then(
      res => res.data[0]
    )
  },
  async updateMotor(obj){
    return axios.put(url + motors,obj).then(
      () => alert("Изменение прошло успешно"),
      (err) => err,
    )
  },
  async deleteMotor(id){
    return axios.delete(url + motors,{
      params: {id}
    }).then(
      () => alert("Удаление прошло успешно"),
      (err) => err,
    )
  },
  async createMotor(obj){
    console.log(obj)
    return axios.post(url + motors,obj)
      .then(
        () => alert("Запись успешно создана"),
        (err) => err,
      )
  },

    // Manufacturers-request

    async getManufacturers(){
      return axios.get(
        url + manufacturers
      )
    },
    async getManufacturerById(id){
      return axios.get(
        url + manufacturers + "/?id=" + id,
      ).then(
        res => res.data[0]
      )
    },
    async createManufacturer(obj){
      return axios.post(
        url + manufacturers,
        obj,
      )
      .then(
        () => alert("Запись успешно создана"),
        function (responceError){
          if(responceError.response.status === 400){
            if(responceError.response.data === "ER_DATA_TOO_LONG"){
              alert("Недопустима длина поля")
            }
          }if(responceError.response.status === 500){
            if(responceError.response.data === "ER_DUP_KEY"){
              alert("Внутреннаяя ошибка базы")
            }
          }
      }
      )
    },
    async updateManufacturer(obj){
      return axios.put(url + manufacturers ,obj).then(
        () => alert("Изменение прошло успешно"),
        (err) => err,
      )
    },
    async deleteManufacturer(id){
      return axios.delete(url + manufacturers,
        {
          params: {id}
        }
        ).then(
        () => alert("Удаление прошло успешно"),
        (err) => err,
      )
    },

     // Manufacturers-request

    async getProducts(){
      return axios.get(
        url + products
      )
    },
    async getProductById(id){
      return axios.get(
        url + products + "/?id=" + id,
      ).then(
        res => res.data[0]
      )
    },
    async createProduct(obj){
      return axios.post(url + products,obj,
        {
          headers:{
            'content-type': 'multipart/form-data',
          },
        }
      )
      .then(
        () => alert("Запись успешно создана"),
        (err) => err,
      )
    },
    async updateProduct(obj){
      return axios.put(url + products,obj,
        {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }).then(
        () => alert("Изменение прошло успешно"),
        (err) => err,
      )
    },
    async deleteProduct(id){
      return axios.delete(url + products, {
        params: {id}
      }).then(
        () => alert("Удаление прошло успешно"),
        (err) => err,
      )
    },
}