function show()
{ 
var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var session = "AM";
if(h>12)
{
	h=h-12;
	session = "PM";
}
if(h<10)
{
	h = "0" + h;
}
if(m<10)
{
	m = "0" + m;
}
if(s<10)
{
	s = "0" + s;
}

var time = h + ":" + m + ":" + s + " " +session ;
document.getElementById("watch").innerHTML = time;
setTimeout(show,1000)
}

show();