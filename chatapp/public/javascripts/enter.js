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
    $('#thread').prepend('<p class="enter_comment"> ~~~' + data +'さんが入ってきたよ ~~~ </p>');
});
