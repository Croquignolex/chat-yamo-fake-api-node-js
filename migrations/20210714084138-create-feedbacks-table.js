let dbm;
let type;
let seed;

const TABLE = 'feedbacks';

const TABLE_COLUMNS = ['content', 'userId', 'authorId', 'messageId', 'caseId', 'mediaId'];
const TABLE_ROWS = [
  ['Dummy feedback content', 1, 1, 1, 1, 1]
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
      createdAt: {type: 'timestamp', notNull: true, defaultValue: String('CURRENT_TIMESTAMP')},
      content: {type: 'string', notNull: true},
      userId: {
        type: 'int', unsigned: true, notNull: true,
        foreignKey: {
          name: 'feedbacks_users_userId_fk',
          table: 'users',
          rules: {onDelete: 'CASCADE'},
          mapping: 'id'
        }
      },
      authorId: {
        type: 'int', unsigned: true, notNull: true,
        foreignKey: {
          name: 'feedbacks_users_authorId_fk',
          table: 'users',
          rules: {onDelete: 'CASCADE'},
          mapping: 'id'
        }
      },
      messageId: {
        type: 'int', unsigned: true, notNull: true,
        foreignKey: {
          name: 'feedbacks_messages_messageId_fk',
          table: 'messages',
          rules: {onDelete: 'CASCADE'},
          mapping: 'id'
        }
      },
      caseId: {
        type: 'int', unsigned: true, notNull: true,
        foreignKey: {
          name: 'feedbacks_cases_caseId_fk',
          table: 'cases',
          rules: {onDelete: 'CASCADE'},
          mapping: 'id'
        }
      },
      mediaId: {
        type: 'int', unsigned: true, notNull: false,
        foreignKey: {
          name: 'feedbacks_medias_mediaId_fk',
          table: 'medias',
          rules: {onDelete: 'SET NULL'},
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
