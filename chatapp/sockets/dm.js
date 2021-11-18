'use strict';

const { use } = require("../routes");

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('sendDmEvent', function (data, userName) {
        io.sockets.emit('receiveDmEvent', data, userName);
        console.log(userName + 'さんから' + data + 'というDMを受け取りました');
    });
};