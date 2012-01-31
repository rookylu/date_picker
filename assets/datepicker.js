var getElementsByClassName=function (classname, parent, nodename) {
  if(document.getElementsByClassName){
        return  document.getElementsByClassName(classname)
  }else{ 
    var s = (parent || document).getElementsByTagName(nodename || "*");
    return function () {
        var a = [];
        for (var i = 0, j = s.length; i < j; i++) {
            if (!s[i].className) continue;
            var name = " " + s[i].className + " ";
            if (name.indexOf(" " + classname + " ") != -1) {
                a.push(s[i]);
            }
        }
        return a;
    } ();
  }
}

 window.onload = function() {
      var anchors = getElementsByClassName('datepicker');
      for(var i = 0; i < anchors.length; i++) {
          var anchor = anchors[i];
          anchor.onclick = function() {
             WdatePicker({dateFmt:'yyyy-MM-dd'});
          }
      }
  }

