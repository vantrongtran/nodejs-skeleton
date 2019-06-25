const fs = require("fs");

module.exports = {
  development: {
    username: "root",
    password: "111111",
    database: "node_skeleton_db_development",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  },
  test: {
    username: "root",
    password: "111111",
    database: "node_skeleton_db_test",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
    // dialectOptions: {
    //   ssl: {
    //     ca: fs.readFileSync(__dirname + "/mysql-ca-master.crt")
    //   }
    // }
  }
};
