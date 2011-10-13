$(document).ready(function() {

	var time =75;

	$('.icon').css("position",'absolute');
	
	var lock = false;
	//$('.icon').css("position",'relative');
	
	var selectorMenu = '.menu';


	var selectorIconInner = '.iconInner';
	
	var selectorIconInnerA = '.iconInner a';

	var lock = false;

	var selectorReverse = $('.icon').get().reverse();

	var selectorIconReverse = $('.icon').get().reverse();

	var selectorImg = '.icon img';
	var selectorColumns = '.menuColumns';
	
	//Icon selector
	var selectorIcon = '.icon';

	//Hide icons
	$(selectorIcon).each(function(i) {
		if (i === 0){
			//console.log('first element');
			return;
		}
			var el = $(this);
			//console.log(1);
			el.hide();
	});

	
	$(selectorMenu).bind('mouseenter',	function(e){
		console.log('Mouse enter');
		breaks = false;
		moveThings(selectorIcon);
	});


	$(selectorMenu).bind('mouseleave',	function(e){
		console.log('Mouse leave');
		breaks = true;
		moveThings(selectorIconReverse);
	});


	
	
	
	var menuVar = '.menu';
	
	var floatSpeed = 100;
	var floatEasing = 0;

	$(window).scroll(function () {
	    FloatMenu();
	});



    menuPosition=$(menuVar).position().top;
	console.log('init pos: '+menuPosition);



function moveThings(selector){
		if (lock === true){
			console.log('locked');
			return;		
		};
		//lock was here
		//console.log();
		var x = $(selector).length;
		//console.log(selectorLen);
		$(selector).each(function(i) {
		    var el = $(this);
			//console.log(x);
			//console.log(i);
			
		    setTimeout(function() {
			if (i === 0){
				//console.log('first element');
				lock=true;
				console.log('Locking');
				//var fade = false;
				fade = 'first';
				//return;
			}
			if (i+1 === x){
				//console.log('last element');
				lock=false;
				console.log('Unlocking');
				var fade = 'last';
				
				//return;
			}

			
			
		    //Collapsed
		    if (el.css("position") === "absolute"){
		    		el.css("position","relative");
		    		
		    		el.fadeIn(time*2, function() {
    					// Animation complete.

  					});
		    		//el.css("position","relative");
		    		//el.fadeIn(time*2);
			    	//el.css("z-index","");

		    	} //EXPANDED !!
		    	else if (el.css("position") === "relative"){
			    	//el.css("z-index","");
			    	
			    	if (fade == 'last'){
			    		el.css("position","absolute");
			    	}else{
			    	
			    	el.fadeOut(time*2, function() {
    					// Animation complete.
    					el.css("position","absolute");

  					});
  					
  					}

		    	}
		    }, time*i);
		});	
		
		//console.log(lock);
	
	if (lock === true){
		console.log('locked: '+lock);
		//lock=false;
		//return;
		//moveThings(selector);

		//console.log(lock);

	}
	//lock=false;

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
	    
	    console.log('new pos: '+newPosition);
		//$(menu).css("top",newPosition);
	    
	    //console.log(menu);
	    $('.menu').animate({top: newPosition},70,'swing');

	    /*
if($(window).height()<$fl_menu.height()+$fl_menu_menu.height()){
	        $fl_menu.css("top",menuPosition);
	    }
	    else {
	        $fl_menu.stop().animate({top: newPosition}, $float_speed, $float_easing);
	    }
*/
	}




});



