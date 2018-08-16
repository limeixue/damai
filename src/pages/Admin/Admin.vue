<style scoped>
  .admin_cont{
    width: 1000px;
    margin: 0 auto;
  }
  .admin_cont_c{
    background-color: red;
    width: 400px;
    height: 500px;
  }
</style>
<template>
  <div class="admin">
    <Head-top :username="username"/>
    <Head-search />
    <div class="admin_cont">
      <div class="admin_cont_menu floatLeft">
        <div>我的大麦</div>
        <div>
          <ul>
            <li>
              <div>交易中</div>
              <ul>
                <li><router-link to="/admin/ordermenu">订单管理</router-link></li>
                <li><router-link to="/admin/mymsg">个人信息</router-link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="admin_cont_c floatLeft">
        <router-view />
      </div>
    </div>
  </div>

</template>

<script>
  import HeadSearch from "@/components/HeadSearch"
  import HeadTop from "@/components/HeadTop"
  export default {
    data(){
      return{
        username:""
      }
    },
    mounted(){
      try{
        this.name = this.$route.params.data.name
      }catch(err){
        if(window.localStorage.getItem("username")){
          this.username = window.localStorage.getItem("username")
        }else{
          this.username = ".....";
        }
//                  console.log(new Error("用户名信息出错"));
      }
    },
    components:{
      HeadSearch,
      HeadTop
    }
  }
</script>
