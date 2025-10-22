[![LICENSE][license]][license-url]
[![GITHUB-VERSION][github-version]][github-version-url]
[![NPM-VERSION][npm-version]][npm-version-url]
![GITHUB-LAST-COMMIT][github-last-commit]
![NPM-LAST-UPDATE][npm-last-update]
![GITHUB-REPO-SIZE][github-repo-size]
![NPM-UNPACKED-SIZE][npm-unpacked-size]
![JSDELIVR-DOWNLOAD][jsdelivr-download]
![NPM-DOWNLOAD][npm-download]
![TOP-LANGUAGE][top-language]

[license]: https://img.shields.io/npm/l/%40nuka9510%2Fhttp-status-enum
[license-url]: https://github.com/nuka9510/http-status-enum/blob/main/LICENSE

[github-version]: https://img.shields.io/github/package-json/v/nuka9510/http-status-enum?logo=github
[github-version-url]: https://github.com/nuka9510/http-status-enum

[npm-version]: https://img.shields.io/npm/v/%40nuka9510%2Fhttp-status-enum?logo=npm
[npm-version-url]: https://www.npmjs.com/package/@nuka9510/http-status-enum

[github-last-commit]: https://img.shields.io/github/last-commit/nuka9510/http-status-enum?logo=github

[npm-last-update]: https://img.shields.io/npm/last-update/%40nuka9510%2Fhttp-status-enum?logo=npm

[github-repo-size]: https://img.shields.io/github/repo-size/nuka9510/http-status-enum?logo=github

[npm-unpacked-size]: https://img.shields.io/npm/unpacked-size/%40nuka9510%2Fhttp-status-enum?logo=npm

[jsdelivr-download]: https://img.shields.io/jsdelivr/npm/hm/%40nuka9510/http-status-enum?logo=jsdelivr

[npm-download]: https://img.shields.io/npm/dm/%40nuka9510%2Fhttp-status-enum?logo=npm

[top-language]: https://img.shields.io/github/languages/top/nuka9510/http-status-enum

## Install
```
npm i @nuka9510/http-status-enum
```
```
<script src="https://cdn.jsdelivr.net/npm/@nuka9510/http-status-enum/dist/js/index.min.js"> </script>
```
```
<script src="https://cdn.jsdelivr.net/npm/@nuka9510/http-status-enum@latest/dist/js/index.min.js"> </script>
```
```
<script src="https://cdn.jsdelivr.net/npm/@nuka9510/http-status-enum@<specific-version>/dist/js/index.min.js"> </script>
```
```
<script type="importmap">
  {
    "imports": { "@nuka9510/http-status-enum": "https://cdn.jsdelivr.net/npm/@nuka9510/http-status-enum/dist/esm/index.min.mjs" }
  }
</script>
```
```
<script type="importmap">
  {
    "imports": { "@nuka9510/http-status-enum": "https://cdn.jsdelivr.net/npm/@nuka9510/http-status-enum@latest/dist/esm/index.min.mjs" }
  }
</script>
```
```
<script type="importmap">
  {
    "imports": { "@nuka9510/http-status-enum": "https://cdn.jsdelivr.net/npm/@nuka9510/http-status-enum@<specific-version>/dist/esm/index.min.mjs" }
  }
</script>
```
## Usage
### js
```
httpStatusEnum.HttpStatus;
```
### mjs
```
import { HttpStatus } from "@nuka9510/http-status-enum";

HttpStatus;
```
### cjs
```
const httpStatusEnum = require('@nuka9510/http-status-enum');

httpStatusEnum.HttpStatus;
```
### example
```
example
├── data
│  └── case_1.json
├── js
│  └── case_1.mjs
└── view
   └── case_1.html
```
- `js/case_1.mjs`
```
import { HttpStatus } from "@nuka9510/http-status-enum";

const url = new URL('/example/data/case_1.json', location.origin);

fetch(url).then((res) => {
            /** @type {HttpStatus} */
            const httpStatus = HttpStatus.valueOf(res.status);

            if (httpStatus == HttpStatus.OK) {
              return res.json();
            } else {
              throw new Error(res.status);
            }
          })
          .then((json) => {
            console.debug(json);
          })
          .catch((e) => {
            /** @type {HttpStatus} */
            const httpStatus = HttpStatus.valueOf(parseInt(e.message));

            console.error(httpStatus.value, httpStatus.type.value);
          });
```
- `view/case_1.html`
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
</body>
<script type="importmap">
  {
    "imports": { "@nuka9510/http-status-enum": "https://cdn.jsdelivr.net/npm/@nuka9510/http-status-enum/dist/esm/index.min.mjs" }
  }
</script>
<script src="../js/case_1.mjs" type="module"></script>
</html>
```