<template>
  <div class="headTop">
    <div class="headTop_cont floatLeft">
      <span>Hi,欢迎[<span>{{ username }}</span>，<span>退出</span>]登录</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HeadTop",
    props:["username"],
  }
</script>

<style scoped>
  .headTop{
    padding:1% 0;
    overflow: hidden;
    border-bottom:1px solid #CCC;
  }
</style>
