/*
 Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/

!function(e){CKEDITOR.config.jqueryOverrideVal=void 0===CKEDITOR.config.jqueryOverrideVal?!0:CKEDITOR.config.jqueryOverrideVal,void 0!==e&&(e.extend(e.fn,{ckeditorGet:function(){var e=this.eq(0).data("ckeditorInstance");if(!e)throw"CKEditor is not initialized yet, use ckeditor() with a callback.";return e},ckeditor:function(t,n){var i,r,a;if(!CKEDITOR.env.isCompatible)throw Error("The environment is incompatible.");return e.isFunction(t)||(i=n,n=t,t=i),r=[],n=n||{},this.each(function(){var i=e(this),a=i.data("ckeditorInstance"),o=i.data("_ckeditorInstanceLock"),c=this,s=new e.Deferred;r.push(s.promise()),a&&!o?(t&&t.apply(a,[this]),s.resolve()):o?a.once("instanceReady",function(){setTimeout(function(){a.element?(a.element.$==c&&t&&t.apply(a,[c]),s.resolve()):setTimeout(arguments.callee,100)},0)},null,null,9999):((n.autoUpdateElement||void 0===n.autoUpdateElement&&CKEDITOR.config.autoUpdateElement)&&(n.autoUpdateElementJquery=!0),n.autoUpdateElement=!1,i.data("_ckeditorInstanceLock",!0),a=e(this).is("textarea")?CKEDITOR.replace(c,n):CKEDITOR.inline(c,n),i.data("ckeditorInstance",a),a.on("instanceReady",function(n){var r=n.editor;setTimeout(function(){if(r.element){if(n.removeListener(),r.on("dataReady",function(){i.trigger("dataReady.ckeditor",[r])}),r.on("setData",function(e){i.trigger("setData.ckeditor",[r,e.data])}),r.on("getData",function(e){i.trigger("getData.ckeditor",[r,e.data])},999),r.on("destroy",function(){i.trigger("destroy.ckeditor",[r])}),r.on("save",function(){return e(c.form).submit(),!1},null,null,20),r.config.autoUpdateElementJquery&&i.is("textarea")&&e(c.form).length){var a=function(){i.ckeditor(function(){r.updateElement()})};e(c.form).submit(a),e(c.form).bind("form-pre-serialize",a),i.bind("destroy.ckeditor",function(){e(c.form).unbind("submit",a),e(c.form).unbind("form-pre-serialize",a)})}r.on("destroy",function(){i.removeData("ckeditorInstance")}),i.removeData("_ckeditorInstanceLock"),i.trigger("instanceReady.ckeditor",[r]),t&&t.apply(r,[c]),s.resolve()}else setTimeout(arguments.callee,100)},0)},null,null,9999))}),a=new e.Deferred,this.promise=a.promise(),e.when.apply(this,r).then(function(){a.resolve()}),this.editor=this.eq(0).data("ckeditorInstance"),this}}),CKEDITOR.config.jqueryOverrideVal&&(e.fn.val=CKEDITOR.tools.override(e.fn.val,function(t){return function(n){var i,r,a,o,c;return arguments.length?(i=this,r=[],a=this.each(function(){var i,a=e(this),o=a.data("ckeditorInstance");return a.is("textarea")&&o?(i=new e.Deferred,o.setData(n,function(){i.resolve()}),r.push(i.promise()),!0):t.call(a,n)}),r.length?(o=new e.Deferred,e.when.apply(this,r).done(function(){o.resolveWith(i)}),o.promise()):a):(a=e(this).eq(0),c=a.data("ckeditorInstance"),a.is("textarea")&&c?c.getData():t.call(a))}})))}(window.jQuery);