define([],function(){var t=window.Nooline;return t.Views.ContentSnippetView.prototype.bindEvents=function(t){function e(t){$(t).attr("id")?n.$el.on("click",".edit-content-button",function(){n.startEditing()}).on("click",".cancel-editing-button",function(){n.stopEditing()}).on("click",".commit-changes-button",function(){n.commitChanges()}):n.$el.attr("id")||$(document).on(n.model.get("uuid"),function(t,i){var o=$("#"+i.attr("id"));$(document).off(t.type),n.setElement(o),n.getOption("editable")&&(n.$el.append(n.$edit,n.$commit,n.$cancel),n.$edit.removeClass("hidden")),e(o)})}var n=this;n.setElement(t),e(t),this.getOption("bound")||(this.setOptions("bound",!0),this.on({"options:change":this.render,"editor:enable":function(){this.setOptions("editor",!0)},"editor:disable":function(){this.setOptions("editor",!1)},"editor:commit":this.save,remove:this.remove}))},"views/content-snippet-view/bind-events"});