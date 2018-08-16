// 引入的异步 在命令行已经添加 cnpm install --save-dev -axios  所以不用有axios.js文件
import axios from "axios"
export default function(url,obj){
  return new Promise(function(relove,reject){
  axios.post(url,obj)
    .then((rel)=>{
      relove(rel.data);
  },(err)=>{
      reject("失败");
  })
})
}
