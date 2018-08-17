<template>
  <div class="home">
    <Head-top/>
    <Head-search/>
    <Home-banner/>
    <Home-nav/>
    <Home-vocal-concert/>
  </div>
</template>

<script>
  import HeadTop from "@/components/HeadTop"
  import HeadSearch from "@/components/HeadSearch"
  import HomeBanner from "@/components/HomeCont/HomeBanner"
  import HomeNav from "@/components/HomeCont/HomeNav"
  import HomeVocalConcert from "@/components/HomeCont/HomeVocalConcert"
    export default {
        name: "home",
      components:{
        HeadTop,
        HeadSearch,
        HomeBanner,
        HomeNav,
        HomeVocalConcert
      }
    }

</script>

<style scoped>
  .home{width:90%;margin:0 auto;}
</style>
