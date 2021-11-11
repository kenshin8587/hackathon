'use strict';
// require('date-utils');

// メモを画面上に表示する
function memo() {    
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();

    // メモの内容を表示
    var dt = new Date(); // メモ日付の追加
    var formatted = dt.toLocaleString({ timeZone: 'Asia/Tokyo' }); // フォーマットを変更

    // 空白以外は投稿
    if($.trim(message)) {
        $('#thread').prepend(`<p>` + userName + 'さん(メモ): ' + message + ' <' + formatted + '>' + `</p>`)
    // 投稿フィールドをリセット
        $('#message').val('');
        console.log(userName + 'さんが' + message + 'を入力しました');
    }
    return false;
}
