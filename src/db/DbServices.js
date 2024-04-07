import * as SQLite from 'expo-sqlite';
//funcao para conexao, para criar o banco
const Database = {
  getConnection: () => {

    const db = SQLite.openDatabase('leio.db');

    db.transaction((tx) =>{
    tx.executeSql('create table if not exists usuario(id integer primary key not null, nome text not null, email text not null, senha text not null, foto blob not null);');
    tx.executeSql('create table if not exists biblioteca(id integer primary key not null, usuario_id integer not null, livro_id integer not null, foreign key(usuario_id) references usuario(id), foreign key(livro_id) references livro(id));');
    tx.executeSql('create table if not exists livro(id integer primary key not null, usuario text not null, titulo text not null, autor text not null, isbn text not null, editora text not null, anopublicacao int not null, imagem blob not null, foreign key(usuario_id) references usuario(id));');
    tx.executeSql('create table if not exists categoria(id integer primary key not null, livro_id integer not null, nome text not null, foreign key(livro_id) references livro(id));');
    });

    const ExecuteQuery = (sql, params = []) => {
      new Promise((resolve, reject) => {
        db.transaction((trans) => {
          trans.executeSql(sql, params,
          (trans, results) => {
            resolve(results);
            },
            (error) => {
              reject(error);
            }
          );
        });
      });
    }

  }
}

export default Database;