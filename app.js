// var headingElement = document.getElementById('main-heading');
// var newHeadingText = prompt("Please provide a new heading");
// $('#main-heading').text(newHeadingText);
// $('body').append("<p>This is a new paragraph</p>");
// for(var i = 0; i < 3; i++) {
//   var hobby = prompt("Tell me about your hobbies");
//   $('body').append("<p>" + hobby + "</p>");
// }
// $('p').text("this will fade out").fadeOut(3000);
// $('p').fadeIn(2000);
// $('h1').slideUp(1000).slideDown(5000);
var friends = ['Connor', 'Michael', 'Jeremiah', 'Vladimir'];
$('body').append("<h2> Some Brosephs</h2>")
for (var i = 0; i < friends.length; i++) {
  $('body').append("<p>" + friends[i] + "</p>");
  $('p').hide().fadeIn(5000);
}
var dog = $('body').append("<h2>And a Rufus Dog!</h2>");
