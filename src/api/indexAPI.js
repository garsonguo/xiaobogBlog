import axios from 'axios'

let base = 'https://www.easy-mock.com/mock/5976fdcca1d30433d83ceb63/xiaobogAdmin/';

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };