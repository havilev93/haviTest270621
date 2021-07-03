var i = 0;

function timedCount() {
  i++;
  i % 3 == 0 && postMessage(i);
  setTimeout("timedCount()", 500);
}

timedCount();
