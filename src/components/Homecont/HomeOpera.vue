<template>
  <div class="HomeOpera">
      <ul class="HomeOpera_title">
          <li>
            <h1>话剧歌剧</h1>
          </li>
          <li>
            <a href="#">查看更多</a>
          </li>
      </ul>
      <div class="HomeOpera_cont">
          <div class="HomeOpera_left">
              <img src="./img/150074_n.jpg"/>
          </div>
          <div class="HomeOpera_right">
              <ul>
                  <li>
                      <img src="./img/158593_n.jpg"/>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <a href="#">MaiLive多媒体3D舞台剧</a>
                      </li>
                      <li>
                        <a href="#">盗墓笔记番外篇《新月饭店》杭州站 杭州 | 杭州剧院</a>
                      </li>
                      <li>
                        <a href="#">2018.10.13</a>
                      </li>
                      <li>
                        <a href="#">¥162起 </a>
                      </li>
                  </ul>
                </li>
              </ul>
            <ul>
              <li>
                <img src="./img/158593_n.jpg"/>
              </li>
              <li>
                <ul>
                  <li>
                    <a href="#">MaiLive多媒体3D舞台剧</a>
                  </li>
                  <li>
                    <a href="#">盗墓笔记番外篇《新月饭店》杭州站 杭州 | 杭州剧院</a>
                  </li>
                  <li>
                    <a href="#">2018.10.13</a>
                  </li>
                  <li>
                    <a href="#">¥162起 </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                <img src="./img/158593_n.jpg"/>
              </li>
              <li>
                <ul>
                  <li>
                    <a href="#">MaiLive多媒体3D舞台剧</a>
                  </li>
                  <li>
                    <a href="#">盗墓笔记番外篇《新月饭店》杭州站 杭州 | 杭州剧院</a>
                  </li>
                  <li>
                    <a href="#">2018.10.13</a>
                  </li>
                  <li>
                    <a href="#">¥162起 </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                <img src="./img/158593_n.jpg"/>
              </li>
              <li>
                <ul>
                  <li>
                    <a href="#">MaiLive多媒体3D舞台剧</a>
                  </li>
                  <li>
                    <a href="#">盗墓笔记番外篇《新月饭店》杭州站 杭州 | 杭州剧院</a>
                  </li>
                  <li>
                    <a href="#">2018.10.13</a>
                  </li>
                  <li>
                    <a href="#">¥162起 </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                <img src="./img/158593_n.jpg"/>
              </li>
              <li>
                <ul>
                  <li>
                    <a href="#">MaiLive多媒体3D舞台剧</a>
                  </li>
                  <li>
                    <a href="#">盗墓笔记番外篇《新月饭店》杭州站 杭州 | 杭州剧院</a>
                  </li>
                  <li>
                    <a href="#">2018.10.13</a>
                  </li>
                  <li>
                    <a href="#">¥162起 </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                <img src="./img/158593_n.jpg"/>
              </li>
              <li>
                <ul>
                  <li>
                    <a href="#">MaiLive多媒体3D舞台剧</a>
                  </li>
                  <li>
                    <a href="#">盗墓笔记番外篇《新月饭店》杭州站 杭州 | 杭州剧院</a>
                  </li>
                  <li>
                    <a href="#">2018.10.13</a>
                  </li>
                  <li>
                    <a href="#">¥162起 </a>
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
        name: "home-opera"
    }
</script>

<style scoped>
  .HomeOpera{margin-top:3%;}
  .HomeOpera{
    margin-top:2%;
    border:1px solid #CCC;
    padding:0 2% 2% 2%;
  }
  .HomeOpera li{list-style-type:none;}
  .HomeOpera_cont,.HomeOpera_title,.HomeOpera_right,.HomeOpera_right>ul{display:flex;}
  .HomeOpera_title{
    justify-content:space-between;
    height:80px;
    line-height:80px;
  }
  .HomeOpera_left{flex:1;}
  .HomeOpera_left img{
    width:94%;
    border:1px solid #CCC;
  }
  .HomeOpera_right img{
    width:100%;
    border:1px solid #CCC;
  }
  .HomeOpera_right{
    flex:3;
    flex-wrap:wrap;
  }
  .HomeOpera_right>ul{
    width:290px;
    padding-left:1%;
  }
  .HomeOpera_right>ul>li{flex:1;}
  .HomeOpera_right>ul>li:nth-child(2){padding:0 2%;}
</style>
