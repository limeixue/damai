// 引入request.js文件
import request from "./../common/request"
//输出的方法
export function Login(url,obj){
  return request(url,obj)
}
