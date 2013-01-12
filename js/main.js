var colors=["rgba(80, 151, 149,0.5)","rgba(134, 181, 49,0.5)","rgba(134, 151, 199,0.5)","rgba(154, 151, 49,0.5)"];
var i=0,transitionColorInterval;

$(document).ready(function() {
  
  var d = new Date().getFullYear();
  $('#copyright_year').text(d);
	
	$(".main section").css('z-index','20').show().css('left','100px');
	$(".main section").transition({
  		x: '-100px',
    	easing: 'out',
    	duration: '1000ms',
    	opacity: 1    	
	});
	
});

$("#color-transition-control").change(function(e){
  if ($(this).attr("checked")) {
      
      transitionColorInterval = setInterval(function(){

        $('.header-container,.footer-container,.main section>div').animate({backgroundColor: "\""+colors[i]+"\""}, 2000, function(){});
        i++;
        if (i==colors.length) i=0;
    
      },8000);
      console.log('checked');
      return;
  }
  console.log('nochecked');
  clearInterval(transitionColorInterval);

});


$("#links-finder").keyup(function(event){
  
  if ( event.which == 13 ) {
    event.preventDefault();
  }
  var stringBuffer = $(this).attr('value');
  console.log(stringBuffer);
  searchEngine(stringBuffer);

});

$("#links-finder").focusout(function(event){
  $(".links ul li a").removeAttr('style');
});

function searchEngine(stringa){

  if(stringa == ''){
    $(".links ul li a").removeAttr('style');
    return;
  } 

  $(".links ul li a").each(function( index ) {

    if($(this).text().contains(stringa)){
      $(this).css('color','red');
        //console.log( index + ": " + $(this).text() );
    }else{
      $(this).css('color','#DAD2C1');
    }

  });

}

String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

//scrolling button
$(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
});
$('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});