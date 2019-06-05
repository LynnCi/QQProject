<template>
    <header id="head" class="header">
      <span v-if="toggleBtn!=false" class="head_toggle" @click="toggleSideBar">
        <img class="top_image" src="https://cn.bing.com/az/hprichbg/rb/GreatSaltLake_ZH-CN12553220159_1920x1080.jpg" alt="">
      </span>
      <slot name="head_text"></slot>
      <slot name="head_subtext"></slot>
      <slot name="head_btn"></slot>
      <slot name="head_back"></slot>
      <slot name="head_input"></slot>
    </header>
</template>

<script>
    export default {
        name: "headTop",
        props:['toggleBtn','signUp','headTitle','goBack'],
        methods: {
          toggleSideBar() {
            this.$store.dispatch('ToggleSideBar');
          }
        }
    }
</script>

<style scoped lang="scss">
.header{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:1.95rem;
  background-color:#3190e8;
  background: -webkit-linear-gradient(right top, #61b8f8 , #5e8bf7); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(bottom left, #61b8f8, #5e8bf7); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(bottom left, #61b8f8, #5e8bf7); /* Firefox 3.6 - 15 */
  background: linear-gradient(to bottom left, #61b8f8 , #5e8bf7); /* 标准的语法 */
  text-align: center;
  z-index:10;
  .head_toggle{
    position:absolute;
    left:0.5rem;
    i{
      font-size:1rem;
      line-height:1.95rem;
    }
    img{
      width:1.5rem;
      height:1.5rem;
      border-radius:1rem;
      margin-top:0.2rem;
    }
  }
  /*文字*/
  .head_text {
    line-height: 1.95rem;
    font-size: 0.7rem;
    color: #fff;
    display: inline-block;
    &.subtext {
      line-height: 1.5rem;
    }
  }
  .head_subtext {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-size: 0.3rem;
    line-height: 1rem;
    color: #fff;
  }
  /*右侧按钮*/
  .head_btn {
    position: absolute;
    right:0.5rem;
    line-height: 1.95rem;
    font-size: 0.7rem;
    color: #fff;
    a {
      color: #fff;
    }
    i {
      line-height: 1.95rem;
      font-size: 0.7rem;
      color: #fff;
    }
  }
  /*返回按钮*/
  .head_back {
    position: absolute;
    left:0.5rem;
    line-height: 1.95rem;
    font-size: 0.7rem;
    color: #fff;
    a {
      color: #fff ;
    }
    i {
      line-height: 1.95rem;
      font-size: 0.7rem;
      color: #fff;
    }
  }
  .search {
    padding: 0.5rem 2.4rem 0.5rem 0.5rem;

    .search_content {
      position: relative;
      padding: 0 0.3rem;
      text-align: left;
      font-size: 0.5rem;
      line-height: 2;
      border-radius: 0.1rem;
      color: #999;
      background-color: #eee;

      i {
        position: absolute;
        left: 0.3rem;
        font-size: 0.5rem;
        color: #999;
        margin-right: 0.43em;
      }

      input {
        background-color: transparent;
        width: 100%;
        padding-left: 0.8rem;
        line-height: 1rem;
        font-size: 0.5rem;
      }
    }
  }
}
</style>
