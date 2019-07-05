new WOW().init();
var wow = new WOW(
  {
    boxClass:     'wow',      
    animateClass: 'animated', 
    offset:       0,          
    mobile:       true,       
    live:         true,       
    callback:     function(box) {
      
    },
    scrollContainer: null,    
    resetAnimation: true,     
  }
);
wow.init();

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});




	

