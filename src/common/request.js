import axios from "axios"
export default function(url,obj){
  return new Promise(function(relove,reject){
    axios.post(url,obj)
      .then((rel)=>{
        relove(rel.data);
      },(err)=>{
        reject("3333");
  })
}
