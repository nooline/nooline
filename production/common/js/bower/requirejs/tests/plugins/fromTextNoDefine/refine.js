!function(){function e(){var e,n,r;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;for(n=0;3>n;n++){r=i[n];try{e=new ActiveXObject(r)}catch(t){}if(e){i=[r];break}}if(!e)throw Error("require.getXhr(): XMLHttpRequest not available");return e}var n,r,t={},i=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"];"undefined"!=typeof window&&window.navigator&&window.document?n=function(n,r){var t=e();t.open("GET",n,!0),t.onreadystatechange=function(){4===t.readyState&&r(t.responseText)},t.send(null)}:"undefined"!=typeof process&&process.versions&&process.versions.node?(r=require.nodeRequire("fs"),n=function(e,n){n(r.readFileSync(e,"utf8"))}):"undefined"!=typeof Packages&&(n=function(e,n){var r,t,i="utf-8",a=new java.io.File(e),o=java.lang.System.getProperty("line.separator"),f=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(a),i)),u="";try{for(r=new java.lang.StringBuffer,t=f.readLine(),t&&t.length()&&65279===t.charAt(0)&&(t=t.substring(1)),r.append(t);null!==(t=f.readLine());)r.append(o),r.append(t);u=""+r+""}finally{f.close()}n(u)}),define([],function(){return{load:function(e,r,i,a){var o=r.toUrl(e+".refine");n(o,function(n){n=n.replace(/refine/g,"define"),a.isBuild&&(t[e]=n),n+="\r\n//@ sourceURL="+o,i.fromText(e,n),r([e],function(e){i(e)})})},write:function(e,n,r){if(n in t){var i=t[n];r.asModule(e+"!"+n,i)}}}})}();