import { FC } from "react";

const PromiseAll: FC = () => {
  // @ts-ignore
  function promiseAll(promises) {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      const results = [];
      let success = 0;

      // @ts-ignore
      for (let index in promises) {
        // @ts-ignore
        promises[index]
          // @ts-ignore
          .then((res) => {
            // @ts-ignore
            results[index] = res;
            success += 1;

            if (success === promises.length) {
              // @ts-ignore
              resolve(results);
            }
          })
          // @ts-ignore
          .catch((err) => {
            reject(err);
          });
      }
    });
  }

  // @ts-ignore
  const resolve = (value, timeout) =>
    new Promise((res) => setTimeout(res, timeout, value));
  // @ts-ignore
  const reject = (value, timeout) =>
    new Promise((_, rej) => setTimeout(rej, timeout, value));

  promiseAll([resolve(1, 200), resolve(2, 300), resolve(3, 100)]).then(
    console.log
  );

  promiseAll([reject(1, 100), reject(2, 500), reject(3, 1000)]).then(
    console.error
  );

  return (
    <div>
      Js Promise
      <div></div>
    </div>
  );
};

export { PromiseAll };
