$(document).ready(function() {
	var breaks;
	
	// Animate Time
	var time = 77;

	
	// The menu container
	var selectorMenu = '.menu';	
	// Icon selector
	var selectorIcon = '.icon';
	//Icon selector reversed
	var selectorIconReverse = $(selectorIcon).get().reverse();

	
// Start Hide icons
	var bbIconLen = $(selectorIcon).length;
	$(selectorIcon).each(function(i) {		
		if (i === 0){
			//console.log('first element');
			// Skip the hiding by returning
			return;
		}		
		if (i+1 === bbIconLen){
			//console.log('Last element');
			//return;
		}
		var el = $(this);
		el.hide();
		// Collapse Icons
		el.css("position",'absolute');
	});
// End Hide icons
	

// Start menu mouse event binds
	$(selectorMenu).bind('mouseenter',	function(e){
		//console.log('Mouse enter');
		breaks = 'enter';
		bbAnimate(selectorIcon,'enter');
	});


	$(selectorMenu).bind('mouseleave',	function(e){
		//console.log('Mouse leave');
		breaks = 'leave';
		bbAnimate(selectorIconReverse,'leave');
	});
// End menu mouse event binds


// Start menu float
	// Menu element selector
	var menuVar = '.menu';
	
	var floatSpeed = 100;
	var floatEasing = 0;
	
	// Bind Window scroll to update float
	$(window).scroll(function () {
	    FloatMenu();
	});
// End menu float

	// Mouse enter/leave function
	function bbAnimate(selector,event){
		var x = $(selector).length;
		$(selector).each(function(i) {
		    var el = $(this);
		    		    
		    setTimeout(function() {
		    	// Determine if we mouse is entering or leaving
		    	// Then check breaks
		    	
		    	// Mouse enter event
		    	if (event === 'enter'){
		    		// Breaks hit- stop animation
					if (breaks == 'leave'){
						//console.log('breaking mouse enter');
			    		return false; 	
					}
					else{
						if (i === 0){
							//console.log('first element');
						}
						if (i+1 === x){
							//console.log('last element');
						}
						//Expand the icons
						el.css("position","relative");
					    //Fade in the icon 
					    el.fadeIn(time*2, function() {
			    			// Animation complete.
			    		});
					}
				// End mouse enter event
		    	}
		    	// Mouse leave event
		    	else if (event === 'leave'){
		    		// Breaks hit- stop animation
		    		if (breaks == 'enter'){
						//console.log('breaking mouse leave');
			    		return false; 	
					}
					else{
						if (i === 0){
							//console.log('first element');
						}
						if (i+1 === x){
							//console.log('last element');
							//Skip last element
							return false;
						}
						//Fade out icons
						el.fadeOut(time*2, function() {
		    				// Animation complete.
		    				//Collapse icons
		    				el.css("position","absolute");
		  				});
					}
		    	// End mouse leave event
		    	}
		    	else{
		    		console.log('No event');
		    	}
			// End timeout each function	
			}, time*i);
		//End for each $(selector)	
		});		
	}
	
	// Window scroll function to update the position of the floating menu 
	function FloatMenu(){	
		var scrollAmount=$(document).scrollTop();
		var newPosition=menuPosition+scrollAmount;
		//console.log('new pos: '+newPosition);	    
		$('.menu').animate({top: newPosition},70,'swing');
	}

//End document ready
});



