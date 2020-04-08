const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('adminDB.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ admin: []})
  .write()

module.exports = db;