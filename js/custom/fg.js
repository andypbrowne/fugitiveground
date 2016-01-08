function validateEmail(str) {
  var x=str;
  var atpos=x.indexOf("@");
  var dotpos=x.lastIndexOf(".");
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
      return false;
    }
    return true;
}

$('#email').keyup(function(event){
  if(event.keyCode == 13){
    submitEmail();
  }
});

function submitEmail() {
  console.log($('#email').val());
  var email =$('#email').val();
  if(validateEmail(email)){
    //alert('success');
    $.ajax({
      url:'fg_EventHandler.php',
      type:'POST',
      data:{action:'fg_SaveEmail', email:email},
      timeout:5000,
      success:function(response,status){
         $('#confirm').html(response);
        //alert(response);
      },
      error:function(x,t,m){
        if(t==='timeout'){
          alert('timeout-try again');
        }
        else{
          alert(t);
        }
      },
      datatype:'text'
    });
    // do the ajax call
  //  $('#confirm').html('Thank You');
  }
  else{
    //alert('invlaid');
    $('#confirm').html('Invalid, please properly format your email address');
    return ;
  }

}


function init(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      var today = Date.create('today').addHours(12);
      var times = SunCalc.getTimes(today,lat,lng);
    //  console.log(lat);
      var sunsetTimes = times.sunset;
      var fgStart = sunsetTimes.addHours(-1);
      var fgStartHours;
      var fgStartMinutes;

      if(fgStart.getHours() < 10){
        fgStartHours='0'+fgStart.getHours();
      }
      else {
        fgStartHours=fgStart.getHours();
      }
      if(fgStart.getMinutes() < 10){
        fgStartMinutes='0'+fgStart.getMinutes();
      }
      else{
        fgStartMinutes=fgStart.getMinutes();
      }

      var fgEnd = sunsetTimes.addHours(2);
      var fgEndHours;
      var fgEndMinutes;

      if(fgEnd.getHours() < 10){
        fgEndHours='0'+fgEnd.getHours();
      }
      else {
        fgEndHours=fgEnd.getHours();
      }
      if(fgEnd.getMinutes() < 10){
        fgEndMinutes='0'+fgEnd.getMinutes();
      }
      else{
        fgEndMinutes=fgEnd.getMinutes();
      }
      $('#fg-start').html(fgStartHours +':'+ fgStartMinutes);
      $('#fg-end').html(fgEndHours+':'+fgEndMinutes);

      var moonIllumination = SunCalc.getMoonIllumination(today);
      var moonPhase = moonIllumination.phase;
      var moonPhaseDom='';
      console.log(moonPhase);
      if(moonPhase === 0 ){
        $('#mpd-tooltip').attr('title',"new moon");

        $('#mpd-img').attr('src','images/Moon_phase_0.svg');
      }
      else if(moonPhase > 0 && moonPhase < 0.25){
        $('#mpd-tooltip').attr('title',"waning crecent with", 'moonIllumination', "of the Moon's visible disk illuminated");

        $('#mpd-img').attr('src','images/Moon_phase_1.svg');
      }
      else if (moonPhase === 0.25){
        $('#mpd-tooltip').attr('title',"first quarter with", 'moonIllumination', "of the Moon's visible disk illuminated");

        $('#mpd-img').attr('src','images/Moon_phase_2.svg');
      }
      else if(moonPhase > 0.25 && moonPhase < 0.5){
        $('#mpd-tooltip').attr('title',"waxing gibbous with", 'moonIllumination', "of the Moon's visible disk illuminated");

        $('#mpd-img').attr('src','images/Moon_phase_3.svg');
      }
      else if(moonPhase === 0.5){
        $('#mpd-tooltip').attr('title',"full moon");

        $('#mpd-img').attr('src','images/Moon_phase_4.svg');
      }
      else if(moonPhase > 0.5 && moonPhase <0.75){
        $('#mpd-tooltip').attr('title',"waning gibbous with", 'moonIllumination', "of the Moon's visible disk illuminated");

        $('#mpd-img').attr('src','images/Moon_phase_5.svg');
      }
      else if(moonPhase === 0.75){
        $('#mpd-tooltip').attr('title',"last quarter with", 'moonIllumination', "of the Moon's visible disk illuminated");

        $('#mpd-img').attr('src','images/Moon_phase_6.svg');
      }
      else if(moonPhase > 0.75 && moonPhase < 1.0){
        $('#mpd-tooltip').attr('title',"waning crescent with", 'moonIllumination', "of the Moon's visible disk illuminated");

        $('#mpd-img').attr('src','images/Moon_phase_7.svg');
      }
      else {
			// no moon
      }
      // moonPhaseDom = '<span data-tooltip class="has-tip" title="waxing gibbous with 89% of the Moon''s visible disk illuminated"><img class="moon" src="images/Moon_phase_2.svg" alt="Moon phase 7"/></span>';
      //


    }, function(){
        handleNoGeoLocation(true);
    });

  }
  else {
    handleNoGeoLocation(false);
  }
}

function handleNoGeoLocation(errorFlag){
  // water st,new york lat lng coords

  if(errorFlag){

  }
  else{

  }
  var lat ='40.47';
  var lng ='73.58';
  var today = Date.create('today').addHours(12);
  var times = SunCalc.getTimes(today,lat,lng);

  var sunsetTimes = times.sunset;
  var fgStart = sunsetTimes.addHours(-1);
  var fgEnd = sunsetTimes.addHours(2);
  var fgStartHours;
  var fgStartMinutes;
  var fgEndHours;
  var fgEndMinutes;
  var h = fgStart.getHours();

  if(fgStart.getHours() < 10){
    fgStartHours='0'+fgStart.getHours();
  }
  else {
    fgStartHours=fgStart.getHours();
  }
  if(fgStart.getMinutes() < 10){
    fgStartMinutes='0'+fgStart.getMinutes();
  }
  else{
    fgStartMinutes=fgStart.getMinutes();
  }
  if(fgEnd.getHours() < 10){
    fgEndHours='0'+fgEnd.getHours();
  }
  else {
    fgEndHours=fgEnd.getHours();
  }
  if(fgEnd.getMinutes() < 10){
    fgEndMinutes='0'+fgEnd.getMinutes();
  }
  else{
    fgEndMinutes=fgEnd.getMinutes();
  }

  $('#fg-start').html(fgStartHours+':'+fgStartMinutes);
  $('#fg-end').html(fgEndHours+':'+fgEndMinutes);
}


function fgGenerateData(){
	
	var lat;
	var lng;
	var sunDate;
	var times;
	var fgSunsetTime;
	var fgSunsetTimeHour;
	var fgSunsetTimeMinutes;
	var moonIllumination;
	var moonPhase;
	var out='';
	var printDate;
	var today = Date.create('today').addHours(12);
	if(navigator.geolocation){
    		navigator.geolocation.getCurrentPosition(function(position){
    			lat = position.coords.latitude;
      			lng = position.coords.longitude;
      			
      			var tempDate;
				var range = Date.range('2016','2017');
//                var index =0;
				range.every('day', function(date){

      				tempDate = new Date.create(date);
      				sunDate  = tempDate.addHours(12);
      				times = SunCalc.getTimes(sunDate,lat,lng);
//      		console.log(lat);
//      		console.log(lng);
//      		console.log(times.sunset);
      				fgSunsetTime = times.sunset;
      				if(fgSunsetTime.getHours() < 10){
        				fgSunsetTimeHour='0'+fgSunsetTime.getHours();
      				}
      				else {
        				fgSunsetTimeHour=fgSunsetTime.getHours();
      				}
      				if(fgSunsetTime.getMinutes() < 10){
		        		fgSunsetTimeMinutes='0'+fgSunsetTime.getMinutes();
      				}
		      		else{
        				fgSunsetTimeMinutes=fgSunsetTime.getMinutes();
      				}
		      		printDate = date.format('{yyyy}/{MM}/{dd}');
      				out = '<span>'+ printDate +', ' +fgSunsetTimeHour+':'+fgSunsetTimeMinutes+'</span><br>';
      				
//                    $data[index] = printDate +' '
//                    +fgSunsetTimeHour+':'+fgSunsetTimeMinutes;
//                    index++;
      				$('#dateRange').html($('#dateRange').html()+out);
      			});
      	
      			
      			
    		});
    }
}
