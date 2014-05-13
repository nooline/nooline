
define(function () {

  var N = window.Nooline;
  
  /**
   * remove
   * Get rid of it!
   *
   * Removes a particular ContentSnippet from the collection (the Category
   * Model) and also from the DOM.
   *
   * @return  None.
   */
  N.Models.ContentSnippet.prototype.remove = function () {
    
    this.collection.remove(this).view.trigger('remove');

    delete this.view;
    
  };

  return 'models/content-snippet/remove';

});
