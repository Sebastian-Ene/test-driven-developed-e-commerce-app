const Pool = require("pg").Pool;
// TODO: add configs in dotenv
module.exports = new Pool({
  user: "api",
  host: "localhost",
  database: "courses",
  password: "pass",
  port: 5432,
});
