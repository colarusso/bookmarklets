var level = 1;

function createCookie(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function find_sec() {
  timer_text = $('#timer').val().split(":");
  if ((timer_text[0]*1 >= 0) & (timer_text[1]*1 >= 0) & (timer_text[2]*1 >= 0)) {
    seconds = timer_text[2]*1, minutes = timer_text[1]*1, hours = timer_text[0]*1;
    t = seconds + minutes*60 + hours*60*60;
    createCookie('l'+level+'timer',$('#timer').val(),36500);
  } else {
    $('#timer').val( (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds) );
    alert('There was a problem with you time entry. It must be of the form HH:MM:SS. \nIt has been reset to the value it held before your edit.');
  }
}

function add() {
    // inspired by https://jsfiddle.net/Daniel_Hug/pvk6p/

    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    $('#timer').val( (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds) );

    timer();
}

function timer() {
    t = setTimeout(add, 1000);
    //if (t % 2 == 0) {
    createCookie('l'+level+'timer',$('#timer').val(),36500);
    //}
}

function start_time() {
  timer();
  $('#play').hide();
  $('#pause').show();
  $('#timer_div').css("background-color", "#c2fcd8");
  $('#timer').css("background-color", "#c2fcd8");
}

function pause_time() {
  clearTimeout(t);
  $('#play').show();
  $('#pause').hide();
  $('#timer_div').css("background-color", "white");
  $('#timer').css("background-color", "white");
}

var head = document.getElementsByTagName('head')[0];  
var link = document.createElement('link'); 
link.rel = 'stylesheet';  
link.type = 'text/css'; 
link.href = 'https://colarusso.github.io/bookmarklets/timer/style.css';  
head.appendChild(link);  

var head = document.getElementsByTagName('head')[0];  
var script = document.createElement('script'); 
script.src = 'https://code.jquery.com/jquery-1.11.1.min.js';  
head.appendChild(script);  

var head = document.getElementsByTagName('head')[0];  
var script = document.createElement('script'); 
script.src = 'https://code.jquery.com/ui/1.11.1/jquery-ui.js';  
head.appendChild(script);  

timer_html = document.createElement( 'div' );
timer_html.id = "timer_div";
timer_html.classList.add('timer_div');
timer_html.innerHTML = `
  <div style="float:left;margin-right:3px;"><input id="timer" type=text style="width:76px;height:24px;font-size:18px;line-height:18px;text-align:center;border:0px;background:#fff;margin:0 5px" value="00:00:00" onfocus="pause_time();" onChange="find_sec();"></div>
  <div id="play" class="play" onClick="start_time()"></div>
  <div id="pause" class="pause" onClick="pause_time()">
    <div class="pause_bar"></div>
    <div class="pause_bar"></div>
  </div>
`;
container_block = document.body;
container_block.appendChild( timer_html );

if (readCookie('l'+level+'timer')){
  $('#timer').val(readCookie('l'+level+'timer'));
  find_sec();
   if (seconds >= 60) {
       seconds = 0;
       minutes++;
       if (minutes >= 60) {
           minutes = 0;
           hours++;
       }
   }
   $('#timer').val( (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds) );
} else {
  var seconds = 0, minutes = 0, hours = 0, t;
}
