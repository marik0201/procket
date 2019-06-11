Procket it's a promise based HTTP client for the browser and node.js for HTTP requests.

---

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install this package.

```bash
npm install procket
```

---

## Usage

```javascript
import procket from "procket";

const procket = new Procket();

procket.get("url");
procket.get("url", {
  header: { "Content-Type": "application/json" },
  timeout: 20 * 1000
}); //with headers and timeout

procket.post("url", { name: "John" });
procket.post(
  "url",
  { name: "John" },
  {
    header: { "Content-Type": "application/json" },
    timeout: 20 * 1000
  }
); //with headers and timeout

procket.put("url", { name: "John" });
procket.put(
  "url",
  { name: "John" },
  {
    header: { "Content-Type": "application/json" },
    timeout: 20 * 1000
  }
); //with headers and timeout

procket.delete("url", { name: "John" });
procket.delete(
  "url",
  { name: "John" },
  {
    header: { "Content-Type": "application/json" },
    timeout: 20 * 1000
  }
); //with headers and timeout
```

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

Licensed under The MIT License (MIT)
For the full copyright and license information, please view the LICENSE.txt file.

**[MIT license](http://opensource.org/licenses/mit-license.php)**
