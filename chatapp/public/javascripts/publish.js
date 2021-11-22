'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();

    // 投稿時間を取得
    var dt = new Date();
    var formatted = dt.toLocaleString({ timeZone: 'Asia/Tokyo' });
    
    // 投稿内容を送信
    // 空行や改行だけではないもの
    if($.trim(message)){
        socket.emit('sendMessageEvent', message, userName, formatted);
        // 投稿フィールドをリセット
        $('#message').val('');
    }
    console.log(userName);
    return false;
}

function trash(id){
    console.log('function trash\n');
    socket.emit('sendTrashMessage', id);
    return true;
}

// サーバから受信した投稿メッセージを画面上に表示する
// 他人用
socket.on('receiveMessageEvent', function (data, userName, formatted) {
    // 「ユーザー名さん: コメント」を画面上に表示する
    data = data.replaceAll("\n", "<br>");
    const id = userName+formatted.replaceAll("/", "").replaceAll(":", "").replace(" ", "");
    $('#thread').prepend('<div class="incoing_msg" id="'+id+'_div"><div class="received_msg"><div class="received_with_msg"><p>'+data+'</p><span class="time_date">'+formatted+'</span></div></div></div>');
});

// 自分用
socket.on('selfReceiveMessageEvent', function (data, userName, formatted) {
    // 「ユーザー名さん: コメント」を画面上に表示する
    data = data.replaceAll("\n", "<br>");
    const id = userName+formatted.replaceAll("/", "").replaceAll(":", "").replace(" ", "");
    // ボタンのidは"名前"+"日付(数字のみ)"、divのidは"ボタンのid"+"_div"
    $('#thread').prepend('<div class="outgoing_msg" id="'+id+'_div">'+'<button class="sent_msg_trash" type="button" value="メッセージを消す" id="'+id+'" onclick="trash(this.id);"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg></button>'+'<div class="sent_msg"><p>'+data+'</p><span class="time_date">'+formatted+'</span></div></div>');
});

socket.on('receiveTrashMessage', function (id) {
    const remove_id = id + "_div";
    $('#'+remove_id).remove();
});

// メッセージでエンターキーが押されたら投稿する
$("#message").keypress(function(e) {
    // エンターキーのみが押されたら投稿する
    if (e.keyCode == 13 && e.shiftKey === false) {
        publish();
        return false;
    }else if(e.keyCode == 13 && e.ctrlKey=== true){
        directmsg();
        return false;
    }else{
        // shiftとenterキーが両方押されたら、普通に改行をする
    }
});

