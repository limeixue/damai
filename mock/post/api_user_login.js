module.exports = function(req){// module.exports固定写法，输出
  // 成功
  const success = 0;
  const errorCode = "00000";
  const msg = "登录成功";
  const user = {
    name: "李梅雪",
    age: 18,
    sex: "女"
  }

  if(req.body.username === "memeda" && req.body.password == "1234567"){//失败
    success = 1;
    errorCode = "00001";
    msg = "登录失败";
    user = {};
  }


  return {
    success,//success:success,
    errorCode,
    msg,
    user
  }
}
