<template>
  <div class="iconList">
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xihuan"></use>
      </svg>
      <span>我的最爱</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-a-tupianyihuifu-10"></use>
      </svg>
      <span>私人收音</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
      <span>我的歌单</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paihangbanggequ"></use>
      </svg>
      <span>最热排行</span>
    </div>
  </div>
</template>

<script lang="less" scoped>
    //弹性布局,写样式
    .iconList{
        width: 100%;
        height: 2rem;
        margin-top: .2rem;
        display: flex;
        justify-content: space-around;
        align-content: center;
        .iconItem{
            width: 25%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            .icon{
                width: 1rem;
                height: 1rem;
            }
        }
    }
</script>