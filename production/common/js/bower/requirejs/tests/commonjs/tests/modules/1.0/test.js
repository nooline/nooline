define(["require","exports","module","system"],function(e,s){s.print=function(){var s=e("system"),n=s.stdio;n.print.apply(n,arguments)},s.assert=function(e,s){e?console.log("PASS "+s,"pass"):console.error("FAIL "+s,"fail")}});