import axios from 'axios'

const url = "http://localhost:3000/";
const motors = "motors";
const serials = "serials";
const manufacturers = "manufacturers";
const products = "products";

export default {

  // Serials-request

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
  async updateMotor(obj){
    return axios.put(url + motors + "/" + obj.id,obj).then(
      () => alert("Изменение прошло успешно"),
      (err) => err,
    )
  },
  async deleteMotor(id){
    return axios.delete(url + motors + "/" + id).then(
      () => alert("Удаление прошло успешно"),
      (err) => err,
    )
  },
  async createMotor(obj){
    return axios.post(url + motors,obj)
      .then(
        () => alert("Запись успешно создана"),
        (err) => err,
      )
  },

  // Serials-request

  async getSerials(){
    return axios.get(
      url + serials
    )
  },
  async createSerial(obj){
    return axios.post(url + serials,obj)
    .then(
      () => alert("Запись успешно создана"),
      (err) => err,
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
    return axios.put(url + serials + "/" + obj.id,obj).then(
      () => alert("Изменение прошло успешно"),
      (err) => err,
    )
  },
  async deleteSerial(id){
    return axios.delete(url + serials + "/" + id).then(
      () => alert("Удаление прошло успешно"),
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
      // TODO: Решить проблему с отправкой изображения
      // (на json-server не получается проставить заголовок 'multipart/form-data')
      return axios.post(
        url + manufacturers,
        obj,
        {
          headers:{
          'Content-Type': 'multipart/form-data'
          }
        }
      )
      .then(
        () => alert("Запись успешно создана"),
        (err) => err,
      )
    },
    async updateManufacturer(obj){
      return axios.put(url + manufacturers + "/" + obj.id,obj).then(
        () => alert("Изменение прошло успешно"),
        (err) => err,
      )
    },
    async deleteManufacturer(id){
      return axios.delete(url + manufacturers + "/" + id).then(
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
      return axios.post(url + products,obj)
      .then(
        () => alert("Запись успешно создана"),
        (err) => err,
      )
    },
    async updateProduct(obj){
      return axios.put(url + products + "/" + obj.id,obj).then(
        () => alert("Изменение прошло успешно"),
        (err) => err,
      )
    },
    async deleteProduct(id){
      return axios.delete(url + products + "/" + id).then(
        () => alert("Удаление прошло успешно"),
        (err) => err,
      )
    },
}