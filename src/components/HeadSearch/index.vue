<template>
  <div class="headSearch">
    <div class="headSearch_cont">
      <div class="floatLeft headSearch_cont_img">
        <img src="./img/logo.png" />
      </div>
      <div class="floatLeft headSearch_cont_select">
        <Select />
      </div>
      <div class="floatLeft headSearch_cont_input">
        <Input search enter-button="Search" placeholder="Enter something..." />
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name:"HeadSearch"
  }
</script>

<style scoped>
  .headSearch{
    clear: both;
    overflow: hidden;
    width: 1000px;
    margin: 0 auto;
  }
  .headSearch_cont_select{
    margin-top: 20px;
  }
  .headSearch_cont_input{
    margin-left: 35px;
    margin-top: 20px;
  }
</style>

