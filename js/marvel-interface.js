var Comic=require("./../js/marvel.js").comicModule;
var hash = "1";

var apiPublic = '91dacbf92ec4eb189a9ee5180c130fa8';

var apiPrivate = '87069dfa6c699ab222fa50bdf19560b04bae5de9';


$(document).ready(function() {
  $('#getName').click(function() {
    var name = $('#name').val();
    $('#name').val("");
    alert(name);
    $('.show-character').text("The character you have chosen is " + name + ".");
    $.get('http://gateway.marvel.com/v1/comics?ts=1&apikey=' + apiPublic + '&hash=' + hash + apiPublic + apiPrivate, function(response) {
     console.log(response);
   });
  });
});
