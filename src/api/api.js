import axios from "./config"

export default {
  //获取留学生课堂列表
  getHelloText() {
    return axios.get(`/getUserName`)
  },
}