<template>
<div>
  <h1>C</h1>
  <li>Cのページです</li>
  <!-- ボタンを配置する-->
  <ul>写真あげMASKぁ〜〜？？</ul>
  <ul>aaaas</ul>
  <a href="https://yama-code.azurewebsites.net/"><ul>https://yama-code.azurewebsites.net/</ul></a>
  <ul id="example-1">
    <li v-for="i in count">
       <v-btn @click="count+=1" id="test"><a href="#" class="btn-square-little-rich">押してね！！</a></v-btn> 
    </li>
    <v-btn @click="flag=!flag"><a href="#" class="btn-square-little-rich">押してね２！！！</a></v-btn> 
    
  </ul>
  <div class="test" v-bind:class="{active:flag}">
      <p>doumo~~~</p> 
    </div>
  <p>count: {{ flag }} </p>
</div>
</template>

<script>
  export default {
    name: 'count',
    data () {
      return {
        count :1,
        flag : false
      }
    },
    
    methods:{
      twitterShare(){
      //シェアする画面を設定
      var shareURL = 'https://twitter.com/intent/tweet?text=' + "写真あげMASKぁ〜？？で作成されました。https://icy-moss-046b41900.azurestaticapps.net/" + "%20%23Cos5year";  
      //シェア用の画面へ移行
      location.href = shareURL
    }
    }
  }
</script>

<style>
  .test{
    transition: 1.0s;
    transform: scale(0);
  }
   .active {
      transform: scale(1);
    }
</style>

<style>
.box1{
  width:500px;
  height:300px;
  background:black;
  border-radius:30px;
}
.box1 span{
  display:inline-block;
  margin:1em 0 0 0;
  background:gold;
  font-size:12px;
  padding:.5em 1em;
  border-radius:.5em;
}
.btn-square-little-rich {
  position: relative;
  display: inline-block;
  padding: 0.25em 0.5em;
  text-decoration: none;
  color: black;
  background: white;/*色*/
  border: solid 1px #0f9ada;/*線色*/
  border-radius: 4px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.2);
  text-shadow: 0 1px 0 rgba(0,0,0,0.2);
}

.btn-square-little-rich:active {
  /*押したとき*/
  border: solid 1.5px #03A9F4;
  box-shadow: none;
  text-shadow: none;
}
</style>