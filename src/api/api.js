import axios from "./config"

export default {
  //获取后台信息
  getHelloText() {
    return axios.get(`/getUserName`)
  },
}