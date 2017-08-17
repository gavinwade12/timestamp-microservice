$(function() {
  console.log('hello');
  var link = window.location.href.trimRight('/');
  console.log(link);
  $('.needs-link').each(function(i, e) {
    e.text(link + e.text());
    e.removeClass('needs-link');
  });
});
