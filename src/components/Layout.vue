<template>
  <div class="app_wrapper" :class="{hideSidebar:sidebar}">
    <!-- headtop -->
    <head-top @toggleSideBar="toggleSideBar"></head-top>
    <!-- sidebar -->
    <sidebar></sidebar>
    <!-- masking -->
    <masking></masking>
    <!-- footMenu -->
    <foot-menu :activeIndex="0"></foot-menu>

    <!-- main -->
    <div class="main_wrapper">
      <img src="../assets/logo.png" alt="">
      <h1 class="title">{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
  import headTop from './headTop/headTop';
  import sidebar from './sidebar/sidebar';
  import masking from './masking/masking';
  import footMenu from './footer/footer';

export default {
  name: 'Layout',
  components:{
    headTop,
    sidebar,
    masking,
    footMenu
  },
  data () {
    return {
      sidebar:false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    toggleSideBar(){
      this.sidebar = !this.sidebar;

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.app_wrapper{
  overflow-x:hidden;
  .header{
    transition:all .28s ease-out;
    transform:translateX(13rem);
  }
  .sidebar{
    width:13rem;
    transition:all .28s ease-out;
    transform:translate(0);
  }
  .main_wrapper{
    padding-top:1.95rem;
    transition:all .28s ease-out;
    transform:translateX(13rem);
  }

  &.hideSidebar{
    .header{
      transform:translateX(0);
    }
    .sidebar{
      transform:translateX(-13rem);
    }
    .masking{
      display: none;
    }
    .main_wrapper{
      transform:translateX(0);
    }
    .footer{
      transform:translateX(0);
    }
  }
}

</style>
