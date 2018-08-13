//引入整个js文件import *   as是重命名 http就是重新命的名字
import * as http from "./http"
const $http = http; //又重新声明一个常量
export  default{//默认输出
  install(Vue){
    Vue.prototype.$http = http;
  }
}
