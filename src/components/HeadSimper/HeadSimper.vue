<template>
  <div class="headSimper">
    <div class="headSimper_cont">
      <div class="headSimper_cont_img">
        <img src="./img/logo.png" />
      </div>
      <div class="headSimper_cont_title">
        <h2>欢迎登录</h2>
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
    width:90%;
    margin:0 auto ;
    background-color: white;
    overflow: hidden;
    clear: both;
    padding:1% 0;
  }
  .headSimper_cont{
    width: 100%;
    margin: 0 auto;
    clear: both;
    overflow: hidden;
  }
  .headSimper_cont_img{
    width:10%;
    border-right:1px solid #CCC;
    float:left;
  }
  .headSimper_cont_img img{width:80%;}
  .headSimper_cont_title{
    text-indent:20px;
    float: left;
    line-height:49px;
  }
</style>
