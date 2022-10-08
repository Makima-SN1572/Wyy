//全局配置
import {
  createStore
} from 'vuex'
import {
  getMusicLyric
} from '@/request/api/item.js'
import {
  getPhoneLogin
} from '@/request/api/home.js'
export default createStore({
  state: {
    playList: [{
      al: {
        id: 146326515,
        name: "黑玫瑰",
        pic: 109951167535476560,
        picUrl: "https://p1.music.126.net/UotBrWI8HCps66VQ1PCfkQ==/109951167535476559.jpg",
        pic_str: "109951167535476559"
      },
      id: 1954957125,
      name: "黑玫瑰",
      ar: [{
        name: "林允丞"
      }]
    }],
    playListIndex: 0, //默认下标为0
    isbtnShow: true, //暂停按钮显示
    detailShow: false, //歌曲详情页显示
    lyricList: {}, //歌词部分
    currentTime: 0, //当前时间
    duration: 0, //歌曲总时长
    isLogin: false, //判断是否登录,默认为未登录
    isFooterMusic: true, //是否显示底部组件
    token:"",
    user:{}//用户信息
  },
  mutations: {
    updateIsbtnShow: function (state, value) {
      state.isbtnShow = value
    },
    updatePlayList: function (state, value) {
      state.playList = value
    },
    pushPlayList: function (state, value) {
      state.playList.push(value)
    },
    updatePlayListIndex: function (state, value) {
      state.playListIndex = value
    },
    updateDetailShow: function (state) {
      state.detailShow = !state.detailShow
    },
    updateLyricList: function (state, value) {
      state.lyricList = value
    },
    updateCurrentTime: function (state, value) {
      //console.log(state.currentTime);
      state.currentTime = value
    },
    updateDuration: function (state, value) {
      state.duration = value
    },
    updateisLogin: function (state, value) {
      state.isLogin = true //登陆成功后返回true保持登录状态
    },
    updateToken:function(state, value){
      state.token = value;
      localStorage.setItem('token', state.token);
    },
    updateUser:function(state, value){
      state.user = value;
    },
  },
  actions: {
    getLyric: async function (context, value) {
      let res = await getMusicLyric(value)
      console.log(res);
      context.commit('updateLyricList', res.data.lrc)
    },
    getLogin: async function (context, value) {
      let res = await getPhoneLogin(value)
      console.log(res);
      return res
    },
  },
  modules: {}
})