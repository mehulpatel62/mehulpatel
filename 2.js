var i=0;

function timedCount() {
    i=i+1;
	
    postMessage(i+1);
    setTimeout("timedCount()", 500);
}

timedCount();
