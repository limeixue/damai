<template>
  <div class="HomeChildrenParents">
    <ul class="HomeChildrenParents_title">
      <li>
        <h1>儿童亲子</h1>
      </li>
      <li>
        <a href="#">查看更多</a>
      </li>
    </ul>
    <div class="HomeChildrenParents_cont">
      <div class="HomeChildrenParents_left">
        <img src="./img/150684_n.jpg"/>
      </div>
      <div class="HomeChildrenParents_right">
        <ul>
          <li>
            <img src="./img/153044_n.jpg"/>
          </li>
          <li>
            <ul>
              <li>
                <a href="#">极速冰雪世界杭州西溪印象城站</a>
              </li>
              <li>
                <a href="#">杭州 | 杭州西溪印象城东广场</a>
              </li>
              <li>
                <a href="#">2018.06.29-08.26</a>
              </li>
              <li>
                <a href="#">¥39起</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <img src="./img/153044_n.jpg"/>
          </li>
          <li>
            <ul>
              <li>
                <a href="#">极速冰雪世界杭州西溪印象城站</a>
              </li>
              <li>
                <a href="#">杭州 | 杭州西溪印象城东广场</a>
              </li>
              <li>
                <a href="#">2018.06.29-08.26</a>
              </li>
              <li>
                <a href="#">¥39起</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <img src="./img/153044_n.jpg"/>
          </li>
          <li>
            <ul>
              <li>
                <a href="#">极速冰雪世界杭州西溪印象城站</a>
              </li>
              <li>
                <a href="#">杭州 | 杭州西溪印象城东广场</a>
              </li>
              <li>
                <a href="#">2018.06.29-08.26</a>
              </li>
              <li>
                <a href="#">¥39起</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <img src="./img/153044_n.jpg"/>
          </li>
          <li>
            <ul>
              <li>
                <a href="#">极速冰雪世界杭州西溪印象城站</a>
              </li>
              <li>
                <a href="#">杭州 | 杭州西溪印象城东广场</a>
              </li>
              <li>
                <a href="#">2018.06.29-08.26</a>
              </li>
              <li>
                <a href="#">¥39起</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <img src="./img/153044_n.jpg"/>
          </li>
          <li>
            <ul>
              <li>
                <a href="#">极速冰雪世界杭州西溪印象城站</a>
              </li>
              <li>
                <a href="#">杭州 | 杭州西溪印象城东广场</a>
              </li>
              <li>
                <a href="#">2018.06.29-08.26</a>
              </li>
              <li>
                <a href="#">¥39起</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <img src="./img/153044_n.jpg"/>
          </li>
          <li>
            <ul>
              <li>
                <a href="#">极速冰雪世界杭州西溪印象城站</a>
              </li>
              <li>
                <a href="#">杭州 | 杭州西溪印象城东广场</a>
              </li>
              <li>
                <a href="#">2018.06.29-08.26</a>
              </li>
              <li>
                <a href="#">¥39起</a>
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
        name: "home-children-parents"
    }
</script>

<style scoped>
  .HomeChildrenParents{margin-top:3%;}
  .HomeChildrenParents{
    margin-top:2%;
    border:1px solid #CCC;
    padding:0 2% 2% 2%;
  }
  .HomeChildrenParents li{list-style-type:none;}
  .HomeChildrenParents_cont,.HomeChildrenParents_title,.HomeChildrenParents_right,.HomeChildrenParents_right>ul{display:flex;}
  .HomeChildrenParents_title{
    justify-content:space-between;
    height:80px;
    line-height:80px;
  }
  .HomeChildrenParents_left{flex:1;}
  .HomeChildrenParents_left img{
    width:94%;
    border:1px solid #CCC;
  }
  .HomeChildrenParents_right img{
    width:100%;
    border:1px solid #CCC;
  }
  .HomeChildrenParents_right{
    flex:3;
    flex-wrap:wrap;
  }
  .HomeChildrenParents_right>ul{
    width:290px;
    padding-left:1%;
  }
  .HomeChildrenParents_right>ul>li{flex:1;}
  .HomeChildrenParents_right>ul>li:nth-child(2){padding:0 2%;}
</style>
