const axios = require('axios');
const querystring = require('querystring');

class Postman {
  config = {
    apiKey: null,
    workspaceId: null,
    apiBaseUrl: 'https://api.getpostman.com'
  };

  constructor (apiKey, workspaceId = null) {
    this.config.apiKey = apiKey;
    this.config.workspaceId = workspaceId;
  }

  async request(method = 'get', path, params = null, data = null) {
    try {
      const options = {
        method,
        url: `${this.config.apiBaseUrl}/${path}?${querystring.stringify(params)}`,
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': this.config.apiKey
        },
        data: JSON.stringify(data)
      };

      const result = await axios(options);
      return result.data;
    } catch (err) {
      throw new Error(`${err.response.status} (${err.response.statusText}) while performing a ${method} on ${path}`);
    }
  }

  async get(path, params) {
    return await this.request('get', path, params);
  }
}
module.exports = Postman;