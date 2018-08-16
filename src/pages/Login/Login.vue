<template>
  <div class="login">
    <Head-simper />
    <div class="login_cont">
      <div class="login_cont_img">
        <img src="./img/loginImg.png_q75.jpg"/>
      </div>
      <div class="login_cont_form">
        <Tabs type="card">
          <TabPane label="账号登录">
            <Form ref="formInline" :model="formInline" :rules="ruleInline">
              <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="请输入手机号">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="请输入密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem>
                <Button type="primary" @click="handleSubmit('formInline')" long>提交</Button>
              </FormItem>
              <ul>
                <li><img src="img/WeChat.png" alt=""></li>
                <li><img src="img/WeChat.png" alt=""></li>
                <li><img src="img/WeChat.png" alt=""></li>
                <li><img src="img/WeChat.png" alt=""></li>
              </ul>
              <ul style="display:flex;margin-left:69%">
                <li style="list-style: none"><a href="#">忘记密码</a></li>
                <li style="list-style: none"><a href="#">免费注册</a></li>
              </ul>
            </Form>
          </TabPane>
          <TabPane label="短信快捷登录">标签二的内容</TabPane>
          <TabPane label="扫码登录">二维码</TabPane>
        </Tabs>
      </div>
    </div>
  </div>

</template>

<style scoped>
  .login{
    width:90%;
    margin: 0 auto;
  }
  .login_cont{
    margin-top: 30px;
  }
  .login_cont_img{
    width:90%;
    position: absolute;
    z-index:-1;
    background:black;
    float: left;
  }
  .login_cont_img img{
    width:57%;
  }
  .login_cont_form{
    width:30%;
    background:white;
    float:right;
    margin-left:30px;
    padding:2%;
    margin-top:3%;
    margin-right:8%;
  }
</style>

<script>
  import HeadSimper from "@/components/HeadSimper/HeadSimper"
  export default {
    data(){
      return{
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '请输入正确的手机号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入正确的密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码必须是6位以上', trigger: 'blur' }
          ]
        }
      }
    },
    components:{
      HeadSimper,
    },
    methods:{
      handleSubmit(name) {
        let That = this;
        this.$refs[name].validate((valid) => {
          if (valid) {
            //this.$Message.success('Success!');
            this.$http.loginSubmit("/api/user/login")
              .then((rel)=>{
                //console.log(rel)
                this.$Message.success("登录成功")
                // window.localStorage.setItem("username",rel.user.name)
                That.$router.push({
                  path:"admin",
                  name:"Admin",
                  params:{
                    data:rel.user
                  }
                })
              },(err)=>{
                this.$Message.error("登录失败")
              })
          } else {
            this.$Message.error('请输入正确的内容后再提交！');
          }
        })
      }
    }
  }
</script>
