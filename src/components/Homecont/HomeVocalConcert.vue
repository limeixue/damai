<template>
    <div class="HomeVocalConcert">
        <ul class="HomeVocalConcert_title">
          <li>
            <h2>演唱会</h2>
          </li>
          <li>
            <a href="#">查看更多</a>
          </li>
        </ul>
      <div>
        <div>
            <img src="./img/SportsEvents.png"/>
        </div>
        <div>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "vocal-concert"
    }
</script>

<style scoped>
  .HomeVocalConcert{margin-top:2%;border:1px solid #CCC;}
  .HomeVocalConcert li{list-style-type:none;}
  .HomeVocalConcert_title{display:flex;justify-content:space-between;height:60px;line-height:60px;}
</style>
