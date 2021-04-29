<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Spinner :loading="loadingStatus"></Spinner>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar";
import Spinner from "./components/Spinner";
import bus from "./utils/bus.js";
import axios from "axios";
import handleException from "./utils/handleException.js";

// async await 실행방법~ await은 Promise를 무조건 반환해야만 가능함!!
async function ysw() {
  try {
    var kdh = await nice();
    console.log(kdh);
  } catch (error) {
    handleException(error); //공통 에러처리를 위해 함수로 제작
  }
}



function nice() {
  return new Promise((resolve, reject) => {
    var kdh = axios.get("https://jsonplaceholder.typicode.com/todos/1"); //axios는 Promise를 반환하기 때문에 Promise를 리턴 따로 안해줘도 되긴함
    resolve(kdh);
  });
}

console.log(ysw().data);

export default {
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  created() {
    bus.$on("start:spinner", this.startSpinner);
    bus.$on("end:spinner", this.endSpinner);
    console.log(process.env.VUE_APP_TITLE)
  },
  beforeDestroy() {
    bus.$off("start:spinner", this.startSpinner);
    bus.$off("end:spinner", this.endSpinner);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;

  transition-property: opacity;

  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

body {
  padding: 0;
  margin: 0;
}

[v-cloak] {
  display: none;
}
</style>
