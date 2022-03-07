export default class HttpClient {
  defaultParams = {
    protocol: 'http',
    host: '',
    api: '',
    urlParams: '',
  };

  constructor(defaultParams = {}) {
    Object.assign(this.defaultParams, defaultParams);

    if (!this.defaultParams.host) {
      throw Error('The param "host" is not defined.');
    }
  }

  getAddress(url = '/') {
    const { protocol, host } = this.defaultParams;
    return `${protocol}://${host}${url}`;
  }

  async get(url, params) {
    const urlParams = new URLSearchParams(params).toString();

    const address = this.getAddress(
      this.defaultParams.api + url + (urlParams && '?' + urlParams)
    );
    
    console.log('address ----', address);
    const response = await fetch(address, { method: 'GET' });
    return await response.json();
  }
}
