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
</div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false
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
</style>


