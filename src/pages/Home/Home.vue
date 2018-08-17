<template>
  <div>
    <Head-top/>
    <Head-search/>
    <Home-banner/>
  </div>
</template>

<script>
  import HeadTop from "@/components/HeadTop"
  import HeadSearch from "@/components/HeadSearch"
  import HomeBanner from "@/components/HomeCont/HomeBanner"
    export default {
        name: "home",
      components:{
        HeadTop,
        HeadSearch,
        HomeBanner
      }
    }

</script>

<style scoped>

</style>
