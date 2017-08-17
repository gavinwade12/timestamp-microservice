$(function() {
  var link = window.location.href.replace(/\/$/, '');
  $('.needs-link').each(function(i, e) {
    e = $(e);
    e.text(link + e.text());
    e.removeClass('needs-link');
  });
});
