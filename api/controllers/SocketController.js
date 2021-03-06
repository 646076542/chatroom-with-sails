/**
 * SocketController
 *
 * @description :: Server-side logic for managing sockets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function (req, res) {
        var options = {
            nickName: req.param('nickName', ''),
            socket: req.socket,
            session: req.session,
        }
        SocketService.create(options, res);
    },
};

