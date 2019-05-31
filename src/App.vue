<template>
  <div id="app">
    <svg-icon></svg-icon>
    <router-view/>
  </div>
</template>

<script>
  import svgIcon from '@/components/common/svg'
export default {
  name: 'App',
  components:{
    svgIcon
  }
}
</script>

<style lang="scss">

</style>
