<template>
  <div>
    <section>
      <!-- 질문영역 -->
      <!-- <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div>
          <router-link v-bind:to="`/user/${fetchedItem.user}`">{{
            fetchedItem.user
          }}</router-link>
          <div class="time">
            {{ fetchedItem.time_ago }}
          </div>
        </div>
      </div> -->
      <UserProfile :info="fetchedItem">
        <!-- <div slot="username">{{ fetchedItem.user }}</div> -->
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">{{
          fetchedItem.user
        }}</router-link>

        <template slot="time">
          {{'posted ' + fetchedItem.time_ago }}
        </template>
      </UserProfile>
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex"; // 맵게터 헬퍼함수
import UserProfile from "../components/UserProfile.vue";

export default {
  computed: {
    ...mapGetters(["fetchedItem"]),
  },
  created() {
    const userId = this.$route.params.id;
    console.log(this.$route.params.id);
    this.$store.dispatch("FETCH_ITEMS", userId);
  },
  components: {
    UserProfile,
  },
};
</script>

<style>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5em;
}
.fa-user {
  font-size: 2.5rem;
}

.time {
  padding-top: 10px;
}
</style>
