import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import CreateListView from "../views/CreateListView.js";
import bus from '../utils/bus.js';
import  { store } from '../store/index.js'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
      name: "news",
    },
    {
      // path : url주소
      path: "/news",
      // component : url 주소로 갔을 때 표시될 컴포넌트
      component: NewsView,
      name: "news",
      beforeEnter:(to, from, next) => {  // 라우터 네비게이션 가드
        console.log('to',to);
        console.log('from',from);
        console.log('next',next);
        //next() 함수를 실행시켜야 페이지 이동됨 
        //인증정보같은 애들을 확인후 페이지 이동시킬때 조건주기 좋음

        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            console.log("fetched");
            bus.$emit("end:spinner");
            next();
          })
          .catch((error) => {
            console.log(error);
          });

      }
    },
    {
      path: "/ask",
      //component: AskView,
      component: CreateListView('AskView'),
      name: "ask",
    },
    {
      path: "/jobs",
      component: CreateListView('JobsView'), // high order component 
      //component: JobsView,
      name: "jobs",
    },
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
  ],
});
