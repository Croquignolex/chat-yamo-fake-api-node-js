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
    'verified'
];
const TABLE_ROWS = [
  ['Croquignolex', 20, 'Male', 'Douala', 'CAMEROON', 'AFRICA', 'Hello world', 'Littoral', 'CAMEROON', true],
  ['Jyresciale', 21, 'Male', 'Roma', 'ITALY', 'EUROPE', 'Partouzard', 'West', 'EGYPT', true],
  ['Abelito', 15, 'Male', 'Tokyo', 'JAPAN', 'ASIA', 'Zounzibard', 'South', 'MALI', true],
  ['Rasta', 33, 'Female', 'New york', 'USA', 'AMERICA', 'Tintamard', 'East', 'SENEGAL', true],
  ['Noufele', 26, 'Female', 'Paris', 'FRANCE', 'EUROPE', 'Nguinsseur', 'Center', 'GHANA', true],
  ['Camillio', 23, 'Male', 'Djamena', 'TCHAD', 'AFRICA', 'La ménace', 'Littoral', 'CAMEROON', true],
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
      verified: {type: 'boolean', notNull: true, default: false},
      isPremium: {type: 'boolean', notNull: true, default: false},
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
