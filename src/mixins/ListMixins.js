import bus from "../utils/bus.js";

export default {
  created() {
    bus.$emit("start:spinner");
    this.$store
      .dispatch("FETCH_LIST", this.$route.name)
      .then(() => {
        console.log("fetched");
        console.log(2);
        bus.$emit("end:spinner");
      })
      .catch((error) => {
        console.log(error);
      });
  },
  mounted() {
    bus.$emit("end:spinner");
  },
};

// hoc
// export default function create(){

// }
