function D(){this.name="d"}var B,C,e,FCAP;!function(n){n.A={name:"a"}}(this),define("a",function(n){return function(){var e,a;return a=function(){window.globalA=this.A.name},e=a.apply(n,arguments),e||n.A.name}}(this)),define("d",function(){}),B={name:"b",aValue:A.name,dValue:new D},define("b",function(){}),C={name:"c",a:A,b:B},define("c",["a","b"],function(n){return function(){var e;return e||n.C}}(this)),e={nested:{e:{name:"e"}}},define("e",function(n){return function(){var a,i;return i=function(){return{name:e.nested.e.name+"Modified"}},a=i.apply(n,arguments),a||n.e.nested.e}}(this)),FCAP={name:"FCAP",globalA:A},define("f",["a"],function(n){return function(){var e,a;return a=function(n){return{name:FCAP.name,globalA:FCAP.globalA,a:n}},e=a.apply(n,arguments)}}(this)),require({baseUrl:"./",shim:{a:{exports:"A.name",init:function(){window.globalA=this.A.name}},b:["a","d"],c:{deps:["a","b"],exports:"C"},e:{exports:"e.nested.e",init:function(){return{name:e.nested.e.name+"Modified"}}},f:{deps:["a"],init:function(n){return{name:FCAP.name,globalA:FCAP.globalA,a:n}}}}},["a","c","e","f"],function(n,e,a,i){doh.register("shimBasic",[function(t){t.is("a",n),t.is("a",window.globalA),t.is("a",e.b.aValue),t.is("b",e.b.name),t.is("c",e.name),t.is("d",e.b.dValue.name),t.is("eModified",a.name),t.is("FCAP",i.name),t.is("a",i.globalA.name),t.is("a",i.a)}]),doh.run()}),define("basic-tests",function(){});