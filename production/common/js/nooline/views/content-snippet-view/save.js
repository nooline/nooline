define([],function(){var t=window.Nooline;return t.Views.ContentSnippetView.prototype.save=function(){var t=JSON.parse(sessionStorage.getItem("lastLoginAttempt")).username,e=window.moment(),i=e.format("dddd, MMMM Mo, YYYY"),a=e.format("hh:mm:ss a"),n=e.format("YYYY,M,D"),s=e.format("HH:m:s");this.setOptions("saved",!0),this.model.save({headline:this.$editableElement.children(".headline").text(),text:this.$editableElement.children(".text").html(),author:t,prettyStartDate:i,prettyStartTime:a,startDate:n,startTime:s})},"views/content-snippet-view/save"});