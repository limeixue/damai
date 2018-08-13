import * as http from "./http"
const $http = http;
export  default{//默认输出
  install(Vue){
    Vue.prototype.$http = http;
  }
}
