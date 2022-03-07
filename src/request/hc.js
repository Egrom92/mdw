import HttpClient from "./HttpClient";

const hc = new HttpClient({
  protocol: 'https',
  host: 'md.egliens.ru/',
  api: 'api'
});

export default hc;
