'use strict';

module.exports = function (socket, io) {
    // 入室メッセージをクライアントに送信する
    socket.on('sendEnterEvent', function (enterUserName) {
        
        //sqlite3を使えるようにしている
        const sqlite3 = require("sqlite3");

        //データベースを操作するためのインスタンス的なやつを生成している?
        //引数は使用するデータベースファイルだと思う。ここで使用されているのはhackathon/chatapp/Users.db
        const db = new sqlite3.Database("./Users.db");

        //db.run("drop table if exists Users");　//データを保存するためコメントアウト。テーブルを消したければコメントアウト外す。
        
        console.log('db.js: ' + enterUserName);

        //テーブルの作成
        db.run("create table if not exists Users(id integer primary key autoincrement,name text, status integer)");

    
        //データベースに保存されているか確認
        db.get(`select name from Users where name ='${enterUserName}'`, (err, row) => {
            /*console.log(row);
            console.log(err);*/
            if(row){
                //すでにデータベースに保存されていたら他のユーザーに通知
                socket.broadcast.emit('receiveEnterEvent', enterUserName);
                //stausを1に変更
                db.run(`update Users set(status)=1 where name='${enterUserName}'`);
            }
            else{
                 //入力されたユーザーネームをデータベースに保存。
                db.run("insert into Users(name,status) values(?,?)", enterUserName,1);
            }

        });

        // 
        db.all(`select name from Users where status=1`, (err, row) => {
            console.log(row);
            console.log(err);
            io.sockets.emit('receiveLoginUsers', row);
        });

        db.close();
    });
};
