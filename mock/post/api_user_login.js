module.exports = function(req){
  const success = 0;
  const errorCode = "00000";
  const msg = "登录成功";
  const user = {
    name: "李梅雪",
    age: 18,
    sex: "女"
  }

  if(req.body.username === "memeda" && req.body.password == "123"){//失败
    success = 1;
    errorCode = "00001";
    msg = "登录失败";
    user = {};
  }


  return {
    success,
    errorCode,
    msg,
    user
  }
}
