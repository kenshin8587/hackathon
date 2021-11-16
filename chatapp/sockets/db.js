

/*socket.on('sendUserData', function (data) {
    userName = data;
    console.log('db.js' + userName);
    //nameをだぶり禁止にする
    const sqlite3 = require("sqlite3");
    const db = new sqlite3.Database("./Users.db");
    db.run("drop table if exists Users");  
    console.log('db.js' + userName);
    db.run("create table if not exists Users(id integer primary key autoincrement,name, password)");
    db.run("insert into Users(name,password) values(?,?)", "hoge", "pass2");
    db.run("insert into Users(name,password) values(?,?)", testuser, "pass2");
    db.run("insert into Users(name,password) values(?,?)", userName, "passhoge");
    db.each("select * from Users", (err, row) => {
        console.log(`${row.id}`, `${row.name}`, `${row.password}`);
    });

    db.close();
});*/

//このファイルは使用していません
    /*userName = $('#userName').val();
    console.log('db.js' + userName);
    //nameをだぶり禁止にする
    const sqlite3 = require("sqlite3");
    const db = new sqlite3.Database("./Users.db");
    db.run("drop table if exists Users");  
    console.log('db.js' + userName);
    db.run("create table if not exists Users(id integer primary key autoincrement,name, password)");
    db.run("insert into Users(name,password) values(?,?)", "hoge", "pass2");
    db.run("insert into Users(name,password) values(?,?)", userName, "passhoge");
    db.each("select * from Users", (err, row) => {
        console.log(`${row.id}`, `${row.name}`, `${row.password}`);
    });

    db.close();*/