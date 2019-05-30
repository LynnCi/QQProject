<template>
    <div class="alet_container">
      <section class="tip_text_container">
        <div class="tip_icon">
          <span></span>
          <span></span>
        </div>
        <p class="tip_text">{{ alertText }}</p>
        <div class="confrim" @click="closseTip">确认</div>
      </section>
    </div>
</template>

<script>
    export default {
        name: "alertTip"
    }
</script>

<style lang="scss" scoped>
.alet_container{
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:200;
  background-color:rgba(0,0,0,.5);
}
  .tip_text_container{
    position:absolute;
    top:50%;
    left:50%;
    margin-top:-6rem;
    margin-left:-6rem;
    width:12rem;
    border:1px;
    border-radius:0.25rem;
    padding-top:.6rem;
    background-color:rgba(255,255,255,1);
    animation:tipMove .4s;
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    .tip_icon{
      width:3rem;
      height:3rem;
      border:0.15rem solid #f8cb86;
      border-radius:50%;
      display:flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      span:nth-of-type(1){
        width: 0.12rem;
        height: 1.5rem;
        background-color: #f8cb86;
      }
      span:nth-of-type(2){
        width: 0.2rem;
        height: 0.2rem;
        border:1px;
        border-radius:50%;
        background-color: #f8cb86;
        margin-top:.2rem;
       }
    }
    .tip_text{
      font-size: 0.7rem;
      color: #333;
      line-height: .9rem;
      text-align: center;
      margin-top: .8rem;
      padding: 0 .4rem;
    }
    .confrim{
      font-size: 0.8rem;
      color: #fff;
      font-weight: bold;
      margin-top: .8rem;
      background-color: #4cd964;
      width: 100%;
      text-align: center;
      line-height: 1.8rem;
      border: 1px;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;

    }
  }
</style>
