if (process.env.NODE_ENV === "production") {
  module.exports = require("./store.config.prod");
} else {
  module.exports = require("./store.config.dev");
}
