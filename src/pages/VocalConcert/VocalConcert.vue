<template>
    <div>
      <HeadTop/>
      <div class="VocalConcert">
        <HeadSearch/>
        <span>共4697个商品</span>
        <div>
          <div class="VocalConcertLfet">
              <div>
                <ul>
                  <li>城市</li>
                </ul>
                <ul>
                  <li>分类</li>
                </ul>
                <ul>
                  <li>时间</li>
                </ul>
              </div>
          </div>
          <div class="VocalConcertRight">
            <h2>cdd</h2>
            <ul>
              <li>dgf</li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <Bottom/>
    </div>
</template>

<script>
  import HeadTop from "@/components/HeadTop"
  import HeadSearch from "@/components/HeadSearch"
  import Bottom from "@/components/BottomOfPage/Bottom"
    export default {
        name: "vocal-concert",
        components:{
          HeadSearch,
          HeadTop,
          Bottom
        }
    }
</script>

<style scoped>
  .VocalConcert li{list-style:none;}
  .VocalConcert{
    width:90%;
    margin:0 auto;
  }
  .VocalConcert>div{
    display:flex;
    justify-content:space-between;
  }
  .VocalConcertRight,.VocalConcertLfet>div{border:1px solid #CCC;}
</style>
