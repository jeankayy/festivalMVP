const pool = require('./db.js');

const getInitialList = (number, festival) => {
  let query = `SELECT * FROM artists WHERE festival_name = '${festival}' AND removed = false ORDER BY random() LIMIT ${number}`;
  return pool
  .connect()
  .then((client) => {
    return client.query(query)
    .then((res) => {client.release; return res.rows})
    .catch((err) => {client.release; return err})
  })
}

exports.getInitialList = getInitialList;