<template>
  <div class="app_wrapper" :class="{hideSidebar:sidebar}">
    <!-- sidebar -->
    <sidebar></sidebar>
    <!-- masking -->
    <masking></masking>
    <!-- backToTop -->
    <back-to-top></back-to-top>
    <!-- main -->
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import sidebar from './sidebar/sidebar';
  import masking from './masking/masking';
  import backToTop from './common/backToTop';

export default {
  name: 'Layout',
  components:{
    sidebar,
    masking,
    backToTop
  },
  computed:{
    ...mapGetters([
      'sidebar',
    ])
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
  .footer{
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
