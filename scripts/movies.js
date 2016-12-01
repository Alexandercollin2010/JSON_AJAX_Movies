

$(document).ready(function(){
  $('#search').on('click', function(){
    var movieTitle = $('#movie').val();
    console.log(movieTitle);
    var searchMovie = 'http://www.omdbapi.com/?s=' + movieTitle;
    $.ajax({
      url: searchMovie,
      dataType: 'JSON',
      success: function(data){
        console.log('success, data:', data);
        var movieSearch = data.Search;
        displayMovieResults(movieSearch);
      }// end success
    });// end ajax
    noType(movieTitle);
  });// end on click search
  var displayMovieResults = function(results){
    var movieResults = '';
    for (var i = 0; i < results.length; i++) {
      movieResults += '<p>' + results[i].Title + " " + results[i].Year + '</p>';
      movieResults += '<img src="' + results[i].Poster + '" />';
    }// end for loop
    $( '#append' ).html( movieResults );
  };// end displayMovieResults function
});// end document ready
var noType = function(movieTitle){
  if (movieTitle === ""){
    alert("Yo!! You need to input something!!");
    console.log("Inside the if");
  }// end if statement
};// end noType
