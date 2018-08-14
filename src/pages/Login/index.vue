<template>
  <div class="login">
    <Head-simper />
    <div class="login_cont">
      <div class="login_cont_img">
        <img src="img/loginImg.png" />
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
            </Form>
          </TabPane>
          <TabPane label="短信快捷登录">标签二的内容</TabPane>
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
    float: left;
  }
  .login_cont_img img{
    width: 400px;
  }
  .login_cont_form{
    float: left;
    margin-left: 30px;
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
    methods:{
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
//                        this.$Message.success('Success!');
            this.$http.loginSubmit("/api/user/login")
              .then((rel)=>{
//                                    console.log(rel)
                this.$Message.success("登录成功")
              },(err)=>{
                this.$Message.error("登录失败")
              })
          } else {
            this.$Message.error('请输入正确的内容后再提交！');
          }
        })
      }
    },
    components:{
      HeadSimper,
    }
  }
</script>
