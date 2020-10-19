import axios from 'axios'

const url = "http://localhost:3000/";
const motors = "motors";
const serials = "serials";

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
}