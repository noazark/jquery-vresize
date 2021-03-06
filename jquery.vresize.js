(function($) {
  $.fn.vResize = function(parent, offset) {
    var that = this;
    
    if(offset == null) offset = 0;
    
    var resize = function() {
      $(that).css({'height': ($(parent).height() - offset - $(that).innerHeight() + $(that).height()) + 'px'});
    }
    
    $(window).resize(function(){
      resize();
    });
      
    /* initialize */
    resize();
  }
})(jQuery);
