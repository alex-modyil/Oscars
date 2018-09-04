/*-----------------------------------------------------------------------------------
/*
/* Main JS
/*
-----------------------------------------------------------------------------------*/  

(function($) {

   /*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
   $(window).load(function() {

      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      });     

  	})

   /*---------------------------------------------------- */
	/* Final Countdown Settings
	------------------------------------------------------ */
	var finalDate = '2017/01/01';

	$('div#counter').countdown(finalDate)
   	.on('update.countdown', function(event) {

   		$(this).html(event.strftime('<span>%D <em>days</em></span>' + 
   										 	 '<span>%H <em>hours</em></span>' + 
   										 	 '<span>%M <em>minutes</em></span>' +
   										 	 '<span>%S <em>seconds</em></span>'));

   });

   /*----------------------------------------------------*/
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */  	 
	$('input').placeholder() 
	

   /*----------------------------------------------------- */
   /* Modals
   ------------------------------------------------------- */   
   $('.modal-toggles ul').on('click', 'a', function(e) {

   	var html = $('html'),
   		 main = $('main, footer'),
   		 footer = $('footer'),           
          curMod = $(this).attr('href'),  
          modal = $(curMod),
          modClose = modal.find('#modal-close');          
         
		main.fadeOut(500, function(){
			$('html,body').scrollTop(0);
        	modal.addClass('is-visible');
      });  
      
      e.preventDefault();

      // for old ie
      if (html.hasClass('oldie')) {

      	$(document).on('click', "#modal-close", function(evt) {
	      	$('html,body').scrollTop(0); 
	      	modal.removeClass('is-visible');
	      	setTimeout(function() {      
	        		main.fadeIn(500); 
	        	}, 500);       
	        	        
	        	evt.preventDefault();
      	});

      }
      // other browsers
      else {

      	modClose.on('click', function(evt) {
	      	$('html,body').scrollTop(0); 
	      	modal.removeClass('is-visible');
	      	setTimeout(function() {      
	        		main.fadeIn(500); 
	        	}, 500);       
	        	        
	        	evt.preventDefault();
	      });

      }     	

   });

   /*---------------------------------------------------- */
	/* Owl Carousel
	------------------------------------------------------ */ 
	$("#owl-slider").owlCarousel({
        navigation: false,
        pagination: true,
        items: 4,
        navigationText: false
    });


   /*----------------------------------------------------*/
  	/* FitText Settings
  	------------------------------------------------------ */
  	setTimeout(function() {

   	  $('main h1, #mod-about h1').fitText(1.1, { minFontSize: '28px', maxFontSize: '38px' });

  	}, 100);


   /*---------------------------------------------------- */
   /* ajaxchimp
	------------------------------------------------------ */

	// Example MailChimp url: http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
	var mailChimpURL = 'http://wordpress.us15.list-manage.com/subscribe/post?u=f9e72c07460fadd5badedf7a8&amp;id=a11470e4e9'


	$('#mc-form').ajaxChimp({

		language: 'es',
	   url: mailChimpURL

	});

	// Mailchimp translation
	//
	//  Defaults:
	//	 'submit': 'Submitting...',
	//  0: 'We have sent you a confirmation email',
	//  1: 'Please enter a value',
	//  2: 'An email address must contain a single @',
	//  3: 'The domain portion of the email address is invalid (the portion after the @: )',
	//  4: 'The username portion of the email address is invalid (the portion before the @: )',
	//  5: 'This email address looks fake or invalid. Please enter a real email address'

	$.ajaxChimp.translations.es = {
	  'submit': 'Submitting...',
	  0: '<i class="fa fa-check"></i> We have sent you a confirmation email',
	  1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
	  2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
	}

	/*---------------------------------------------------- */
	/* Map
	------------------------------------------------------ */
	var latitude = 14.549072,
		 longitude = 121.046958,
		 map_zoom = 15,		 
		 main_color = '#d8ac00',
		 saturation_value= -30,
		 brightness_value= 5,
		 winWidth = $(window).width();		 

   // marker url
	if ( winWidth > 480 ) {
		marker_url = 'images/icon-location-b.png';                    
   } else {
      marker_url = 'images/icon-location.png';            
   }	 

	// map style
	var style = [ 
		{
			// set saturation for the labels on the map
			elementType: "labels",
			stylers: [
				{ saturation: saturation_value }
			]
		},  
	   {	// poi stands for point of interest - don't show these lables on the map 
			featureType: "poi",
			elementType: "labels",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			// don't show highways lables on the map
	      featureType: 'road.highway',
	      elementType: 'labels',
	      stylers: [
	         { visibility: "off" }
	      ]
	   }, 
		{ 	
			// don't show local road lables on the map
			featureType: "road.local", 
			elementType: "labels.icon", 
			stylers: [
				{ visibility: "off" } 
			] 
		},
		{ 
			// don't show arterial road lables on the map
			featureType: "road.arterial", 
			elementType: "labels.icon", 
			stylers: [
				{ visibility: "off" }
			] 
		},
		{
			// don't show road lables on the map
			featureType: "road",
			elementType: "geometry.stroke",
			stylers: [
				{ visibility: "off" }
			]
		}, 
		// style different elements on the map
		{ 
			featureType: "transit", 
			elementType: "geometry.fill", 
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}, 
		{
			featureType: "poi",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.government",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.sport_complex",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.attraction",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.business",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit.station",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "landscape",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
			
		},
		{
			featureType: "road",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}, 
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}
	];
		
	// map options
	var map_options = {

      	center: new google.maps.LatLng(latitude, longitude),
      	zoom: 15,
      	panControl: false,
      	zoomControl: false,
        	mapTypeControl: false,
      	streetViewControl: false,
      	mapTypeId: google.maps.MapTypeId.ROADMAP,
      	scrollwheel: false,
      	styles: style

    	};

   // inizialize the map
	var map = new google.maps.Map(document.getElementById('map-container'), map_options);

	// add a custom marker to the map				
	var marker = new google.maps.Marker({

		 	position: new google.maps.LatLng(latitude, longitude),
		 	map: map,
		 	visible: true,
		 	icon: marker_url
		 
		});

	// add custom buttons for the zoom-in/zoom-out on the map
	function CustomZoomControl(controlDiv, map) {
	
		// grap the zoom elements from the DOM and insert them in the map 
	 	var controlUIzoomIn= document.getElementById('map-zoom-in'),
		  	 controlUIzoomOut= document.getElementById('map-zoom-out');

		controlDiv.appendChild(controlUIzoomIn);
		controlDiv.appendChild(controlUIzoomOut);

		// Setup the click event listeners and zoom-in or out according to the clicked element
		google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
			map.setZoom(map.getZoom()+1)
		});
		google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
			map.setZoom(map.getZoom()-1)
		});
			
	}

	var zoomControlDiv = document.createElement('div');
	var zoomControl = new CustomZoomControl(zoomControlDiv, map);

	// insert the zoom div on the top right of the map
	map.controls[google.maps.ControlPosition.TOP_RIGHT].push(zoomControlDiv);
	
	var endDate = new Date('2017-02-27T00:00:00');

	  $(window).on('load', function() {
		var labels = ['days', 'hours', 'minutes', 'seconds'],
		  end = endDate,
		  currDate = '00:00:00:00:00',
		  nextDate = '00:00:00:00:00',
		  parser = /([0-9]{2})/gi,
          $example = $('#counter');		  
		// Parse countdown string to an object
		function strfobj(str) {
		  var parsed = str.match(parser),
			obj = {};
		  labels.forEach(function(label, i) {
			obj[label] = parsed[i]
		  });
		  return obj;
		}
		// Return the time components that diffs
		function diff(obj1, obj2) {
		  var diff = [];
		  labels.forEach(function(key) {
			if (obj1[key] !== obj2[key]) {
			  diff.push(key);
			}
		  });
		  return diff;
		}

		// Starts the countdown
		$example.countdown(end, function(event) {
		  var newDate = event.strftime('%w:%d:%H:%M:%S'),
			data;
		  if (newDate !== nextDate) {
			currDate = nextDate;
			nextDate = newDate;
			// Setup the data
			data = {
			  'curr': strfobj(currDate),
			  'next': strfobj(nextDate)
			};
			// Apply the new values to each node that changed
			diff(data.curr, data.next).forEach(function(label) {
			  var selector = '.%s'.replace(/%s/, label),
				  $node = $example.find(selector);
			  // Update the node
			  $node.removeClass('flip');
			  $node.find('.curr').text(data.curr[label]);
			  $node.find('.next').text(data.next[label]);
			  // Wait for a repaint to then flip
			  _.delay(function($node) {
				$node.addClass('flip');
			  }, 50, $node);
			});
		  }
		});
	  });

			
$(document).ready(function(){
		
	    var today = new Date();
	    if(today > endDate) {
			$('#counter').hide();
			$('#mc-signup').hide();			
			$('#votelink').hide();
			
			var params = {};
			var body = {};
			var additionalParams = {};
			
			var apigClient = apigClientFactory.newClient();
            apigClient.oscarresultsGet(params, body, additionalParams)
				.then(function(result){
					$("#bpic").text("Best Picture : " +result.data.key1);
					$("#bdic").text("Best Director : " +result.data.key2);
					$("#bffic").text("Best Foreign Film : "+result.data.key3);					
				}).catch( function(result){
				  alert("Something bad happened");
				});					
			$('#ocarsresults').show();				
		}
		else {
			$('#ocarsresults').hide();			
		}
		
		$("#left-panel-picture ul li").not("#left-panel-picture ul li.first-left").hide();   
		$("#right-panel-picture ul li.first-right").mouseover(function(){
			$("#left-panel-picture ul li").hide();
			$("#left-panel-picture ul li.first-left").show();
		});		
		$("#right-panel-picture ul li.second-right").mouseover(function(){
			$("#left-panel-picture ul li").hide();
			$("#left-panel-picture ul li.second-left").show();
		});
		$("#right-panel-picture ul li.third-right").mouseover(function(){
			$("#left-panel-picture ul li").hide();
			$("#left-panel-picture ul li.third-left").show();
		});
		$("#right-panel-picture ul li.fourth-right").mouseover(function(){
			$("#left-panel-picture ul li").hide();
			$("#left-panel-picture ul li.fourth-left").show();
		});			
		$("#right-panel-picture ul li.fifth-right").mouseover(function(){
			$("#left-panel-picture ul li").hide();
			$("#left-panel-picture ul li.fifth-left").show();
		});	
		$("#right-panel-picture ul li.sixth-right").mouseover(function(){
			$("#left-panel-picture ul li").hide();
			$("#left-panel-picture ul li.sixth-left").show();
		});	
		$("#right-panel-picture ul li.seventh-right").mouseover(function(){
			$("#left-panel-picture ul li").hide();
			$("#left-panel-picture ul li.seventh-left").show();
		});	
		$("#right-panel-picture ul li.eighth-right").mouseover(function(){
			$("#left-panel-picture ul li").hide();
			$("#left-panel-picture ul li.eighth-left").show();
		});	
		$("#right-panel-picture ul li.ninth-right").mouseover(function(){
			$("#left-panel-picture ul li").hide();
			$("#left-panel-picture ul li.ninth-left").show();
		});
		
		$("#left-panel-director ul li").not("#left-panel-director ul li.first-left").hide();   
		$("#right-panel-director ul li.first-right").mouseover(function(){
			$("#left-panel-director ul li").hide();
			$("#left-panel-director ul li.first-left").show();
		});		
		$("#right-panel-director ul li.second-right").mouseover(function(){
			$("#left-panel-director ul li").hide();
			$("#left-panel-director ul li.second-left").show();
		});
		$("#right-panel-director ul li.third-right").mouseover(function(){
			$("#left-panel-director ul li").hide();
			$("#left-panel-director ul li.third-left").show();
		});
		$("#right-panel-director ul li.fourth-right").mouseover(function(){
			$("#left-panel-director ul li").hide();
			$("#left-panel-director ul li.fourth-left").show();
		});			
		$("#right-panel-director ul li.fifth-right").mouseover(function(){
			$("#left-panel-director ul li").hide();
			$("#left-panel-director ul li.fifth-left").show();
		});	
		$("#right-panel-director ul li.sixth-right").mouseover(function(){
			$("#left-panel-director ul li").hide();
			$("#left-panel-director ul li.sixth-left").show();
		});	
		$("#right-panel-director ul li.seventh-right").mouseover(function(){
			$("#left-panel-director ul li").hide();
			$("#left-panel-director ul li.seventh-left").show();
		});	
		$("#right-panel-director ul li.eighth-right").mouseover(function(){
			$("#left-panel-director ul li").hide();
			$("#left-panel-director ul li.eighth-left").show();
		});	
		$("#right-panel-director ul li.ninth-right").mouseover(function(){
			$("#left-panel-director ul li").hide();
			$("#left-panel-director ul li.ninth-left").show();
		});				

		$("#left-panel-ffilm ul li").not("#left-panel-ffilm ul li.first-left").hide();   
		$("#right-panel-ffilm ul li.first-right").mouseover(function(){
			$("#left-panel-ffilm ul li").hide();
			$("#left-panel-ffilm ul li.first-left").show();
		});		
		$("#right-panel-ffilm ul li.second-right").mouseover(function(){
			$("#left-panel-ffilm ul li").hide();
			$("#left-panel-ffilm ul li.second-left").show();
		});
		$("#right-panel-ffilm ul li.third-right").mouseover(function(){
			$("#left-panel-ffilm ul li").hide();
			$("#left-panel-ffilm ul li.third-left").show();
		});
		$("#right-panel-ffilm ul li.fourth-right").mouseover(function(){
			$("#left-panel-ffilm ul li").hide();
			$("#left-panel-ffilm ul li.fourth-left").show();
		});			
		$("#right-panel-ffilm ul li.fifth-right").mouseover(function(){
			$("#left-panel-ffilm ul li").hide();
			$("#left-panel-ffilm ul li.fifth-left").show();
		});	
		$("#right-panel-ffilm ul li.sixth-right").mouseover(function(){
			$("#left-panel-ffilm ul li").hide();
			$("#left-panel-ffilm ul li.sixth-left").show();
		});	
		$("#right-panel-ffilm ul li.seventh-right").mouseover(function(){
			$("#left-panel-ffilm ul li").hide();
			$("#left-panel-ffilm ul li.seventh-left").show();
		});	
		$("#right-panel-ffilm ul li.eighth-right").mouseover(function(){
			$("#left-panel-ffilm ul li").hide();
			$("#left-panel-ffilm ul li.eighth-left").show();
		});	
		$("#right-panel-ffilm ul li.ninth-right").mouseover(function(){
			$("#left-panel-ffilm ul li").hide();
			$("#left-panel-ffilm ul li.ninth-left").show();
		});	

		$("li").click(function() {
			$('span:first', this).toggleClass("axm155231-vote-target-selected");				
			$(this).siblings().find('span:first').removeClass("axm155231-vote-target-selected");

		   var t = $('span.axm155231-ballot-nominee-title', this).text();
           if($(this).closest('ul').attr('id') === 'picturelist')
		   {
			   $('#selectedpic').val(t)
		   }
           if($(this).closest('ul').attr('id') === 'directorlist')
		   {
				$('#selecteddir').val(t)				
		   }		   
           if($(this).closest('ul').attr('id') === 'ffilmlist')
		   {
			   $('#selectedffilm').val(t)	   
		   }		   
		});		

		$('#submitoscars').click(function(e){
			 e.preventDefault();
	 
			var key1 = $('#selectedpic').val();
			var key2 = $('#selecteddir').val();
			var key3 = $('#selectedffilm').val();
			
			var params = {};
			var body = {"key1" : key1, "key2" : key2, "key3" : key3};
			var additionalParams = {};
			
			var apigClient = apigClientFactory.newClient();
            apigClient.oscaraddPost(params, body, additionalParams)
				.then(function(result){
					window.location.reload();
				}).catch( function(result){
				  alert("Something bad happened");
				});				
		 });
		 
	});	  
	  
})(jQuery);