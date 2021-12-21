// Create db variable and get database connection here ...
// Get QueryTypes from sequelize
const db = require("../database/connection");

// Create controller add User here ...
exports.addUser = async (req, res) => {
  try {
    const { email, password, status } = req.body;
    const query = `INSERT INTO users (email, password, status) VALUES ('${email}', '${password}', '${status}')`;
    await db.sequelize.query(query);
    res.send({ status: "success", message: "add user finished", query });
  } catch (error) {
    res.send({ status: "failed", message: "server error" });
  }
};

// Create controller get Users here ...

// Create controller get User by received id here ...

// Create controller update User here ...

// Create controller delete User here ...
