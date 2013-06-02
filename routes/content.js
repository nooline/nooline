
module.exports = function content (req, res, next) {
  var fs = require('fs');
  var buildMeta = require('../controllers/build-meta');
  var info = {};
  
  info.type = req.query.type || next.type;
  info.domain = './content/' + req.host,
  info.meta = info.domain + '/meta/' + info.type + '.json';
  info.next = next.followup;

  fs.readFile(info.meta, 'utf8', function reportMeta (error, data) {
    buildMeta(error, data, req, res, info);
  });
};