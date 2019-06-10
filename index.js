class Procket {
  async get(url, header) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      header && xhr.setRequestHeader(header);
      xhr.open("GET", url, true);

      xhr.onload = function() {
        if (this.status.toString()[0] == "2") {
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

      xhr.send();
    });
  }

  async post(url, body, header) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      header && xhr.setRequestHeader(header);
      xhr.open("POST", url, true);

      xhr.onload = function() {
        if (this.status.toString()[0] == "2") {
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

      xhr.send(body);
    });
  }
}

const procket = new Procket();

module.exports = procket;