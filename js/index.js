//Dynamic Tittle 
$(function() {
    var message ="🔥we miss you💗";
    var original;
  
    $(window).focus(function() {
      if (original) {
        document.title = original;
      }
    }).blur(function() {
      var title = $('title').text();
      if (title != message) {
        original = title;
      }
      document.title = message;
    });
    $(window).scroll(function(){
      // sticky navbar on scroll script
      if(this.scrollY > 20){
          $('.container').addClass("sticky");
      }else{
          $('.container').removeClass("sticky");
      }});
  });
  
// Trused By Typing Animation 
  var typed = new Typed(".typing", {
    strings: ["Trusted🙌By", "Loved💚By", "Reviwed⭐⭐By", "Chosed👍By"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});