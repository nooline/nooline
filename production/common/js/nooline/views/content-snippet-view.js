({define:"function"==typeof define?define:function(e,n,t){exports=module.exports=t()}}).define("common/js/nooline/views/content-snippet-view",[],function(){var e=this,n=e.window?e.Nooline:null,t=e.Backbone||null,i=t.View.extend({constructor:function(){var e;t.View.apply(this,arguments),"undefined"==typeof module&&(this.options={},e=document.getElementById(this.model.get("uuid")),this.bindEvents(e))}});return"undefined"!=typeof module?(module.exports=i,module.exports):(n.Views=n.Views||{},n.Views.ContentSnippetView=i,require(["common/js/nooline/views/content-snippet-view/setup"]),"views/content-snippet-view")});