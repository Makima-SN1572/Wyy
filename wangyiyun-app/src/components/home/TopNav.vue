<template>
  <div class="topNav">
    <div class="topleft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gengduo"></use>
      </svg>
    </div>
    <div class="topContent">
      <span class="active" @click="$router.push('/infoUser')">Mine</span>
      <span>Found</span>
      <span>Cloud</span>
      <span>Video</span>
    </div>
    <div class="topRight">
      <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>
<style lang="less" scoped>
.topNav {
  width: 100%;
  height: 1rem;
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: antiquewhite;
  .topContent {
    width: 65%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 0.36rem;
    .active {
      font-weight: 600;
    }
  }
}
</style>