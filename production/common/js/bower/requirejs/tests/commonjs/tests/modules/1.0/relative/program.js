define(["require","exports","module","test","submodule/a","submodule/b"],function(){var e=null,o=null,u=null;e.assert(o.foo==u.foo,"a and b share foo through a relative require"),e.print("DONE","info")});