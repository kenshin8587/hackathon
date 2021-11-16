'use strict';

// 入室メッセージをサーバに送信する
// 入力されたユーザ名を取得する
const userName = $('#userName').val();
//console.log('enter.js'+userName);
// 入室メッセージイベントを送信する
socket.emit('sendEnterEvent',userName);


// サーバから受信した入室メッセージを画面上に表示する
socket.on('receiveEnterEvent', function (data) {
    console.log('db.js' + data);
    $('#thread').prepend('<p>' + data +'さんが入ってきたよ'+ '</p>');
    console.log('db.js' + data);

    const sqlite3 = require("sqlite3");
    const db = new sqlite3.Database("./Users.db");
    db.run("drop table if exists Users");  
    console.log('db.js' + data);
    db.run("create table if not exists Users(id integer primary key autoincrement,name, password)");
    db.run("insert into Users(name,password) values(?,?)", "hoge", "pass2");
    db.run("insert into Users(name,password) values(?,?)", data, "passhoge");
    db.each("select * from Users", (err, row) => {
        console.log(`${row.id}`, `${row.name}`, `${row.password}`);
    });

    db.close();
});
