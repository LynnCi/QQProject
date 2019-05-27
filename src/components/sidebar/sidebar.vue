<template>
  <div class="sidebar">
    <div class="top">
      <div class="top_info">
        <img src="https://cn.bing.com/az/hprichbg/rb/GreatSaltLake_ZH-CN12553220159_1920x1080.jpg" class="top_image" alt="">
        <span class="top_name">LinnCi</span>
        <p class="top_sign">there's nothing u can't face!</p>
      </div>
    </div>
    <div class="menu">
      <ul>
        <li>
          <i class="iconfont icon-vip"></i>超级会员
        </li>
        <li>
          <i class="iconfont icon-wallet"></i>钱包
        </li>
        <li>
          <i class="iconfont icon-grab"></i>个性装扮
        </li>
        <li>
          <i class="iconfont icon-favor"></i>我的收藏
        </li>
        <li>
          <i class="iconfont icon-photo"></i>我的相册
        </li>
        <li>
          <i class="iconfont icon-fiel"></i>我的文件
        </li>

      </ul>
    </div>
    <div class="tool">
      <span @click="handleSidebar('setting')">
        <i class="iconfont icon-setting"></i>设置
      </span>
      <span @click="handleSidebar('login')">
        <i class="iconfont icon-night"></i>夜间
      </span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "sidebar",
        methods:{
          handleSidebar(name){
            this.$router.push({ path:'/'+name });
          }
        }
    }
</script>

<style scoped lang="scss">
  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    color: #999;
    z-index: 110;
    background-color: #fff;
    i {
      margin-right: 0.5rem;
    }
    .top {
      position: relative;
      width: 100%;
      height: 30%;
      background-color: #333;
      background-image: url(https://cn.bing.com/az/hprichbg/rb/CoastalBeech_ZH-CN8739604309_1920x1080.jpg);
      background-position: 50% 50%;
      background-size: cover;
      .top_info {
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 0 0.8rem 0.6rem;
        width: 100%;
        .top_image {
          width: 1.8rem;
          height: 1.8rem;
          border-radius: 1.8rem;
          border: 0.12rem solid #fff;
        }
        .top_name {
          padding-left: 0.4rem;
          vertical-align: top;
          line-height: 2.2rem;
          font-size: 1.2rem;
          font-weight: 600;
          color: #fff;
        }
        .top_sign {
          padding: 0.2rem 0;
          font-size: 0.6rem;
          color: #fff;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .menu {
      width: 100%;
      height: 70%;
      padding: 0.8rem 0 2rem 0;
      ul {
        padding: 0 0.8rem;
        li {
          height: 1.85rem;
          line-height: 1.85rem;
        }
      }
    }
    .tool {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: #fff;
      line-height: 2rem;
      span {
        display: inline-block;
        padding: 0 0.8rem;
        i {
          color: #666;
        }
      }
    }
  }

</style>
