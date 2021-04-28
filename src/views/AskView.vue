<template>
  <div>
    <ListItem></ListItem>
    <!-- <div v-for="item in fetchItemAsk">{{item.title}}</div> -->
    <!-- mapState 사용한 2번째 방법 <div v-for="item in fetchedAsk">{{item.title}}</div> -->

    <!-- 4번방법으로 뿌려봄 -->
    <!-- <p v-for="item in fetchItemAsk">
          <router-link v-bind:to="`/item/${item.id}`">
            {{item.title}}
          </router-link>
          <small>
            {{item.time_ago}}, {{item.user}}
          </small>
      </p> -->
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import ListItem from "../components/ListItem.vue";
import bus from "../utils/bus.js";

export default {
  computed: {
    //4번방법 배열표기법으로 바로 사용도 가능
    //...mapGetters(["fetchItemAsk"]),
    //3번방법, 객체 키에 담아서 사용
    // ...mapGetters({
    //   fetchItemAsk : 'fetchedAsk'
    // })
    //2번방법
    // ...mapState({
    //   fetchedAsk : state => state.asks
    // })
    // 1번 방법
    // ask(){
    //   return this.$store.state.asks
    // }
  },
  data() {
    return {
      //asks: []
    };
  },
  created() {
    // bus.$emit("start:spinner");
    // setTimeout(() => {
    //   this.$store
    //     .dispatch("FETCH_ASKS")
    //     .then(() => {
    //       console.log("fetched");
    //       bus.$emit("end:spinner");
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }, 1000);
  },
  beforeMount() {
    //this.$store.dispatch("FETCH_ASKS");
    // var vm = this; // 화살표 함수 아니면 이렇게 사용
    // fetchAskList()
    //   .then(response => {
    //    console.log(response);
    //    this.asks = response.data;
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  },

  components: {
    ListItem,
  },
};
</script>

<style></style>
