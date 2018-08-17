<template>
  <div>
    <Head-top/>
    <div class="home">
      <Head-search/>
      <Home-banner/>
      <Home-nav/>
      <Home-vocal-concert/>
      <Home-opera/>
      <Home-sports-events/>
      <Home-children-parents/>
    </div>
    <Bottom/>
  </div>
</template>

<script>
  import HeadTop from "@/components/HeadTop"
  import HeadSearch from "@/components/HeadSearch"
  import HomeBanner from "@/components/HomeCont/HomeBanner"
  import HomeNav from "@/components/HomeCont/HomeNav"
  import HomeVocalConcert from "@/components/HomeCont/HomeVocalConcert"
  import HomeOpera from "@/components/HomeCont/HomeOpera"
  import HomeSportsEvents from "@/components/HomeCont/HomeSportsEvents"
  import HomeChildrenParents from "@/components/HomeCont/HomeChildrenParents"
  import Bottom from "@/components/BottomOfPage/Bottom"
    export default {
        name: "home",
      components:{
        HeadTop,
        HeadSearch,
        HomeBanner,
        HomeNav,
        HomeVocalConcert,
        HomeOpera,
        HomeSportsEvents,
        HomeChildrenParents,
        Bottom
      }
    }

</script>

<style scoped>
  .home{width:90%;margin:0 auto;}
</style>
