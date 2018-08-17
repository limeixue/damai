<template>
    <div class="HomeVocalConcert">
        <ul class="HomeVocalConcert_title">
          <li>
            <h1>演唱会</h1>
          </li>
          <li>
            <a href="#">查看更多</a>
          </li>
        </ul>
      <div class="HomeVocalConcert_cont">
          <div class="HomeVocalConcert_left">
              <img src="./img/155253_n.jpg"/>
          </div>
          <div class="HomeVocalConcert_right">
              <ul>
                  <li>
                    <img src="./img/155253_n.jpg"/>
                  </li>
                  <li>
                      <ul>
                          <li>
                            <a href="#">“不止，是李健”2018-2019...</a>
                          </li>
                          <li>
                            <a href="#">广州 | 宝能国际体育演艺中心</a>
                          </li>
                          <li>
                            <a href="#">2018.11.17 19:30</a>
                          </li>
                          <li>
                            <a href="#">¥380起</a>
                          </li>
                      </ul>
                  </li>
              </ul>
              <ul>
                <li><img src="./img/155253_n.jpg"/></li>
                <li>
                    <ul>
                        <li>
                          <a href="#">“不止，是李健”2018-2019...</a>
                        </li>
                        <li>
                          <a href="#">广州 | 宝能国际体育演艺中心</a>
                        </li>
                        <li>
                          <a href="#">2018.11.17 19:30</a>
                        </li>
                        <li>
                          <a href="#">¥380起</a>
                        </li>
                    </ul>
                </li>
              </ul>
              <ul>
                <li><img src="./img/155253_n.jpg"/></li>
                <li>
                    <ul>
                        <li>
                          <a href="#">“不止，是李健”2018-2019...</a>
                        </li>
                        <li>
                          <a href="#">广州 | 宝能国际体育演艺中心</a>
                        </li>
                        <li>
                          <a href="#">2018.11.17 19:30</a>
                        </li>
                        <li>
                          <a href="#">¥380起</a>
                        </li>
                    </ul>
                </li>
              </ul>
              <ul>
                <li>
                  <img src="./img/155253_n.jpg"/>
                </li>
                <li>
                    <ul>
                        <li>
                          <a href="#">“不止，是李健”2018-2019...</a>
                        </li>
                        <li>
                          <a href="#">广州 | 宝能国际体育演艺中心</a>
                        </li>
                        <li>
                          <a href="#">2018.11.17 19:30</a>
                        </li>
                        <li>
                          <a href="#">¥380起</a>
                        </li>
                    </ul>
                </li>
              </ul>
              <ul>
                <li><img src="./img/155253_n.jpg"/></li>
                <li>
                    <ul>
                        <li>
                          <a href="#">“不止，是李健”2018-2019...</a>
                        </li>
                        <li>
                          <a href="#">广州 | 宝能国际体育演艺中心</a>
                        </li>
                        <li>
                          <a href="#">2018.11.17 19:30</a>
                        </li>
                        <li>
                          <a href="#">¥380起</a>
                        </li>
                    </ul>
                </li>
              </ul>
              <ul>
                <li><img src="./img/155253_n.jpg"/></li>
                <li>
                    <ul>
                        <li>
                          <a href="#">“不止，是李健”2018-2019...</a>
                        </li>
                        <li>
                          <a href="#">广州 | 宝能国际体育演艺中心</a>
                        </li>
                        <li>
                          <a href="#">2018.11.17 19:30</a>
                        </li>
                        <li>
                          <a href="#">¥380起</a>
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
        name: "home-vocal-concert"
    }
</script>

<style scoped>
  .HomeVocalConcert{
    margin-top:2%;
    border:1px solid #CCC;
    padding:0 2% 2% 2%;
  }
  .HomeVocalConcert li{list-style-type:none;}
  .HomeVocalConcert_cont,.HomeVocalConcert_title,.HomeVocalConcert_right,.HomeVocalConcert_right>ul{display:flex;}
  .HomeVocalConcert_title{
    justify-content:space-between;
    height:80px;
    line-height:80px;
  }
  .HomeVocalConcert_left{flex:1;}
  .HomeVocalConcert_left img{
    width:94%;
    border:1px solid #CCC;
  }
  .HomeVocalConcert_right img{
    width:100%;
    border:1px solid #CCC;
  }
  .HomeVocalConcert_right{
    flex:3;
    flex-wrap:wrap;
  }
  .HomeVocalConcert_right>ul{
    width:290px;
    padding-left:1%;
  }
  .HomeVocalConcert_right>ul>li{flex:1;}
  .HomeVocalConcert_right>ul>li:nth-child(2){padding:0 2%;}
</style>
