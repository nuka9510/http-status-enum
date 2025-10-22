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