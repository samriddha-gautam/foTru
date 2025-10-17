import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("foTru.db");

export const dbInit = async () => {
  try {
    await db.execAsync(/* sql */ ` 
            PRAGMA journal_mode = WAL;
            CREATE TABLE IF NOT EXISTS users(
              id text primary not null ,
              name text not null, 
              username text not null, 
              created_at integer default (unixepoch())
              updated_at integer default (unixepoch()) 
            );
            CREATE TABLE IF NOT EXISTS routines(
              id text primary not null,
              user_id text not null,
              name text not null,
              description text,
              schedule text not null,
              status integer default 0,
              created_at integer default (unixepoch()),
              updated_at integer default (unixepoch()),
              FOREIGN KEY user_id REFERENCES users(id) ON DELETE CASCADE
            );

            CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);
            CREATE INDEX IF NOT EXISTS idx_routines_user_id ON routines(user_id);            
            CREATE INDEX IF NOT EXISTS idx_routines_status ON routines(status);
            CREATE INDEX IF NOT EXISTS idx_routines_created_at ON routines(created_at);
            
            CREATE TRIGGER IF NOT EXISTS update_users_timestamp 
            AFTER UPDATE ON users 
            FOR EACH ROW
            BEGIN
              UPDATE users SET updated_at = unixepoch() WHERE id=OLD.id; 
            END;

            CREATE TRIGGER IF NOT EXISTS update_routines_timestamp
            AFTER UPDATE ON routines 
            FOR EACH ROW 
            BEGIN 
              UPDATE routines SET updated_at = unixepoch() WHERE id=OLD.id;
            END;
        `);
        console.log('Initialized database successfully')
  } catch (error) {
    console.log("Failed to initialize database",error);
    throw error;
  }
};

export {db}