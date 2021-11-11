'use strict';

const { use } = require("../routes");

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('sendMessageEvent', function (data, userName) {
        io.sockets.emit('receiveMessageEvent', data, userName);
        console.log(userName + 'さんから' + data + 'というコメントを受け取りました');
    });
};