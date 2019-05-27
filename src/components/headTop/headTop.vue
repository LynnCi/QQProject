<template>
    <header id="head" class="header">
      <span class="head_toggle" @click="toggleSideBar">
        <img class="top_image" src="https://cn.bing.com/az/hprichbg/rb/GreatSaltLake_ZH-CN12553220159_1920x1080.jpg" alt="">
      </span>
      <span class="head_logo">logo</span>
</header>
</template>

<script>
    export default {
        name: "headTop",
        data () {
          return {
            sidebar:false,
          }
        },
        methods: {
          toggleSideBar() {
            this.$emit('toggleSideBar');
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
  .head_logo{
    font-size:1rem;
    line-height:1.95rem;
    color:#fff;
    display: inline-block;
  }
}
</style>
