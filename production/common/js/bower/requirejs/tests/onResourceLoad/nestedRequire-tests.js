function finish(e){doh.is("a",e.name),doh.is("b",e.b.name),doh.is(2,e.ids.length),doh.is("b",e.ids[0]),doh.is("a",e.ids[1]),master.callback(!0)}var doneCount=0,master=new doh.Deferred;requirejs.onResourceLoad=function(e,n){require(["a"],function(e){doneCount+=1,e.add(n.id),2===doneCount&&finish(e)})},require({baseUrl:"./"},["a"],function(){doh.register("onResourceLoadNestedRequire",[{name:"onResourceLoadNestedRequire",timeout:5e3,runTest:function(){return master}}]),doh.run()});