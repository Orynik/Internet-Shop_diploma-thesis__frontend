import axios from 'axios'

const url = "http://localhost:3000/";
const motors = "motors";
// const serial = "Serial";

export default {
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
  async putMotor(obj){
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
  }
}