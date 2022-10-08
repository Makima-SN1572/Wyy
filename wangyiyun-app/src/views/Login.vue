<template>
  <div class="login">
    <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
      <use xlink:href="#icon-gonggong-zuojiantou"></use>
    </svg>
    <div class="loginTop">Login</div>
    <div class="loginContent">
      <input
        type="text"
        name="phone"
        class="phone"
        v-model="phone"
        placeholder="账号"
      />
      <input
        type="password"
        name="password"
        class="password"
        v-model="password"
        placeholder="密码"
      />
      <button class="btn" @click="Login">登录</button>
    </div>
  </div>
</template>
<script>
//引入
import { getLoginUser } from "@/request/api/home.js";
export default {
  //通过双向绑定获取输入框的值 v-model
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
    Login: async function () {
      let res = await this.$store.dispatch("getLogin", {
        phone: this.phone,
        password: this.password,
      });
      console.log(res);
      if (res.data.code === 200) {
        //返回code为200,说明登录成功,可以进行个人页面的跳转
        this.$store.commit("updateisLogin", true);
        this.$store.commit("updateToken", res.data.token);
        let result = await getLoginUser(res.data.account.id);
        console.log(result);
        this.$store.commit("updateUser", result);
        this.$router.push("/infoUser");
      } else {
        alert("请输入正确的账号或密码");
        this.password = "";
      }
    },
  },
};
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 13.34rem;
  padding: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: wheat;
  .icon{
    position: absolute;
    left: 0;
  }
  .loginTop {
    margin-top: 1rem;
    font-size: 1rem;
    color: #fff;
  }
  .loginContent {
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 2rem;
    .phone,
    .password {
      background-color: wheat;
      width: 5rem;
      height: 1rem;
      border: none;
      border-bottom: 0.02rem solid #999;
    }
    .btn {
      width: 3rem;
      height: 1rem;
      border: none;
      background-color: skyblue;
      border-radius: 0.16rem;
      font-size: 0.56rem;
      font-weight: 600;
      color: #fff;
    }
  }
}
</style>