const _ = require("lodash");

(async () => {
  const result = await require("./function")();
  console.log(_.get(result, "markdown.content"));
})();
