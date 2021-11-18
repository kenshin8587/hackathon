'use strict';

// 投稿メッセージをサーバに送信する
function directmsg() {
    // 他のユーザ名を取得
    const otherUserName = $('#userName').val();
    // 入力されたメッセージを取得
    const dm = $('#dm').val();
    // 投稿内容を送信
    // 空行や改行だけではないもの
    if($.trim(dm)){
        socket.emit('sendDmEvent', dm, userName);
        // 投稿フィールドをリセット
        $('#dm').val('');
    }
    console.log(userName);
    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveDmEvent', function (data, userName) {
    // 「ユーザー名さん: コメント」を画面上に表示する
    $('#thread').prepend('<p>' + userName + 'さん:' + data + '</p>');
});

// メッセージでエンターキーが押されたら投稿する
$("#dm").keypress(function(e) {
    // エンターキーのみが押されたら投稿する
    if (e.keyCode == 13 && e.shiftKey === false) {
        directmsg();
        return false;
    }else{
        // shiftとenterキーが両方押されたら、普通に改行をする
    }
});

