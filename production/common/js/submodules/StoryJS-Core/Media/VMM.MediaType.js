"undefined"!=typeof VMM&&void 0===VMM.MediaType&&(VMM.MediaType=function(t){var i,e=t.replace(/^\s\s*/,"").replace(/\s\s*$/,""),a=!1,s={type:"unknown",id:"",start:0,hd:!1,link:"",lang:VMM.Language.lang,uniqueid:VMM.Util.unique_ID(6)};return e.match("div class='twitter'")?(s.type="twitter-ready",s.id=e,a=!0):e.match("(www.)?youtube|youtu.be")?(e.match("v=")?s.id=VMM.Util.getUrlVars(e).v:e.match("/embed/")?s.id=e.split("embed/")[1].split(/[?&]/)[0]:e.match(/v\/|v=|youtu\.be\//)?s.id=e.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0]:trace("YOUTUBE IN URL BUT NOT A VALID VIDEO"),s.start=VMM.Util.getUrlVars(e).t,s.hd=VMM.Util.getUrlVars(e).hd,s.type="youtube",a=!0):e.match("(player.)?vimeo.com")?(s.type="vimeo",s.id=e.split(/video\/|\/\/vimeo\.com\//)[1].split(/[?&]/)[0],a=!0):e.match("(www.)?dailymotion.com")?(s.id=e.split(/video\/|\/\/dailymotion\.com\//)[1],s.type="dailymotion",a=!0):e.match("(www.)?vine.co")?(trace("VINE"),e.match("vine.co/v/")&&(s.id=e.split("vine.co/v/")[1],trace(s.id)),trace(e),s.type="vine",a=!0):e.match("(player.)?soundcloud.com")?(s.type="soundcloud",s.id=e,a=!0):e.match("(www.)?twitter.com")&&e.match("status")?(s.id=e.match("status/")?e.split("status/")[1]:e.match("statuses/")?e.split("statuses/")[1]:"",s.type="twitter",a=!0):e.match("maps.google")&&!e.match("staticmap")?(s.type="google-map",s.id=e.split(/src=['|"][^'|"]*?['|"]/gi),a=!0):e.match("plus.google")?(s.type="googleplus",s.id=e.split("/posts/")[1],s.user=e.split("/posts/")[0].match("u/0/")?e.split("u/0/")[1].split("/posts")[0]:e.split("google.com/")[1].split("/posts/")[0],a=!0):e.match("flickr.com/photos")?(s.type="flickr",s.id=e.split("photos/")[1].split("/")[1],s.link=e,a=!0):e.match("instagr.am/p/")?(s.type="instagram",s.link=e,s.id=e.split("/p/")[1].split("/")[0],a=!0):e.match(/jpg|jpeg|png|gif/i)||e.match("staticmap")||e.match("yfrog.com")||e.match("twitpic.com")?(s.type="image",s.id=e,a=!0):VMM.FileExtention.googleDocType(e)?(s.type="googledoc",s.id=e,a=!0):e.match("(www.)?wikipedia.org")?(s.type="wikipedia",i=e.split("wiki/")[1].split("#")[0].replace("_"," "),s.id=i.replace(" ","%20"),s.lang=e.split("//")[1].split(".wikipedia")[0],a=!0):0==e.indexOf("http://")?(s.type="website",s.id=e,a=!0):e.match("storify")?(s.type="storify",s.id=e,a=!0):e.match("blockquote")?(s.type="quote",s.id=e,a=!0):e.match("iframe")?(s.type="iframe",trace("IFRAME"),trace(e.match(/src\=([^\s]*)\s/)[1].split(/"/)[1]),s.id=e.match(/src\=([^\s]*)\s/)[1].split(/"/)[1],a=!0):(trace("unknown media"),s.type="unknown",s.id=e,a=!0),a?s:(trace("No valid media id detected"),trace(e),!1)});