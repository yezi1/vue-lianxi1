<template>
  <div id="app">
    <router-view/>
    <mt-tabbar>
      <mt-tab-item 
        v-for="(menu, index) in menuText" 
        :key="menu" 
        @click.native="menuTab(index)"
        :class="{'menuOn' : eq == index }"
      >
          <img slot="icon" :src="[ eq == index ? menuIconOn[index] : menuIconOff[index] ]" >
          <router-link :to="navUrl[index]" tag="div">{{ menu }}</router-link>
      </mt-tab-item>
    </mt-tabbar>
    <star 
      v-for="grade in starGradeArr" 
      :key="grade" 
      :grade="grade"
    >
    </star>
  </div>
</template>

<script>
import star from "./components/publicModule/star";//引入星级评分组件

export default {
  name: "App",
  data() {
    return {
      starGradeArr: [1,7,9,4],//星级评分数组
      menuText: ["热映", "找片", "我的"], //菜单列表
      menuIconOff: [
        require("./assets/img/bottomNav/meOff.svg"),
        require("./assets/img/bottomNav/seeOff.svg"),
        require("./assets/img/bottomNav/hotOff.svg")
      ], //未选中ICON路径
      menuIconOn: [
        require("./assets/img/bottomNav/meOn.svg"),
        require("./assets/img/bottomNav/seeOn.svg"),
        require("./assets/img/bottomNav/hotOn.svg")
      ], //已选中ICON路径
      eq: "", //当前选中菜单的下标
      navUrl: ["/star", "/seek", "/me"]
    };
  },

  methods: {
    //获取当前选中下标
    menuTab(index) {
      this.eq = index;
    }
  },
  created() {

  },
  components: {
    star
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style-type: none;
}
.mint-tabbar > .mint-tab-item.is-selected {
  color: #bfbfbf;
}
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: #fff;
}
.mint-tabbar {
  box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.7);
  position: fixed;
}
.menuOn {
  color: #515151 !important;
}
</style>
