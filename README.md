Procket it's a promise based HTTP client for the browser and node.js for **GET** and **POST** requests.

---

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install widget.

```bash
npm install procket
```
---

## Usage

```javascript
import procket from 'procket';

procket.get('url')
procket.get('url', {'Content-Type': 'application/json' }) //with headers

procket.post('url', {name: "John"})
procket.post('url', {name: "John"}, {'Content-Type': 'application/json' }) //with headers
```


## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

Licensed under The MIT License (MIT)
For the full copyright and license information, please view the LICENSE.txt file.

**[MIT license](http://opensource.org/licenses/mit-license.php)**