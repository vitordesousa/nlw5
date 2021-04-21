import axios from 'axios';
/*  npm install -g json-server 
serve para usar json e testar API fake
*/
const api = axios.create({
	baseURL : 'http://192.168.254.109:3333'
});

export default api;