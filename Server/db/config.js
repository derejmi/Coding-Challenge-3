const { Pool } = require("pg");

const pool = new Pool({ database: "blogsite" });

function run(q) {
  return pool.query(q);
}

module.exports = { run };
