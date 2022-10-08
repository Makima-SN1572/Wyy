<template>
  <div class="searchTop">
    <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
      <use xlink:href="#icon-gonggong-zuojiantou"></use>
    </svg>
    <input
      type="text"
      placeholder="鸡你太美"
      v-model="searchKey"
      @keydown.enter="enterKey"
    />
  </div>
  <div class="searchHistory">
    <span class="searchSpan">记录</span>
    <!-- 循环每个span 把item拿出来-->
    <span
      v-for="item in keyWorldList"
      :key="item"
      class="spanKey"
      @click="searchHistory(item)"
    >
      {{ item }}</span
    >
    <svg class="icon" aria-hidden="true" @click="delHistory">
      <use xlink:href="#icon-shanchusekuai"></use>
    </svg>
  </div>
  <div class="itemList">
        <div class="item" v-for="(item, i) in searchList" :key="i">
          <div class="itemLeft" @click="updateIndex(item)">
            <span class="leftSpan">{{ i + 1 }}</span>
            <div>
              <p>{{ item.name }}</p>
              <span v-for="(item1, index) in item.artists" :key="index">{{
                item1.name
              }}</span>
            </div>
          </div>
          <div class="itemRight">
            <svg class="icon bofang" aria-hidden="true" v-if='item.mvid !=0'>
              <use xlink:href="#icon-shipin"></use>
            </svg>
            <svg class="icon liebiao" aria-hidden="true">
              <use xlink:href="#icon-liebiao2"></use>
            </svg>
          </div>
        </div>
      </div>
</template>
<script>
import { getSearchMusic } from "@/request/api/home.js";
import ItemMusicListVue from '../components/item/ItemMusicList.vue';
export default {
  data() {
    return {
      keyWorldList: [],
      searchKey: "",
      searchList: [],
    };
  },
  mounted() {
    this.keyWorldList = JSON.parse(localStorage.getItem("keyWorldList"))
      ? JSON.parse(localStorage.getItem("keyWorldList"))
      : [];
  },
  methods: {
    enterKey: async function () {
      if (this.searchKey != "") {
        this.keyWorldList.unshift(this.searchKey);
        //去重 set
        this.keyWorldList = [...new Set(this.keyWorldList)];
        //console.log([...new Set(this.keyWorldList)]);
        //固定长度
        if (this.keyWorldList.length > 10) {
          this.keyWorldList.splice(this.keyWorldList.length - 1);
        }
        localStorage.setItem("keyWorldList", JSON.stringify(this.keyWorldList));
        let res = await getSearchMusic(this.searchKey);
        console.log(res);
        this.searchList = res.data.result.songs;
        this.searchKey = "";
      }
    },
    delHistory: function () {
      localStorage.removeItem("keyWorldList");
      this.keyWorldList = [];
    },
    searchHistory: async function (item) {
      let res = await getSearchMusic(item);
      console.log(res);
      this.searchList = res.data.result.songs;
    },
    updateIndex: function (item) {
      item.al=item.album
      item.al.picUrl=item.album.artist.img1v1Url
      this.$store.commit("pushPlayList",item)
      this.$store.commit("updatePlayListIndex",this.$store.state.playList.length-1)
      
    },
  },
};
</script>
<style lang="less" scoped>
.searchTop {
  width: 100%;
  height: 1rem;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  input {
    margin-left: 0.2rem;
    border: none;
    border-bottom: 1px solid #999;
    width: 90%;
    padding: 0.1rem;
  }
}
.searchHistory {
  position: relative;
  width: 100%;
  padding: 0.2rem;
  .searchSpan {
    font-weight: 600;
  }
  .spanKey {
    padding: 0.1rem 0.2rem;
    background-color: antiquewhite;
    border-radius: 0.4rem;
    margin: 0.1rem 0.2rem;
    display: inline-block;
  }
  .icon {
    width: 0.4rem;
    height: 0.5rem;
    position: absolute;
    right: 0.2rem;
  }
}
.itemList {
      width: 100%;
      padding: .2rem;
      .item {
        width: 100%;
        height: 1.4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .itemLeft {
          width: 85%;
          height: 100%;
          display: flex;
          align-items: center;
          .leftSpan {
            display: inline-block;
            width: 0.2rem;
            text-align: center;
          }
          div {
            p {
              width: 4.54rem;
              height: .4rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-weight: 700;
            }
            span{
              font-weight: 400;
              font-size: .24rem;
              color: #999;
            }
            margin-left: 0.3rem;
          }
        }
        .itemRight{
          width: 20%;
          height: 100%;
          display: flex;
          align-items: center;
          position: relative;
          .icon{
            fill: #999;
          }
           .bofang{
              position: absolute;
              left: 0;
            }
           .liebiao{
              position: absolute;
              right: 0;
            }
        }
      }
    }
</style>