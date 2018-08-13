module.exports = function(req){
  const success = 0;//0 �ɹ�   1ʧ��
  const errorCode = "00000";
  const msg = "登录成功";
  const user = {
    name: "王宝强",
    age: 18,
    sex: "男"
  }



  return {
    success,
    errorCode,
    msg,
    user
  }
}
