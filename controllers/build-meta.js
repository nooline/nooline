
module.exports = function buildMeta (error, data, req, res, info) {
  
  var fs = require('fs');
  var getIndex = require('./get-index');
  var error404 = require('../routes/error-404');
  
  var Snippets = require('../common/js/nooline/collections/snippets');
  
  function reportIndex (error, data) {
    getIndex(error, data, req, res, info);
  }
  
  info.index = info.contentPath + '/index.json';
  
  if (error) {
    error404(error, info);
  } else {
    try {
      data = JSON.parse(data);

      if (data.source) {
        info.setup = data;
      } else {
        info.setup = {
          type: info.type
        };
      }

      info.setup.snippets = new Snippets(data.snippets);

    } catch (fail) {
      error404(fail, info);
    }
    
    fs.readFile(info.index, 'utf8', reportIndex);
  }
};