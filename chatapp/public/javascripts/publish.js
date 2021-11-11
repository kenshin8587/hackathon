'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();
    // 投稿内容を送信
    // 空行や改行だけではないもの
    if($.trim(message)){
        socket.emit('sendMessageEvent', message, userName);
        // 投稿フィールドをリセット
        $('#message').val('');
    }
    console.log(userName);
    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (data, userName) {
    // 「ユーザー名さん: コメント」を画面上に表示する
    var dt = new Date();
    var formatted = dt.toLocaleString({ timeZone: 'Asia/Tokyo' });
    $('#thread').prepend('<p>' + userName + 'さん:' + data + ' <' + formatted + '>' + '</p>');
});

// メッセージでエンターキーが押されたら投稿する
$("#message").keypress(function(e) {
    // エンターキーのみが押されたら投稿する
    if (e.keyCode == 13 && e.shiftKey === false) {
        publish();
        return false;
    }else{
        // shiftとenterキーが両方押されたら、普通に改行をする
    }
});

