<template>
  <div class="infoUserTop">
    <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
      <use xlink:href="#icon-gonggong-zuojiantou"></use>
    </svg>
    <img :src="user.data.profile.avatarUrl" alt="" class="profileimg" />
    <div class="name">{{ user.data.profile.nickname }}</div>
  </div>
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
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
  },
  mounted() {
    console.log(this.user);
  },
};
</script>
<style lang="less" scoped>
.infoUserTop {
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .profileimg {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
  .name {
    font-size: 0.4rem;
    font-weight: 600;
  }
  .icon{
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>