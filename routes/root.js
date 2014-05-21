
/**
 * @route root
 * Handles the root (/) request.
 *
 * Determines which are the base categories for the root of the page, and
 * delegates loading them down the async chain.  Also sets the user error
 * text if the domain doesn't exist.
 *
 * @param req
 * @param res
 * @return
 */
module.exports = function root (req, res) {
  var content = require('./content');
  // TODO: Move this into the contentcategories view.
  var renderTemplate = require('../controllers/render-template');
  var info = {};
  
  info.domain = req.host;
  info.nooline = req.app;
  // TODO: This needs to come from a JSON file.
  info.errorMessage = "Looks like that domain doesn't exist yet.";
  info.errorDetail = "For the technies:  "
    + "Try checking the <span class=\"files tech-term\">views/"
    + "</span> folder to ensure one exists for this domain's <span "
    + "class=\"tech-term\">root"
    + "</span> (" + info.domain + " + /) view.  Otherwise, perhaps the "
    + "specific route for this domain and path are missing.";
  info.template = '/root';
  
  info.next = renderTemplate;
  // TODO: This needs to come from a JSON file.
  info.categories = [
    'timeline',
    'scroll'
  ];
  
  content(req, res, info);
  
};
