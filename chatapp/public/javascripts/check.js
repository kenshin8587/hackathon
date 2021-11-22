'use strict';

// チャットルームに入室する
function enter() {
    // 入室メッセージをサーバに送信する
    // 入力されたユーザ名を取得する
    const userName = $('#userName').val();

    // ユーザ名が未入力でないかチェックする
    if(userName == ""){
        alert('ユーザー名を入力してください');
    }
    else{
        // ログインチェックを送信する
        socket.emit('sendCheck', userName);
        //チャットルームに入る
        socket.on('receiveCheck0', function (data) {
            $('form').submit();
        });
        //チャットルームに入らない(同じ名前でログインしている)
        socket.on('receiveCheck1', function (data) {
            alert('この名前は使われています。違う名前を入力してください');
        });
    }
}
