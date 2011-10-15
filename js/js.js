
$(document).ready(function() {
	var breaks;
	var time = 77;

	
	//The menu container
	var selectorMenu = '.menu';	
	//Icon selector
	var selectorIcon = '.icon';
	//Icon selector reversed
	var selectorIconReverse = $(selectorIcon).get().reverse();
	lock = false;

	$(selectorIcon).css("position",'relative');
	//Start Hide icons
	var bbIconLen = $(selectorIcon).length;
	$(selectorIcon).each(function(i) {		
		if (i === 0){
			//console.log('first element');
			//Skip the hiding by returning
			return;
		}		
		if (i+1 === bbIconLen){
			//console.log('Last element');
			//return;
		}
		var el = $(this);
		el.hide();
	});
	//End Hide icons
	
	
	$(selectorMenu).bind('mouseenter',	function(e){
		//console.log('Mouse enter');
		breaks = 'enter';
		moveThingsEnter(selectorIcon);
	});


	$(selectorMenu).bind('mouseleave',	function(e){
		//console.log('Mouse leave');
		breaks = 'leave';
		moveThingsLeave(selectorIconReverse,'leave');
	});


	
	
	
	var menuVar = '.menu';
	
	var floatSpeed = 100;
	var floatEasing = 0;

	$(window).scroll(function () {
	    FloatMenu();
	});



    menuPosition=$(menuVar).position().top;
	//console.log('init pos: '+menuPosition);

function moveThingsLeave(selector,breaks){

		var x = $(selector).length;
		$(selector).each(function(i) {
		    var el = $(this);
	
		    setTimeout(function() {
		    
		    if (breaks == 'enter'){
			    	console.log('breaking enter');
			    	//breaks = false;
			    	return false; 	
			    }else{
				if (i === 0){
					//console.log('First element');
					fade = 'first';
					//return;
				}
				if (i+1 === x){
					//console.log('Last element');
					var fade = 'last';
					//return;
				}
			
			    //Collapsed
			    if (el.css("position") === "absolute"){
			    		el.css("position","relative");
			    		
			    		el.fadeIn(time*2, function() {
	    					// Animation complete.
	
	  					});
			  	} //Expanded
		    	else if (el.css("position") === "relative"){
			    	if (fade == 'last'){
			    		el.css("position","absolute");
			    	}
			    	else{
			    	
			    		el.fadeOut(time*2, function() {
							// Animation complete.
							el.css("position","absolute");
						});	
					}
		    	}}
		    }, time*i);
		});	
}


function moveThingsEnter(selector){
		//breaks = false;
		
		if (lock === true){
			console.log('locked');
			//return;		
		};
		var x = $(selector).length;
		$(selector).each(function(i) {
		    var el = $(this);
		    		    
		    setTimeout(function() {
		    	
			    if (breaks == 'leave'){
			    	console.log('breaking enter');
			    	//breaks = false;
			    	return false; 	
			    }else{
			    	console.log(breaks);
				    
					if (i === 0){
						//console.log('first element');
						lock=true;
						console.log('Locking');
						fade = 'first';
					}
					if (i+1 === x){
						//console.log('last element');
						lock=false;
						console.log('Unlocking');
						var fade = 'last';
					}
					
					el.css("position","relative");
				    
				    el.fadeIn(time*2, function() {
		    			// Animation complete.
		    		});
	    	}	
    	// End timeout each function	
		}, time*i);
	//End for each $(selector)	
	});		
	if (lock === true){
		console.log('locked: '+lock);
	}
}

function moveThingsLeave(selector){
		if (lock === true){
			//console.log('locked');
			//return;
			//breaks = false;		
		};
		var x = $(selector).length;
		$(selector).each(function(i) {
		    var el = $(this);
		    		  
		    setTimeout(function() {
		    	if (breaks == 'enter'){
			    	console.log('breaking leave');
			    	//breaks = false;
			    	return false; 	
			    }else{
			    	console.log(breaks);
				    	
					if (i === 0){
						//console.log('first element');
						lock=true;
						console.log('Locking');
						fade = 'first';
					}
					if (i+1 === x){
						//console.log('last element');
						lock=false;
						console.log('Unlocking');
						var fade = 'last';
					}
					//If we are on last element
					if (fade == 'last'){
					    //el.css("position","absolute");
					}
					else{
						el.fadeOut(time*2, function() {
		    				// Animation complete.
		    				el.css("position","absolute");
		  				});
		  			}
	  			}
			// End timeout each function	
		    }, time*i);
		//End for each $(selector)	
		});
	if (lock === true){
		//console.log('locked: '+lock);
	}
}



function cancelEvent(e) {
    if (!e) e = window.event;
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}

function FloatMenu(){	
	var scrollAmount=$(document).scrollTop();
	var newPosition=menuPosition+scrollAmount;
	//console.log('new pos: '+newPosition);	    
	$('.menu').animate({top: newPosition},70,'swing');
}



//End document ready
});



