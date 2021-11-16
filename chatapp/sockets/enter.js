'use strict';

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('sendEnterEvent', function (data) {
        socket.broadcast.emit('receiveEnterEvent', data);
        
        //sqlite3を使えるようにしている
        const sqlite3 = require("sqlite3");

        //データベースを操作するためのインスタンス的なやつを生成している?
        //引数は使用するデータベースファイルだと思う。ここで使用されているのはhackathon/chatapp/Users.db
        const db = new sqlite3.Database("./Users.db");

        //db.run("drop table if exists Users");　データを保存するためコメントアウト。テーブルを消したければコメントアウト外す。
        
        console.log('db.js' + data);

        //テーブルの作成
        db.run("create table if not exists Users(id integer primary key autoincrement,name, password)");

        //入力されたユーザーネームをデータベースに保存。パスワードは仮。
        db.run("insert into Users(name,password) values(?,?)", data, "passhoge");

        //データベースに保存されているデータの出力
        db.each("select * from Users", (err, row) => {
            console.log(`${row.id}`, `${row.name}`, `${row.password}`);
        });

        db.close();
    });
};
