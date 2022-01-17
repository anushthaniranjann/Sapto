
//------------Calendar Auth-----------------
 // Client ID and API key from the Developer Console
      var CLIENT_ID = '1035544781485-i224p6vlog86fa26aull2vb1tr64tmtf.apps.googleusercontent.com';
      var API_KEY = 'AIzaSyBE_GGCjthGfvHMzOS81ZTpcBIKRAsXBpM';
      
      // Array of API discovery doc URLs for APIs used by the quickstart
      var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      var SCOPES = "https://www.googleapis.com/auth/calendar";

      var authorizeButton = document.getElementById('calendar');

/**
       *  On load, called to load the auth2 library and API client library.
       */
      function handleClientLoad() {
        gapi.load('client:auth2', initClient);
      }
            function handleSignoutClick(event) {
        gapi.auth2.getAuthInstance().signOut();
      }

      /**
       *  Sign in the user upon button click.
       */


            function handleAuthClick(event) {
        gapi.auth2.getAuthInstance().signIn();
      }

      /**
       *  Initializes the API client library and sets up sign-in state
       *  listeners.
       */
      function initClient() {
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES
        }).then(function () {
        	gapi.client.load('calendar', 'v3')
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          authorizeButton.onclick = handleAuthClick;
        }, function(error) {
          console.log(JSON.stringify(error, null, 2));
        });
      }

      /**
       *  Called when the signed in status changes, to update the UI
       *  appropriately. After a sign-in, the API is called.
       */
      function updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
          authorizeButton.style.display = 'none';
     var event0 = {
  'summary': 'Meal 1',
  'location': 'home',
  'attendees': [],
  'description': 'p('+($('#pr1').text()) +')'+ ' c('+($('#cr1').text()) +')'+ ' f('+($('#fa1').text())+')',
  'start': {
    'dateTime': $('#ti1').text(),
    'timeZone': 'Asia/Calcutta'
  },
  'end': {
    'dateTime': $('#ti1').text(),
    'timeZone': 'Asia/Calcutta'
  },
  'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=7'
  ],
  'reminders': {
    'useDefault': false,
    'overrides': [
      {'method': 'popup', 'minutes': 10}
    ]
  }
};
var event1 = {
  'summary': 'Meal 2',
  'location': 'home',
  'attendees': [],
  'description': 'p('+($('#pr2').text()) +')' +' c('+($('#cr2').text()) + ')'+ ' f('+($('#fa2').text())+')',
  'start': {
    'dateTime': $('#ti2').text(),
    'timeZone': 'Asia/Calcutta'
  },
  'end': {
    'dateTime': $('#ti2').text(),
    'timeZone': 'Asia/Calcutta'
  },
  'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=7'
  ],
  'reminders': {
    'useDefault': false,
    'overrides': [
      {'method': 'popup', 'minutes': 10}
    ]
  }
};
var event2 = {
  'summary': 'Meal 3',
  'location': 'home',
  'attendees': [],
  'description': 'p('+($('#pr3').text()) +')'+ ' c('+($('#cr3').text()) +')'+ ' f('+($('#fa3').text())+')',
  'start': {
    'dateTime': $('#ti3').text(),
    'timeZone': 'Asia/Calcutta'
  },
  'end': {
    'dateTime': $('#ti3').text(),
    'timeZone': 'Asia/Calcutta'
  },
  'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=7'
  ],
  'reminders': {
    'useDefault': false,
    'overrides': [
      {'method': 'popup', 'minutes': 10}
    ]
  }
};
if($('#pr4').text()){
var event3 = {
  'summary': 'Meal 4',
  'location': 'home',
  'attendees': [],
  'description': 'p('+($('#pr4').text()) + ')' +' c('+($('#cr4').text()) + ')' + ' f('+($('#fa4').text())+')',
  'start': {
    'dateTime': $('#ti4').text(),
    'timeZone': 'Asia/Calcutta'
  },
  'end': {
    'dateTime': $('#ti4').text(),
    'timeZone': 'Asia/Calcutta'
  },
  'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=7'
  ],
  'reminders': {
    'useDefault': false,
    'overrides': [
      {'method': 'popup', 'minutes': 10}
    ]
  }
};
}
if($('#pr5').text()){
var event4 = {
  'summary': 'Meal 5',
  'location': 'home',
  'attendees': [],
  'description': 'p('+($('#pr5').text()) +')'+ ' c('+($('#cr5').text()) + ')'+ ' f('+($('#fa5').text())+')',
  'start': {
    'dateTime': $('#ti5').text(),
    'timeZone': 'Asia/Calcutta'
  },
  'end': {
    'dateTime': $('#ti5').text(),
    'timeZone': 'Asia/Calcutta'
  },
  'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=7'
  ],
  'reminders': {
    'useDefault': false,
    'overrides': [
      {'method': 'popup', 'minutes': 10}
    ]
  }
};
}
if($('#pr6').text()){
var event5 = {
  'summary': 'Meal 6',
  'location': 'home',
  'attendees': [],
  'description': 'p('+($('#pr6').text()) +')'+ ' c('+($('#cr6').text()) + ')'+' f('+($('#fa6').text())+')',
  'start': {
    'dateTime': $('#ti6').text(),
    'timeZone': 'Asia/Calcutta'
  },
  'end': {
    'dateTime': $('#ti6').text(),
    'timeZone': 'Asia/Calcutta'
  },
  'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=7'
  ],
  'reminders': {
    'useDefault': false,
    'overrides': [
      {'method': 'popup', 'minutes': 10}
    ]
  }
};
}

			var request = gapi.client.calendar.events.insert({
			  'calendarId': 'primary',
			  'resource': event0
			});
			var request1 = gapi.client.calendar.events.insert({
			  'calendarId': 'primary',
			  'resource': event1
			});
			var request2 = gapi.client.calendar.events.insert({
			  'calendarId': 'primary',
			  'resource': event2
			});	
			if($('#pr4').text()){	
			var request3 = gapi.client.calendar.events.insert({
			  'calendarId': 'primary',
			  'resource': event3
			});
		}
			if($('#pr5').text()){
			var request4 = gapi.client.calendar.events.insert({
			  'calendarId': 'primary',
			  'resource': event4
			});
		}
			if($('#pr6').text()){
			var request5 = gapi.client.calendar.events.insert({
			  'calendarId': 'primary',
			  'resource': event5
			});
		}
if(request){	
request.execute(function(event) {
  console.log('Event created: ' + event.htmlLink);

});
}
if(request1){
request1.execute(function(event) {
  console.log('Event created: ' + event.htmlLink);

});
if(request2){
request2.execute(function(event) {
  console.log('Event created: ' + event.htmlLink);

});
}
if(request3){
request3.execute(function(event) {
  console.log('Event created: ' + event.htmlLink);

});
}
if(request4){
request4.execute(function(event) {
  console.log('Event created: ' + event.htmlLink);

});
}
if(request5){
request5.execute(function(event) {
  console.log('Event created: ' + event.htmlLink);

});
}
        } else {
          authorizeButton.style.display = 'block';
        }
      }

setTimeout(handleSignoutClick(), 3000);

};



var today = new Date();
var dd = today.getDate()+1;

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = yyyy+'-'+mm+'-'+dd;
	$("#time0").val("08:00");
		$("#gDate0").val(today + "T" + ($("#time0").val()));
	$("#time1").val("11:00");
		$("#gDate1").val(today + "T" + ($("#time1").val()));
	$("#time2").val("13:00");
		$("#gDate2").val(today + "T" + ($("#time2").val()));
	$("#time3").val("16:00");
		$("#gDate3").val(today + "T" + ($("#time3").val()));	
	$("#time4").val("20:00");
		$("#gDate4").val(today + "T" + ($("#time4").val()));
	$("#time5").val("22:00");
		$("#gDate5").val(today + "T" + ($("#time5").val()));
 	

$("#time0").on('input', ()=>{
	$("#gDate0").val(today + "T" + ($("#time0").val()));
});
$("#time1").on('input', ()=>{
	$("#gDate1").val(today + "T" + ($("#time1").val()));
});
$("#time2").on('input', ()=>{
	$("#gDate2").val(today + "T" + ($("#time2").val()));
});
$("#time3").on('input', ()=>{
	$("#gDate3").val(today + "T" + ($("#time3").val()));
});
$("#time4").on('input', ()=>{
	$("#gDate4").val(today + "T" + ($("#time4").val()));
});
$("#time5").on('input', ()=>{
	$("#gDate5").val(today + "T" + ($("#time5").val()));
});


$("#cut").on("click", ()=>{
	$("#plan").val("CUT");

	$("#plans").fadeOut(400, ()=>{
		$(this).remove();
	});
	$("#cal").text(Math.round((Number($("#bmr").text())-500 + Number.EPSILON)*10)/10);
		var fat = 0.3 *Number($("#cal").text())/ 9;
		var protein = 0.3 *Number($("#cal").text())/ 4;
		var carbo = 0.4 *Number($("#cal").text())/ 4;
	$(".p").val(Math.round(((protein/Number($("#nM").text()))+Number.EPSILON)*10)/10);
	$(".f").val(Math.round(((fat/Number($("#nM").text()))+Number.EPSILON)*10)/10);
	$(".c").val(Math.round(((carbo/Number($("#nM").text()))+Number.EPSILON)*10)/10);
	$("#chart").hide().delay(500).fadeIn(500, ()=>{
		$(this).removeClass("method");
		});


	$("#prot0").attr({
		"max": protein,
		"min": 0
	});

	$("#prot0").on('input',()=>{
		$("#prot1").attr({
		"max": (protein-Number($("#prot0").val())),
		"min": 0});
		$("#prot1").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#prot2").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#prot3").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#prot4").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)

	});

	$("#prot1").on('input',()=>{
		$("#prot2").attr({
		"max": (protein-Number($("#prot0").val())-Number($("#prot1").val())),
		"min": 0});
		$("#prot2").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#prot3").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#prot4").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)

	});

	$("#prot2").on('input',()=>{
		$("#prot3").attr({
		"max": (protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())),
		"min": 0});
		$("#prot3").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#prot4").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)

	});
	$("#prot3").on('input',()=>{
		$("#prot4").attr({
		"max": (protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val())),
		"min": 0});
		$("#prot4").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)

	});
	$("#prot4").on('input',()=>{
		$("#prot5").attr({
		"max": (protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val())-Number($("#prot4").val())),
		"min": 0});
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val())-Number($("#prot4").val()))/(Number($("#nM").text()))-5)+Number.EPSILON)*10)/10)

	});

	$("#carbs0").attr({
		"max": carbo,
		"min": 0
	});

	$("#carbs0").on('input',()=>{
		$("#carbs1").attr({
		"max": (carbo-Number($("#carbs0").val())),
		"min": 0});
		$("#carbs1").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#carbs2").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#carbs3").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#carbs4").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)

	});

	$("#carbs1").on('input',()=>{
		$("#carbs2").attr({
		"max": (carbo-Number($("#carbs0").val())-Number($("#carbs1").val())),
		"min": 0});
		$("#carbs2").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#carbs3").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#carbs4").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)

	});

	$("#carbs2").on('input',()=>{
		$("#carbs3").attr({
		"max": (carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())),
		"min": 0});
		$("#carbs3").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#carbs4").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)

	});
	$("#carbs3").on('input',()=>{
		$("#carbs4").attr({
		"max": (carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val())),
		"min": 0});
		$("#carbs4").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)

	});
	$("#carbs4").on('input',()=>{
		$("#carbs5").attr({
		"max": (carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val())-Number($("#carbs4").val())),
		"min": 0});
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val())-Number($("#carbs4").val()))/(Number($("#nM").text()))-5)+Number.EPSILON)*10)/10)

	});

	$("#fat0").attr({
		"max": fat,
		"min": 0
	});
	$("#fat0").on('input',()=>{
		$("#fat1").attr({
		"max": (fat-Number($("#fat0").val())),
		"min": 0});
		$("#fat1").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#fat2").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#fat3").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#fat4").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)

	});

	$("#fat1").on('input',()=>{
		$("#fat2").attr({
		"max": (fat-Number($("#fat0").val())-Number($("#fat1").val())),
		"min": 0});
		$("#fat2").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#fat3").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#fat4").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)

	});

	$("#fat2").on('input',()=>{
		$("#fat3").attr({
		"max": (fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())),
		"min": 0});
		$("#fat3").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#fat4").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)

	});
	$("#fat3").on('input',()=>{
		$("#fat4").attr({
		"max": (fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val())),
		"min": 0});
		$("#fat4").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)

	});
	$("#fat4").on('input',()=>{
		$("#fat5").attr({
		"max": (fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val())-Number($("#fat4").val())),
		"min": 0});
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val())-Number($("#fat4").val()))/(Number($("#nM").text()))-5)+Number.EPSILON)*10)/10)

	});

});


$("#maintain").on("click", ()=>{
	$("#plan").val("MAINTAIN");


	$("#plans").fadeOut(400, ()=>{
		$(this).remove();
	});
	$("#cal").text(Math.round((Number($("#bmr").text())+Number.EPSILON)*10)/10);
		var fat = 0.3 *Number($("#cal").text())/ 9;
		var protein = 0.3 *Number($("#cal").text())/ 4;
		var carbo = 0.4 *Number($("#cal").text())/ 4;
	$(".p").val(Math.round(((protein/Number($("#nM").text()))+Number.EPSILON)*10)/10);
	$(".f").val(Math.round(((fat/Number($("#nM").text()))+Number.EPSILON)*10)/10);
	$(".c").val(Math.round(((carbo/Number($("#nM").text()))+Number.EPSILON)*10)/10);
	$("#chart").hide().delay(500).fadeIn(500, ()=>{
		$(this).removeClass("method");
	});
	$("#prot0").attr({
		"max": protein,
		"min": 0
	});

	$("#prot0").on('input',()=>{
		$("#prot1").attr({
		"max": (protein-Number($("#prot0").val())),
		"min": 0});
		$("#prot1").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#prot2").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#prot3").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#prot4").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)

	});

	$("#prot1").on('input',()=>{
		$("#prot2").attr({
		"max": (protein-Number($("#prot0").val())-Number($("#prot1").val())),
		"min": 0});
		$("#prot2").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#prot3").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#prot4").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)

	});

	$("#prot2").on('input',()=>{
		$("#prot3").attr({
		"max": (protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())),
		"min": 0});
		$("#prot3").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#prot4").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)

	});
	$("#prot3").on('input',()=>{
		$("#prot4").attr({
		"max": (protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val())),
		"min": 0});
		$("#prot4").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)

	});
	$("#prot4").on('input',()=>{
		$("#prot5").attr({
		"max": (protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val())-Number($("#prot4").val())),
		"min": 0});
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val())-Number($("#prot4").val()))/(Number($("#nM").text()))-5)+Number.EPSILON)*10)/10)

	});

	$("#carbs0").attr({
		"max": carbo,
		"min": 0
	});

	$("#carbs0").on('input',()=>{
		$("#carbs1").attr({
		"max": (carbo-Number($("#carbs0").val())),
		"min": 0});
		$("#carbs1").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#carbs2").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#carbs3").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#carbs4").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)

	});

	$("#carbs1").on('input',()=>{
		$("#carbs2").attr({
		"max": (carbo-Number($("#carbs0").val())-Number($("#carbs1").val())),
		"min": 0});
		$("#carbs2").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#carbs3").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#carbs4").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)

	});

	$("#carbs2").on('input',()=>{
		$("#carbs3").attr({
		"max": (carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())),
		"min": 0});
		$("#carbs3").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#carbs4").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)

	});
	$("#carbs3").on('input',()=>{
		$("#carbs4").attr({
		"max": (carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val())),
		"min": 0});
		$("#carbs4").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)

	});
	$("#carbs4").on('input',()=>{
		$("#carbs5").attr({
		"max": (carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val())-Number($("#carbs4").val())),
		"min": 0});
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val())-Number($("#carbs4").val()))/(Number($("#nM").text()))-5)+Number.EPSILON)*10)/10)

	});

	$("#fat0").attr({
		"max": fat,
		"min": 0
	});
	$("#fat0").on('input',()=>{
		$("#fat1").attr({
		"max": (fat-Number($("#fat0").val())),
		"min": 0});
		$("#fat1").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#fat2").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#fat3").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#fat4").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)

	});

	$("#fat1").on('input',()=>{
		$("#fat2").attr({
		"max": (fat-Number($("#fat0").val())-Number($("#fat1").val())),
		"min": 0});
		$("#fat2").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#fat3").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#fat4").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)

	});

	$("#fat2").on('input',()=>{
		$("#fat3").attr({
		"max": (fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())),
		"min": 0});
		$("#fat3").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#fat4").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)

	});
	$("#fat3").on('input',()=>{
		$("#fat4").attr({
		"max": (fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val())),
		"min": 0});
		$("#fat4").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)

	});
	$("#fat4").on('input',()=>{
		$("#fat5").attr({
		"max": (fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val())-Number($("#fat4").val())),
		"min": 0});
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val())-Number($("#fat4").val()))/(Number($("#nM").text()))-5)+Number.EPSILON)*10)/10)

	})

});

$("#bulk").on("click", ()=>{
	$("#plan").val("BULK");


	$("#plans").fadeOut(400, ()=>{
		$(this).remove();
	});
	$("#cal").text(Math.round((Number($("#bmr").text())+500 + Number.EPSILON)*10)/10);
		var fat = 0.3 *Number($("#cal").text())/ 9;
		var protein = 0.3 *Number($("#cal").text())/ 4;
		var carbo = 0.4 *Number($("#cal").text())/ 4;
	$(".p").val(Math.round(((protein/Number($("#nM").text()))+Number.EPSILON)*10)/10);
	$(".f").val(Math.round(((fat/Number($("#nM").text()))+Number.EPSILON)*10)/10);
	$(".c").val(Math.round(((carbo/Number($("#nM").text()))+Number.EPSILON)*10)/10);
	$("#chart").hide().delay(500).fadeIn(500, ()=>{
		$(this).removeClass("method");
		});

	
	$("#prot0").attr({
		"max": protein,
		"min": 0
	});

	$("#prot0").on('input',()=>{
		$("#prot1").attr({
		"max": (protein-Number($("#prot0").val())),
		"min": 0});
		$("#prot1").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#prot2").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#prot3").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#prot4").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)

	});

	$("#prot1").on('input',()=>{
		$("#prot2").attr({
		"max": (protein-Number($("#prot0").val())-Number($("#prot1").val())),
		"min": 0});
		$("#prot2").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#prot3").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#prot4").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)

	});

	$("#prot2").on('input',()=>{
		$("#prot3").attr({
		"max": (protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())),
		"min": 0});
		$("#prot3").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#prot4").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)

	});
	$("#prot3").on('input',()=>{
		$("#prot4").attr({
		"max": (protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val())),
		"min": 0});
		$("#prot4").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)

	});
	$("#prot4").on('input',()=>{
		$("#prot5").attr({
		"max": (protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val())-Number($("#prot4").val())),
		"min": 0});
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val())-Number($("#prot4").val()))/(Number($("#nM").text()))-5)+Number.EPSILON)*10)/10)

	});

	$("#carbs0").attr({
		"max": carbo,
		"min": 0
	});

	$("#carbs0").on('input',()=>{
		$("#carbs1").attr({
		"max": (carbo-Number($("#carbs0").val())),
		"min": 0});
		$("#carbs1").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#carbs2").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#carbs3").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#carbs4").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)

	});

	$("#carbs1").on('input',()=>{
		$("#carbs2").attr({
		"max": (carbo-Number($("#carbs0").val())-Number($("#carbs1").val())),
		"min": 0});
		$("#carbs2").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#carbs3").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#carbs4").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)

	});

	$("#carbs2").on('input',()=>{
		$("#carbs3").attr({
		"max": (carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())),
		"min": 0});
		$("#carbs3").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#carbs4").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)

	});
	$("#carbs3").on('input',()=>{
		$("#carbs4").attr({
		"max": (carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val())),
		"min": 0});
		$("#carbs4").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)

	});
	$("#carbs4").on('input',()=>{
		$("#carbs5").attr({
		"max": (carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val())-Number($("#carbs4").val())),
		"min": 0});
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val())-Number($("#carbs4").val()))/(Number($("#nM").text()))-5)+Number.EPSILON)*10)/10)

	});

	$("#fat0").attr({
		"max": fat,
		"min": 0
	});
	$("#fat0").on('input',()=>{
		$("#fat1").attr({
		"max": (fat-Number($("#fat0").val())),
		"min": 0});
		$("#fat1").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#fat2").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#fat3").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#fat4").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)

	});

	$("#fat1").on('input',()=>{
		$("#fat2").attr({
		"max": (fat-Number($("#fat0").val())-Number($("#fat1").val())),
		"min": 0});
		$("#fat2").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#fat3").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#fat4").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)

	});

	$("#fat2").on('input',()=>{
		$("#fat3").attr({
		"max": (fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())),
		"min": 0});
		$("#fat3").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#fat4").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)

	});
	$("#fat3").on('input',()=>{
		$("#fat4").attr({
		"max": (fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val())),
		"min": 0});
		$("#fat4").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)

	});
	$("#fat4").on('input',()=>{
		$("#fat5").attr({
		"max": (fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val())-Number($("#fat4").val())),
		"min": 0});
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val())-Number($("#fat4").val()))/(Number($("#nM").text()))-5)+Number.EPSILON)*10)/10)

	})
});
