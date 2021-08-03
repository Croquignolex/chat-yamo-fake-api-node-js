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
    ['Joseph NANA', 30, 'Male', 'PARIS', 'FRANCE', 'AUROPE', 'Hi Joseph', 'PARIS', 'CAMEROON', true, true],
    ['Rose KENE', 22, 'Female', 'YAOUNDE', 'CAMEROON', 'AFRICA', 'Hi Rose', 'CENTER', 'FRANCE', true, false],
    ['Cedric EKEMA', 18, 'Male', 'NEW YORK', 'USA', 'AMERICA', 'Hi Cedric', 'NEW YORK', 'NIGERIA', true, true],
    ['Anne RAMANOV', 21, 'Female', 'SAINT PETERSBOURG', 'RUSSIA', 'EUROPE', 'Hi Anne', 'SAINT PETERSBOURG', 'UK', false, false],
    ['Ina YAMAMOTO', 19, 'Female', 'TOKYO', 'JAPAN', 'ASIA', 'Hi Ina', 'TOKYO', 'CHINA', true, true],
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
