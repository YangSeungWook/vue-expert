<template>
  <div>
    <ul class="news-list">
      <li v-for="item in listItems" class="post">
        <span class="points"> {{ item.points }}</span>
        <div>
          <!-- 타이틀 영역  템플릿으로 분기처리 가능-->
          <template v-if="item.domain">
            <a v-bind:href="item.url">
              {{ item.title }}
            </a>
          </template>
          <template v-else>
            <router-link v-bind:to="`/item/${item.id}`">
              {{ item.title }}
            </router-link>
          </template>

          <small class="etc">
            {{ item.time_ago }} by

            <!-- 태그에 직접 분기처리 방법 -->
            <router-link v-if="item.user" v-bind:to="`/user/${item.user}`"
              >{{ item.user }}
            </router-link>

            <a :href="item.domain" v-else>
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //users: []
    };
  },
  computed: {
    listItems() {
      return this.$store.state.list;

      // const name = this.$route.name;
      // if (name === "news") {
      //   return this.$store.state.news;
      // } else if (name === "ask") {
      //   return this.$store.state.asks;
      // } else if (name === "jobs") {
      //   return this.$store.state.jobs;
      // }
    },
  },
  created() {
    //this.$store.dispatch("FETCH_NEWS");

    //var vm = this; // 화살표 함수 아니면 이렇게 사용
    // fetchNewsList()
    //   .then(function(response){
    //     console.log('호출 후 :', this) //비동기에서의 this는 undefined
    //     vm.users = response.data;
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  },
};
</script>

<style scoped>
.news-list {
  padding: 0;
}
.post {
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #eee;
  align-items: center;
}
.post .points {
  width: 100px;
  text-align: center;
  color: green;
}
.post .etc {
  display: block;
}
</style>
