<template>
    <ul class="HomeNav">
      <li>
        <a href="#">
          <img src="./img/VocalConcert.png" alt="">
          <span>演唱会</span>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="./img/Opera.png" alt="">
          <span>演唱会</span>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="./img/SportsEvents.png" alt="">
          <span>演唱会</span>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="./img/ChildrenParents.png" alt="">
          <span>演唱会</span>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="./img/HolidayLeisure.png" alt="">
          <span>演唱会</span>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="./img/Concert.png" alt="">
          <span>演唱会</span>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="./img/QuYuanMiscellaneousAltar.png" alt="">
          <span>演唱会</span>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="./img/DanceBallet.png" alt="">
          <span>演唱会</span>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="./img/Comic.png" alt="">
          <span>演唱会</span>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="./img/TourismExhibition.png" alt="">
          <span>演唱会</span>
        </a>
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
  .HomeNav{display:flex;border:1px solid #CCC;padding-bottom:2%;margin-top:2%;}
  .HomeNav>li{flex:1;padding:0 3%;margin-top:2%;}
  .HomeNav img{display:table-cell;vertical-align:central;text-align:center;}
  .HomeNav>li a{color: black;}
</style>
