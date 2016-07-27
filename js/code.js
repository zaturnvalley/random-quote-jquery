console.log('hi');

var quotes = ["How Can Mirrors Be Real If Our Eyes Aren't Real?", "You Would Have To Eat 5 Apples Today To Get The Same Nutritional Value As An Apple From 1950. #Fallow",
"I Watch Twilight Every Night",
"I Only Apply To The Sixth Amendment",
"Dying Is MainStream #MONEY",
"Luke. Who Has The Trident",
"Most Trees Are Blue",
"If A Book Store Never Runs Out Of A Certain Book, Dose That Mean That Nobody Reads It, Or Everybody Reads It",
"School Is The Tool To Brainwash The Youth", "There Is No Nutrients In Our Food Anymore Or In Our Soil OR IN OUR WATER",
"I Scare People Away","I Build Pyramids Constantly", "Don't Worry Bae I'll Talk To You About SpaceTime Over FaceTime."];

function randoQuote(){
  var number = Math.floor(Math.random() * quotes.length);
  return quotes[number];
}

console.log(randoQuote());

$('#shuffle').on('click', function(){
  $('h1').html(randoQuote());
});


$('#submit').on('submit', function(e){
  e.preventDefault();
  quotes.push($('#tweetinput').val());
  $('h1').html($('#tweetinput').val());
  $('#tweetinput').val('')
});