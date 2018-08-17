<template>
    <ul class="HomeNav">
      <li>
          <img src="./img/VocalConcert.png" alt=""><br/>
          <span>演唱会</span>
      </li>
      <li>
          <img src="./img/Opera.png" alt=""><br/>
          <span>话剧歌剧</span>
      </li>
      <li>
          <img src="./img/SportsEvents.png" alt=""><br/>
          <span>体育赛事</span>
      </li>
      <li>
          <img src="./img/ChildrenParents.png" alt=""><br/>
          <span>儿童亲子</span>
      </li>
      <li>
          <img src="./img/HolidayLeisure.png" alt=""><br/>
          <span>度假休闲</span>
      </li>
      <li>
          <img src="./img/Concert.png" alt=""><br/>
          <span>音乐会</span>
      </li>
      <li>
          <img src="./img/QuYuanMiscellaneousAltar.png" alt=""><br/>
          <span>曲苑杂坛</span>
      </li>
      <li>
          <img src="./img/DanceBallet.png" alt=""><br/>
          <span>舞蹈芭蕾</span>
      </li>
      <li>
          <img src="./img/Comic.png" alt=""><br/>
          <span>动漫</span>
      </li>
      <li>
          <img src="./img/TourismExhibition.png" alt=""><br/>
          <span>旅游展览</span>
      </li>
    </ul>
</template>

<script>
    export default {
        name: "home-nav"
    }
</script>

<style scoped>
  li{list-style: none;}
  .HomeNav{
    display:flex;
    border:1px solid #CCC;
    padding:2% 0 1% 0;
    margin-top:2%;
  }
  .HomeNav>li{
    flex:1;
    font-size:13px;
    cursor:pointer;
    display:table-cell;
    text-align:center;
    vertical-align:middle;
  }
  .HomeNav>li span{line-height:40px;}
</style>
