<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div>
      <!-- <div>username : {{ info.id }}</div> -->
      <!-- <div class="time">time : {{ info.created }}</div> -->

      <slot name="username">
        <!-- 상위 컴포넌트에서 정의할 영역 -->
      </slot>

      <div class="time">
        <slot name="time">
          <!-- 상위 컴포넌트에서 정의할 영역 -->
        </slot>
      </div>
      <slot name="karma"></slot>
    </div>
  </div>
</template>

<script>
export default {
  //prop으로 받는 방법
  props: {
    info: {},
  },

  //computed 방식

  //   computed: {
  //     // 정돈하기 좋음
  //     userInfo() {
  //       return this.$store.state.users;
  //     },
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
  padding-right: 15px;
}
</style>
