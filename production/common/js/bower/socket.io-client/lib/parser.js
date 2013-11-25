/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

!function(e,a){var r,t=e.parser={},n=t.packets=["disconnect","connect","heartbeat","message","json","event","ack","error","noop"],s=t.reasons=["transport not supported","client not handshaken","unauthorized"],c=t.advice=["reconnect"],o=a.JSON,d=a.util.indexOf;t.encodePacket=function(e){var a,r,t,i,u=d(n,e.type),g=e.id||"",k=e.endpoint||"",h=e.ack,p=null;switch(e.type){case"error":a=e.reason?d(s,e.reason):"",r=e.advice?d(c,e.advice):"",(""!==a||""!==r)&&(p=a+(""!==r?"+"+r:""));break;case"message":""!==e.data&&(p=e.data);break;case"event":t={name:e.name},e.args&&e.args.length&&(t.args=e.args),p=o.stringify(t);break;case"json":p=o.stringify(e.data);break;case"connect":e.qs&&(p=e.qs);break;case"ack":p=e.ackId+(e.args&&e.args.length?"+"+o.stringify(e.args):"")}return i=[u,g+("data"==h?"+":""),k],null!==p&&void 0!==p&&i.push(p),i.join(":")},t.encodePayload=function(e){var a,r,t,n="";if(1==e.length)return e[0];for(a=0,r=e.length;r>a;a++)t=e[a],n+="�"+t.length+"�"+e[a];return n},r=/([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/,t.decodePacket=function(e){var a,t,d,i=e.match(r);if(!i)return{};switch(a=i[2]||"",e=i[5]||"",t={type:n[i[1]],endpoint:i[4]||""},a&&(t.id=a,t.ack=i[3]?"data":!0),t.type){case"error":i=e.split("+"),t.reason=s[i[0]]||"",t.advice=c[i[1]]||"";break;case"message":t.data=e||"";break;case"event":try{d=o.parse(e),t.name=d.name,t.args=d.args}catch(u){}t.args=t.args||[];break;case"json":try{t.data=o.parse(e)}catch(u){}break;case"connect":t.qs=e||"";break;case"ack":if(i=e.match(/^([0-9]+)(\+)?(.*)/),i&&(t.ackId=i[1],t.args=[],i[3]))try{t.args=i[3]?o.parse(i[3]):[]}catch(u){}break;case"disconnect":case"heartbeat":}return t},t.decodePayload=function(e){var a,r,n;if("�"==e.charAt(0)){for(a=[],r=1,n="";r<e.length;r++)"�"==e.charAt(r)?(a.push(t.decodePacket(e.substr(r+1).substr(0,n))),r+=Number(n)+1,n=""):n+=e.charAt(r);return a}return[t.decodePacket(e)]}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports);