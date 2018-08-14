<template>
  <div class="headSimper">
    <div class="headSimper_cont">
      <div class="headSimper_cont_img">
        <img src="./img/loginImg.jpg" />
      </div>
      <div class="headSimper_cont_hr"></div>
      <div class="headSimper_cont_title">
        <h3>欢迎登录</h3>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data(){
      return{
      }
    }
  }
</script>

<style scoped>
  .headSimper{
    background-color: white;
    overflow: hidden;
    clear: both;
  }
  .headSimper_cont{
    width: 1000px;
    margin: 0 auto;
    clear: both;
    overflow: hidden;
  }
  .headSimper_cont_img{
    float:left;
  }
  .headSimper_cont_hr{
    float: left;
    width: 2px;
    height: 60px;
    background-color: #cccccc;
    margin-left: 15px;
    margin-right: 15px;
  }
  .headSimper_cont_title{
    float: left;
  }
</style>
