import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchItemInfo,
  fetchList,
} from "../api/index.js";

export default {
  // FETCH_NEWS(context) {
  //   return fetchNewsList()
  //     .then((response) => {
  //       console.log(response.data);
  //       context.commit("SET_NEWS", response.data);
        
  //       return response;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
  //  async 방식
  async FETCH_NEWS(context) {
    const response = await fetchNewsList();
    context.commit("SET_NEWS", response.data);
    return response;
  },
  // FETCH_JOBS({ commit }) {
  //   // commit 옵션을 인자로 받아서 아래처럼 바로실행도 가능함
  //   return fetchJobsList()
  //     .then((response) => {
  //       console.log(response.data);
  //       commit("SET_JOBS", response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },

  // async 방식
  async FETCH_JOBS({ commit }) {
    try{
      const response = await fetchJobsList();
      commit("SET_JOBS", response.data);
      return response;
    }catch(error){
      console.log(error);
    }
  },
  FETCH_ASKS({ commit }) { // try catch는 api단에서 하자~ 좀 깔끔해진다
    return fetchAskList()
      .then((response) => {
        console.log(response.data);
        commit("SET_ASKS", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_USERS({ commit }, name) {
    //인자로 유저네임 받음
    return fetchUserInfo(name)
      .then(({ data }) => {
        console.log(data);
        commit("SET_USERS", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_ITEMS({ commit }, id) {
    //인자로 유저네임 받음
    return fetchItemInfo(id)
      .then(({ data }) => {
        console.log(data);
        commit("SET_ITEMS", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  async FETCH_LIST({commit}, pageName){
    const response = await fetchList(pageName);
    console.log('난 액션')
    commit('SET_LIST',response.data);
    return response;  // 리턴을 해야 then을 사용가능해서 비동기 순서가 맞게됨
  }
};
