<template>
  <div class="HomeSportsEvents">
    <ul class="HomeSportsEvents_title">
      <li>
        <h1>体育赛事</h1>
      </li>
      <li>
        <a href="#">查看更多</a>
      </li>
    </ul>
    <div class="HomeSportsEvents_cont">
      <div class="HomeSportsEvents_left">
        <img src="./img/144149_n.jpg"/>
      </div>
      <div class="HomeSportsEvents_right">
        <ul>
          <li>
            <img src="./img/158829_n.jpg"/>
          </li>
          <li>
            <ul>
              <li>
                <a href="#">-湿身运动节【2018第三届...</a>
              </li>
              <li>
                <a href="#">杭州 | 新加坡杭州科技园（万人大草坪）</a>
              </li>
              <li>
                <a href="#">2018.08.18 16:30</a>
              </li>
              <li>
                <a href="#">¥68起</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <img src="./img/158829_n.jpg"/>
          </li>
          <li>
            <ul>
              <li>
                <a href="#">-湿身运动节【2018第三届...</a>
              </li>
              <li>
                <a href="#">杭州 | 新加坡杭州科技园（万人大草坪）</a>
              </li>
              <li>
                <a href="#">2018.08.18 16:30</a>
              </li>
              <li>
                <a href="#">¥68起</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <img src="./img/158829_n.jpg"/>
          </li>
          <li>
            <ul>
              <li>
                <a href="#">-湿身运动节【2018第三届...</a>
              </li>
              <li>
                <a href="#">杭州 | 新加坡杭州科技园（万人大草坪）</a>
              </li>
              <li>
                <a href="#">2018.08.18 16:30</a>
              </li>
              <li>
                <a href="#">¥68起</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <img src="./img/158829_n.jpg"/>
          </li>
          <li>
            <ul>
              <li>
                <a href="#">-湿身运动节【2018第三届...</a>
              </li>
              <li>
                <a href="#">杭州 | 新加坡杭州科技园（万人大草坪）</a>
              </li>
              <li>
                <a href="#">2018.08.18 16:30</a>
              </li>
              <li>
                <a href="#">¥68起</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <img src="./img/158829_n.jpg"/>
          </li>
          <li>
            <ul>
              <li>
                <a href="#">-湿身运动节【2018第三届...</a>
              </li>
              <li>
                <a href="#">杭州 | 新加坡杭州科技园（万人大草坪）</a>
              </li>
              <li>
                <a href="#">2018.08.18 16:30</a>
              </li>
              <li>
                <a href="#">¥68起</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <img src="./img/158829_n.jpg"/>
          </li>
          <li>
            <ul>
              <li>
                <a href="#">-湿身运动节【2018第三届...</a>
              </li>
              <li>
                <a href="#">杭州 | 新加坡杭州科技园（万人大草坪）</a>
              </li>
              <li>
                <a href="#">2018.08.18 16:30</a>
              </li>
              <li>
                <a href="#">¥68起</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "home-sports-events"
    }
</script>

<style scoped>
  .HomeSportsEvents{margin-top:3%;}
  .HomeSportsEvents{
    margin-top:2%;
    border:1px solid #CCC;
    padding:0 2% 2% 2%;
  }
  .HomeSportsEvents li{list-style-type:none;}
  .HomeSportsEvents_cont,.HomeSportsEvents_title,.HomeSportsEvents_right,.HomeSportsEvents_right>ul{display:flex;}
  .HomeSportsEvents_title{
    justify-content:space-between;
    height:80px;
    line-height:80px;
  }
  .HomeSportsEvents_left{flex:1;}
  .HomeSportsEvents_left img{
    width:94%;
    border:1px solid #CCC;
  }
  .HomeSportsEvents_right img{
    width:100%;
    border:1px solid #CCC;
  }
  .HomeSportsEvents_right{
    flex:3;
    flex-wrap:wrap;
  }
  .HomeSportsEvents_right>ul{
    width:290px;
    padding-left:1%;
  }
  .HomeSportsEvents_right>ul>li{flex:1;}
  .HomeSportsEvents_right>ul>li:nth-child(2){padding:0 2%;}
</style>
