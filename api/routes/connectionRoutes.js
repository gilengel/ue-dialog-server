'use strict';
module.exports = function(app) {
  var connections = require('../controllers/connectionController');

  app.route('/connections')
    .post(connections.createConnection)

  app.route('/connections/:connectionId')
    .get(connections.getConnection)
    .patch(connections.updateConnection)
    .delete(connections.deleteConnection)
};
