<template>
<div>
  <!--https://qiita.com/RyoTa0222/items/cba9c1cebc6fda927837-->
  <h1>Bですよーー</h1>
  <p>aa</p>
  <li>aaa</li>
  <a>aaaaa</a>
  <li>bbbbb</li>
  <hr>
  <h1>スクロールするとフェードインするやつを作りたい</h1>
  <div :class="{fadeIn: visible}">
    <slot v-show="visible"></slot>
  </div>
  <fade-in-component>
   <section>
       <div class="wrapper">
          <h1>Title00</h1>
          <h2>subtitle00</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <h2>subtitle01</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          <div class="d-flex justify-space-around my-4">
          　　<v-btn depressed color="info">button</v-btn>
             <v-btn outlined color="info">button</v-btn>
          </div>
       </div>
   </section>
  </fade-in-component>
  <v-btn @click="flag=!flag"><a href="#" class="btn-square-little-rich">上へスクロールします！！！やったぜ！</a></v-btn> 
  <p>state: {{ flag }} </p>
  <br>
一番下
</div>

</template>

<script>
  export default {
    data() {
      return {
        visible: false,
        flag : false
      };
    },
    created() {
      window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
    },

    methods: {
      handleScroll() {
        if (!this.visible) {
          var top = this.$el.getBoundingClientRect().top;
          this.visible = top < window.innerHeight + 100;
        }
      },
      scrollToTop() {
        scrollTo(20, 0);
      }
    }
  }
</script>

<style>
* 
{
  margin: 0;
  padding: 0;
}
h2 
{
  margin: 2rem 0 1rem;
}
.wrapper 
{
  width: 100%;
  margin: 20vh 0;
  box-sizing: border-box;
  padding: 0 20%;
}

.fadeIn 
{
  animation: fadeIn 2s;
}
@keyframes fadeIn 
{
  0% 
  {
    opacity: 0;
    transform: translateY(100px);
  }
  100% 
  {
    opacity: 1;
    transform: translateY(0px);
  }
}
.btn {
    display:  inline-block;
    color: #fff;
    text-decoration:  none;
    background-color: #2196F3;
    border-radius: 5px;
    position:  relative;
    height: 50px;
    width: 50px;
    cursor:pointer;
}

.btn::before {
    content:  '';
    width: 20px;
    height: 20px;
    display:  block;
    border-top: solid 2px;
    border-right: solid 2px;
    transform: rotate(-45deg);
    position:  absolute;
    top: 10px;
    bottom:  0;
    left:  0;
    right:  0;
    margin:  auto;
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


