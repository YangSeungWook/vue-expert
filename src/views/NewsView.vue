<template>
  <div>
    <ListItem></ListItem>

    <!-- <p v-for="item in this.$store.state.news">
           <a v-bind:href="item.url">
             {{item.title}}
            </a>
            <small>
              {{item.time_ago}} by 
              <router-link v-bind:to="`/user/${item.user}`">{{item.user}}</router-link>
            </small>
      </p> -->
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import bus from "../utils/bus.js";
import ListMixin from "../mixins/ListMixins";

export default {
  components: {
    ListItem,
  },
  //mixins: [ListMixin],
  created() {
    // bus.$emit("start:spinner");
    // setTimeout(() => {
    //   this.$store
    //     .dispatch("FETCH_NEWS")
    //     .then(() => {
    //       console.log("fetched");
    //       bus.$emit("end:spinner");
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }, 1000);
  },
  mounted(){
  bus.$emit("end:spinner");   
  }
};
</script>
