const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./DB_emulator/adminDB.json')
const adminDB = low(adapter)


const adapter_staff = new FileSync('./DB_emulator/staffDB.json')
const staffDB = low(adapter_staff)

// Set some defaults (required if your JSON file is empty)
adminDB.defaults({ admin: []})
  .write()
  staffDB.defaults({ listStaff: []})
  .write()

module.exports.adminDB = adminDB;
module.exports.staffDB = staffDB;