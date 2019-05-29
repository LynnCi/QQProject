<template>
    <div class="search" @click="handleClick">
      <div class="search_content">
        <i class="iconfont icon-search"></i>&nbsp;搜索
      </div>
    </div>
</template>

<script>
    export default {
      name: "searchBar",
      methods:{
        handleClick(){
          this.$router.push({ path:'/search' })
        }
      }
    }
</script>

<style scoped lang="scss">
.search{
  padding:0.5rem;
  background-color:#fff;
  .search_content{
    text-align:center;
    line-height:2;
    font-size:0.5rem;
    border-radius:0.1rem;
    background-color:#eee;
    i{
      font-size:0.5rem;
      color:#999;
    }
  }
}
</style>
