define("c1",{name:"c1"}),define("c1/sub",{name:"c1/sub"}),define("a",["c","c/sub"],function(n,e){return{c:n,csub:e}}),define("another/minor",{name:"another/minor"}),define("another/c",["./minor"],function(n){return{name:"another/c",minorName:n.name}}),define("another/c/dim",{name:"another/c/dim"}),define("another/c/sub",["./dim"],function(n){return{name:"another/c/sub",dimName:n.name}}),define("b",["c","c/sub"],function(n,e){return{c:n,csub:e}}),define("c2",{name:"c2"}),define("a/sub/one",["c","c/sub"],function(n,e){return{c:n,csub:e}}),require({baseUrl:"./",paths:{a:"a1"},map:{"*":{c:"another/c"},a:{c:"c1"},"a/sub/one":{c:"c2","c/sub":"another/c/sub"}}},["a","b","c","a/sub/one"],function(n,e,c,a){doh.register("mapConfigStar",[function(i){i.is("c1",n.c.name),i.is("c1/sub",n.csub.name),i.is("c2",a.c.name),i.is("another/c/sub",a.csub.name),i.is("another/c/dim",a.csub.dimName),i.is("another/c",e.c.name),i.is("another/minor",e.c.minorName),i.is("another/c/sub",e.csub.name),i.is("another/c",c.name),i.is("another/minor",c.minorName)}]),doh.run()}),define("mapConfigStar-tests",[],function(){});