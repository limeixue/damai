<template>
<div>
  <div class="Bottom">
    <ul class="BottomNav">
      <li>
        <a href="#">帮助中心</a>
      </li>|
      <li>
        <a href="#">公司介绍</a>
      </li>|
      <li>
        <a href="#">品牌识别</a>
      </li>|
      <li>
        <a href="#">公司大事记</a>
      </li>|
      <li class="footer_nav_policy">
        <a href="#">隐私权专项政策</a>
      </li>|
      <li>
        <a href="#">廉正举报</a>
      </li>|
      <li>
        <a href="#">联系合作</a>
      </li>|
      <li>
        <a href="#">招聘信息</a>
      </li>|
      <li>
        <a href="#">防骗秘籍</a>
      </li>
    </ul>
    <ul class="BottomCenter">
      <li class="BottomLogo">
        <a href="#">
          <img src="./img/TB1A42zxNGYBuNjy0FnXXX5lpXa-167-60.png"/>
        </a>
      </li>
      <li class="BottomApp">
        <img src="./img/TB1r0uFxHSYBuNjSspiXXXNzpXa-280-280.png" alt=""><br/>
        <span>App下载</span>
      </li>
      <li class="BottomRight">
        <ul>
          <li>在线客服</li>
          <li>
            <ul class="BottomLicence">
              <li><a href="#">京ICP证031057号</a></li>|
              <li><a href="#">京ICP备11043884号</a></li>|
              <li><a href="#">京公网安备11010102000430号</a></li>|
              <li><a href="#">广播电视节目制作经营许可证 (京)字第02253号</a></li>
              <li><a href="#">网络文化经营许可证 京网文[2016]3438-413号</a></li>|
              <li><a href="#">营业性演出许可证 京市演587号</a></li>
            </ul>
          </li>
          <li>北京红马传媒文化发展有限公司 版权所有大麦网Copyright 2003-2018 All Rights Reserved</li>
          <li>
              <ul class="BottomLicenceImg">
                  <li>
                    <a href="#">
                      <img src="./img/TB1gw_ZxNWYBuNjy1zkXXXGGpXa-131-32.gif" alt="">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./img/TB1ZO80pyOYBuNjSsD4XXbSkFXa-141-41.png" alt="">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./img/TB1Y580pyOYBuNjSsD4XXbSkFXa-83-50.png" alt="">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./img/TB1pM_ZxNWYBuNjy1zkXXXGGpXa-114-40.png" alt="">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./img/chengxin.png" alt="">
                    </a>
                  </li>
              </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
  .Bottom a,.Bottom li{font-size:13px;color: black;}
  .Bottom{
    margin-top:2%;
    border-top:1px solid #CCC;
    padding-bottom:2%;
  }
  .Bottom li{list-style:none;}
  .BottomNav{
    width:70%;
    margin:2% auto;
  }
  .BottomNav,.BottomLicence,.BottomLicenceImg{display:flex;}
  .BottomNav,.BottomLicenceImg{justify-content:space-around;}
  .BottomNav li{text-align:center;}
  .BottomCenter{
    width:90%;
    display:flex;
    margin:0 auto;
  }
  .BottomLogo{flex:1;}
  .BottomApp{
    flex:2;
    text-align:center;
    vertical-align:middle;
    display:table-cell;
  }
  .BottomApp img{width:38%;}
  .BottomRight{flex:7;}
  .BottomLicence{flex-wrap:wrap;}
  .BottomLicence>li{padding:0 2%;}
  .BottomLicenceImg{width:75%;padding:2% 0;}
  .BottomRight>ul>li{line-height:30px;}
  .BottomRight>ul>li:nth-child(1),.BottomRight>ul>li:nth-child(3),.BottomRight>ul>li:nth-child(4){padding-left:2%;}
</style>
