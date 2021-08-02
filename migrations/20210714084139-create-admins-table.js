let dbm;
let type;
let seed;

const TABLE = 'admins';

const TABLE_COLUMNS = [
  'name',
  'gender',
  'phone',
  'email',
  'address',
  'description'
];
const TABLE_ROWS = [
  ['Dummy backoffice user 1 name', 'Male', '677777777', 'exemple@domain.com', 'Dummy backoffice user 1 address', 'Dummy backoffice user 1 description']
];

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable(TABLE, {
    columns: {
      id: {type: 'int', unsigned: true, notNull: true, primaryKey: true, autoIncrement: true},
      name: {type: 'string', notNull: true},
      gender: {type: 'string', notNull: true},
      phone: {type: 'string', notNull: true},
      email: {type: 'string', notNull: true},
      address: {type: 'string', notNull: true},
      description: {type: 'text', notNull: true}
    },
    ifNotExists: true
  }, function (error) {
    // Insert value
    if (error) { return; }
    TABLE_ROWS.forEach((data) => {
      db.insert(TABLE, TABLE_COLUMNS, data);
    });
  });
};

exports.down = function(db) {
  return db.dropTable(TABLE);
};

exports._meta = {
  "version": 1
};
