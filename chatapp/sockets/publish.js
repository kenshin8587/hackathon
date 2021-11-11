'use strict';

const { use } = require("../routes");

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('sendMessageEvent', function (data, userName) {
        //自分宛
        socket.emit('selfReceiveMessageEvent', data, userName);
        //他人宛
        socket.broadcast.emit('receiveMessageEvent', data, userName);
        console.log(userName + 'さんから' + data + 'というコメントを受け取りました');
    });
};