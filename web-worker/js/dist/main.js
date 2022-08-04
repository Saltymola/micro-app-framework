!(function () {
  "use strict";
  onmessage = function (t) {
    if ("total" === t.data) {
      let t = 1;
      (t = (function (t) {
        for (let e = 0; e < 5e9; e++) t += e;
        return t;
      })(1)),
        console.log("Worker: Posting message back to main script"),
        postMessage(t);
    }
  };
})();
