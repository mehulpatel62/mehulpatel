var i=0;

function timedCount() {
    i=i+1;
	
    postMessage(i+3);
    setTimeout("timedCount()", 500);
}

timedCount();
