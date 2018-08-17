<template>
  <div class="headSearch">
    <div class="headSearch_cont">
      <div class="floatLeft headSearch_cont_img">
        <img src="./img/logo.png" />
      </div>
      <div>
        <span>北京</span>
      </div>
      <div class="floatLeft headSearch_cont_input">
        <Input search enter-button="搜索" placeholder="Enter something..." />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"HeadSearch",

  }
</script>

<style scoped>
  .headSearch{
    clear: both;
    overflow: hidden;
    width:90%;
    margin:1% auto;
  }
  .headSearch_cont{
    display: flex;
  }
  .headSearch_cont>div:nth-child(1){flex:1;}
  .headSearch_cont>div:nth-child(2){flex:1;line-height:61px;}
  .headSearch_cont>div:nth-child(3){flex:5;}
  .headSearch_cont>div:nth-child(1) img{width:80%;}
  .headSearch_cont_input{
    margin-left: 35px;
    margin-top: 20px;
  }
  .headSearch_cont_input .ivu-input-group{width:60%}
</style>

