var i = 0;
var ival = setInterval(function(){document.getElementById("test").style.width = i;i++}, 100);
setTimeout(function(){clearInterval(ival)}, 100000)
