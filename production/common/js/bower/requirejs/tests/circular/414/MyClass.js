define(["exports","./A","./B","./C"],function(n,a,e,s){return n.name="MyClass",n.sayAll=function(){return[n.say(),a.say(),e.say(),s.say()].join(":")},n.say=function(){return[n.name,a.name,e.name,s.name].join(",")},n});