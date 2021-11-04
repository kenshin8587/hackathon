'use strict';

// メモを画面上に表示する
function memo() {
    // ユーザ名を取得
    const userName = $('#userName').text();
    // 入力されたメッセージを取得
    const message = prompt('メモを入力してください');
    // メモの内容を表示
    $('#thread').prepend(`<p>` + userName + ' : ' + message + `</p>`);

    return false;
}
