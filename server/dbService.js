const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

let instance = null;

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT
});

connection.connect(err => {
  if (err) {
    console.log(err.message);
  }
  console.log(" DB " + connection.state);
});

class DbService {
  static getDbServiceInstance() {
    return instance ? instance : new DbService();
  }

  async getAllData() {
    try {
      const response = await new Promise(
        (resolve, reject) => {
          const query = "SELECT * FROM people;";
          connection.query(query, (err, results) => {
            if (err) reject(new Error(err.message));
            resolve(results);
          });
        }
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = DbService;
