'use strict';

module.exports = function (socket, io) {
    // 入室メッセージをクライアントに送信する
    socket.on('sendCheck', function (data) {
        
        //sqlite3を使えるようにしている
        const sqlite3 = require("sqlite3");

        //データベースを操作するためのインスタンス的なやつを生成している?
        //引数は使用するデータベースファイルだと思う。ここで使用されているのはhackathon/chatapp/Users.db
        const db = new sqlite3.Database("./Users.db");

        //入力した値がDB上に存在すればrowが返ってくる
        //DB上に存在する場合のstatusを取得
        db.get(`select status from Users where name ='${data}'`, (err, row) => {
            //DB上に存在する場合
            if(row){
                //console.log(row.status);
                //statusが0(退室時)は入室可能
                if(row.status == '0'){
                    console.log('入室可能');
                    socket.emit('receiveCheck0', row);
                }
                //statusが1(入室時)は入室不可
                else{
                    console.log('入室不可能');
                    socket.emit('receiveCheck1', row);
                }
            }
            //DBに存在しない場合は入室可能
            else{
                console.log('存在しない');
                socket.emit('receiveCheck0', row);
            }

        });

        db.close();
    });
};
