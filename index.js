class Procket {
  constructor() {
    this.config = {
      timeout: 10 * 1000,
      header: {
        "Content-type": "application/json"
      }
    };
  }

  async sendRequest(url, method, body, config) {
    return new Promise((resolve, reject) => {
      let requestConfig = { ...this.config, ...config };
      const xhr = new XMLHttpRequest();

      xhr.open(method, url, true);

      setTimeout(() => {
        reject(new Error("Time is out"));
      }, requestConfig.timeout);

      for (const key in requestConfig.header) {
        xhr.setRequestHeader(key, requestConfig.header[key]);
      }

      xhr.onload = function() {
        if (this.status >= 200 && this.status < 400) {
          resolve(JSON.parse(this.response));
        } else {
          const error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };

      xhr.onerror = function() {
        reject(new Error("Network Error"));
      };

      xhr.send(JSON.stringify(body));
    });
  }

  async get(url, config) {
    return this.sendRequest(url, "GET", config);
  }

  async post(url, body, config) {
    return this.sendRequest(url, "POST", body, config);
  }

  async delete(url, body, config) {
    return sendRequest(url, "DELETE", body, config);
  }

  async put(url, body, config) {
    return sendRequest(url, "PUT", body, config);
  }
}

module.exports = Procket;
