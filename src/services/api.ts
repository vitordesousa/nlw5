import axios from 'axios';
/*  npm install -g json-server 
	serve para usar json e testar API fake

	configuração do json-server no cmd:
	rodar isso: json-server ./src/services/server.json --host 192.168.254.109 --port 3333

	se funcionar, irá aparecer os ips e identificação das rotas 

*/
const api = axios.create({
	baseURL : 'http://192.168.254.109:3333'
});

export default api;