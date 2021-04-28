import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl : 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리
function fetchNewsList(){
    //return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`); // es6 템플릿 스트링
}

function fetchJobsList(){
    return axios.get(`${config.baseUrl}jobs/1.json`); 
}

async function fetchAskList(){
    try {
        return await axios.get(`${config.baseUrl}ask/dd.json`);
    } catch (error) {
        console.log(error)
    }
}

function fetchUserInfo(userName){
    return axios.get(`${config.baseUrl}user/${userName}.json`);
}

function fetchItemInfo(id){
    return axios.get(`${config.baseUrl}item/${id}.json`);
}

async function fetchList(pageName){
    try {
        console.log('난 페치리스트')
        return await axios.get(`${config.baseUrl}${pageName}/1.json`);
    } catch (error) {
        console.log(error)
    }
}

export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList
}