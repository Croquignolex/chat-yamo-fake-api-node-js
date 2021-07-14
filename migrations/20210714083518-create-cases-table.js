let dbm;
let type;
let seed;

const TABLE = 'cases';

const TABLE_COLUMNS = ['name', 'status', 'userId'];
const TABLE_ROWS = [
  ['Dummy case 1 name', 'OPEN', 1],
  ['Dummy case 2 name', 'OPEN', 2],
  ['Dummy case 3 name', 'OPEN', 3]
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
      createdAt: {type: 'timestamp', notNull: true, defaultValue: String('CURRENT_TIMESTAMP')},
      status: {type: 'string', notNull: true},
      closedAt: {type: 'timestamp', notNull: false},
      userId: {
        type: 'int', unsigned: true, notNull: true,
        foreignKey: {
          name: 'cases_users_userId_fk',
          table: 'users',
          rules: {onDelete: 'CASCADE'},
          mapping: 'id'
        }
      },
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
