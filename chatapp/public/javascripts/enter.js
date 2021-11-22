'use strict';

// 入室メッセージをサーバに送信する
// 入力されたユーザ名を取得する
const userName = $('#userName').val();
//console.log('enter.js'+userName);
// 入室メッセージイベントを送信する
socket.emit('sendEnterEvent', userName);

// サーバから受信した入室メッセージを画面上に表示する
socket.on('receiveEnterEvent', function (data) {
    console.log('db.js' + data);
    $('#thread').prepend('<p class="enter_comment"> ~~~' + data +'さんが入ってきたよ ~~~ </p>');
});

socket.on('receiveLoginUsers', function (data) {
    // 一旦消してから一覧を再び書く
    $('#loginUsers').empty();
    for(let login of data){
        $('#loginUsers').prepend('<button type=button id="'+login.name+'" onclick="selectUserName(this.id);">' + login.name + '</button><br>');
    }
    $('#loginUsers').prepend('<h3> ログインユーザ 一覧 <h3>');
});