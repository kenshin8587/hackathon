'use strict';

const { use } = require("../routes");

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('sendDmEvent', function (dm, userName, otherUserName) {
        console.log('dmを受信した');
        socket.emit('selfReceiveDmEvent', dm, userName, otherUserName);
        socket.broadcast.emit('receiveDmEvent', dm, userName, otherUserName);
        console.log(userName + 'さんから' + otherUserName + 'さんへ' + dm + 'というDMを受け取りました');
    });
};