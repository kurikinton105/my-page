<template>
<div>
  <h1>Skills</h1>
  <p>一覧表示します。</p>
  <a class="box1"> aaaretwwwwwwwwwwwwa<br>fdsjaofafsda </a>
  <br>
  <hr>
  <a href="#" class="btn-square-little-rich">BUTTON</a>
</div>
</template>

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
