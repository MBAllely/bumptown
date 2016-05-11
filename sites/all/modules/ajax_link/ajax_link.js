(function($) {
  $.fn.ajax_link = function() {
      console.log("HELLO WORLD");
    $('#ajax-link').hide();
    setTimeout(function() {
      $('#ajax-display').fadeOut().html("").show();
      $('#ajax-link').fadeIn();
    }, 5000)
  }
})(jQuery);
