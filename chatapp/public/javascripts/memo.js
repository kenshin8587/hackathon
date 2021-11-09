'use strict';
require('date-utils');

// メモを画面上に表示する
function memo() {    
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();
    // メモの内容を表示
    var dt = new Date();
    var formatted = dt.toFormat("YYYY-MM-DD HH24:MI:SS");
    // 空白以外は投稿
    if($.trim(message)) {
        $('#thread').prepend(`<p>` + userName + 'さん(メモ): ' + message + formatted +`</p>`)
    // 投稿フィールドをリセット
        $('#message').val('');

    }
    console.log(message + 'というメモを受信');
    return false;
}
