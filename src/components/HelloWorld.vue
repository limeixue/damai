<template>
  <div>
    <div>
      <label>用户名:</label>
      <input type="text" v-model="username"/>
    </div>
    <div>
      <label>密码;</label>
      <input type="password" v-model="password"/>
    </div>
    <div>
      <input type="submit" value="提交" @click="submits()"/>
    </div>
  </div>
</template>

<script>
  export default {//export default是一个默认输出
    data () {
      return {
        username:"",
        password:""
      }
    },
    methods:{
      submits(){
        let That = this;
        //"/api/user/login"属于一个接口
        this.$http.getHelloWorld("/api/user/login",{username:this.username,password:this.password})
          .then(function(rel){
            if(rel.success == 0){
              That.$router.push({
                name:"Home",
                path:"home",
                params:{
                  user:rel.user
                }
              })
            }else{
              console.log(rel.msg);
            }
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
