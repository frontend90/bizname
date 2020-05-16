/************    burger      *************/
$('.burger').click(function () {
  $('.burger').toggleClass('active');
  $('.menu').toggleClass('show');
  $('body').toggleClass('no-scroll');
});

$('.menu a').click(function () {
  $('.menu').removeClass('show');
  $('.burger').removeClass('active');
  $('body').removeClass('no-scroll');
});