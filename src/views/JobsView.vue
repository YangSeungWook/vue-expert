<template>
  <div>
    <ListItem></ListItem>
    <!-- <p v-for="item in this.$store.state.jobs">
          <a :href="item.url">
            {{item.title}}
          </a>
          <small>
            {{item.time_ago}}, {{item.domain}}
          </small>
      </p> -->
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import bus from "../utils/bus.js";

export default {
  data() {
    return {
      //jobs: []
    };
  },
  created() {
    // var vm = this; // 화살표 함수 아니면 이렇게 사용
    // fetchJobsList()
    //   .then(response => this.jobs = response.data)
    //   .catch(error => console.log(error));


    // bus.$emit("start:spinner");
    // setTimeout(() => {
    //   this.$store
    //     .dispatch("FETCH_JOBS")
    //     .then(() => {
    //       console.log("fetched");
    //       bus.$emit("end:spinner");
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }, 1000);
  },
  components: {
    ListItem,
  },
};
</script>

<style></style>
