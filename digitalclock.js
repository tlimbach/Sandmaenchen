

function startTime(div, date) {
 
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById(div).innerHTML =  h + ":" + m + ":" + s;
  
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }