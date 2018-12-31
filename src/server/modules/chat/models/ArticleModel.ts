import sqlite3 from 'sqlite3';

const dbName = 'later.sqlite';
const db = new sqlite3.Database(dbName);

type ActicleData = {
  id: number;
  title: string;
  content: string;
};

db.serialize(() => {
  const sql = `
    CREATE TABLE IF NOT EXISTS articles
        (id integer primary key, title, context TEXT)
    `;
  db.run(sql);
});

class ArticleModel {
  static all(cb: Function) {
    db.all('SELECT * FROM artiles', cb);
  }

  static find(id: string, cb: Function) {
    db.get('SELECT * FROM artiles WHERE id = ?', id, cb);
  }

  static create(data: ActicleData, cb: Function) {
    const sql = 'INSERT INTO articles(title, content) VALUES (?, ?)';
    db.run(sql, data.title, data.content, cb);
  }

  static delete(id: string, cb: Function) {
    db.run('DELETE FROM articles WHERE id = ?', id, cb);
  }
}

export default ArticleModel;
