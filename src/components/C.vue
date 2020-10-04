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
       <v-btn @click="count+=1" id="test">押してね！！</v-btn> 
    </li>
    <v-btn @click="flag=!flag">押してね2！！</v-btn> 
    
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


