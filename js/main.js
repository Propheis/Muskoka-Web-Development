$(document).ready(function(){

  /*
  var defaults = {
      containerID: 'toTop', // fading element id
    containerHoverID: 'toTopHover', // fading element hover id
    scrollSpeed: 1200,
    easingType: 'linear' 
  };
  */
  $().UItoTop({ easingType: 'easeOutQuart' });
  //Lazy Load Images in Work section to boost load times.
  $("#Portfolio img").unveil(250);
});