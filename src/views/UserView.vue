<template>
  <div>
      <UserProfile :info="userInfo">
        <div slot="username">{{userInfo.id}}</div>
        <template slot="time">{{'joined ' + userInfo.created}}, </template>  <!--태그없이 텍스트만 박힘 -->
        <span slot="karma">{{userInfo.karma}}</span>
      </UserProfile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
  computed : { // 정돈하기 좋음
    userInfo(){
      return this.$store.state.users;
    }
  },
  created(){
    console.log(this.$route.params.id);
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USERS', userName);
  },
  components:{
    UserProfile
  }
}
</script>

<style>

</style>