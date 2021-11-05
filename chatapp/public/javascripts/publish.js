'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();
    // 投稿内容を送信
    socket.emit('sendMessageEvent', message, userName);
    console.log(userName);
    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (data, userName) {
    // 「ユーザー名さん: コメント」を画面上に表示する
    $('#thread').prepend('<p>' + userName + 'さん:' + data + '</p>');

    // 投稿フィールドをリセット
    $('#message').val('');
});