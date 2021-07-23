let dbm;
let type;
let seed;

const TABLE = 'users';

const TABLE_COLUMNS = [
    'name',
    'age',
    'gender',
    'city',
    'country',
    'continent',
    'greetingText',
    'province',
    'homeCountry',
    'verified',
    'isPremium'
];
const TABLE_ROWS = [
  ['Dummy user 1 name', 10, 'Male', 'Dummy user 1 city', 'Dummy user 1 country', 'Dummy user 1 continent', 'Dummy user 1 greeting text', 'Dummy user 1 province', 'Dummy user 1 home country', true, true],
  ['Dummy user 2 name', 20, 'Female', 'Dummy user 2 city', 'Dummy user 2 country', 'Dummy user 2 continent', 'Dummy user 2 greeting text', 'Dummy user 2 province', 'Dummy user 2 home country', true, false],
  ['Dummy user 3 name', 30, 'Male', 'Dummy user 3 city', 'Dummy user 3 country', 'Dummy user 3 continent', 'Dummy user 3 greeting text', 'Dummy user 3 province', 'Dummy user 3 home country', false, false]
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
      age: {type: 'int', notNull: true},
      gender: {type: 'string', notNull: true},
      city: {type: 'string', notNull: true},
      country: {type: 'string', notNull: true},
      continent: {type: 'string', notNull: true},
      greetingText: {type: 'string', notNull: true},
      province: {type: 'string', notNull: true},
      homeCountry: {type: 'string', notNull: true},
      verified: {type: 'boolean', notNull: true, defaultValue: false},
      isPremium: {type: 'boolean', notNull: true, defaultValue: false},
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
