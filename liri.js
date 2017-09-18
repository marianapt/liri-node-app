var keys = require("./keys.js");
var Twitter = require('twitter');
var request = require('request');

var Spotify = require('node-spotify-api');

//  var getMyMovie = function(movieName) { 

//  request('http://www.omdbapi.com/?t=' + movieName + 'tt3896198&apikey=413c5338', function (error, response, body) {
//   if(!error && response.statusCode == 200 {
//   console.log(body) 
// }}
// )

//  }


var spotify = new Spotify({
  id: "04e8fd3588f74133903fc279f87beca0",
  secret: "06580c3ac383401bae35dbe8af1cd24f"
});
var client = new Twitter(keys.twitterKeys);
var params = {
  screen_name: 'mariptrevi'
};


var getMyTweets = function () {

  var client = new Twitter(keys.twitterKeys);
  var params = {
    screen_name: 'mariptrevi'
  };


  client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {

      for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].created_at);
        console.log(' ');
        console.log(tweets[i].text);
      }
    }
  });
}

var getArtistNames = function (artist) {
  return artist.name;

}
var getMeSpotify = function () {
  spotify.search({
    type: 'track',
    query: 'dancing in the moonlight'
  }, function (err, data) {
    if (err) {
      console.log('Error occurred: ' + err);
      return;
    }
    var songs = data.tracks.items;
    for (var i = 0; i < songs.length; i++) {
      console.log(i);
      console.log('artist(s):' + songs[i].artists.map(getArtistNames));
      console.log('song name:' + songs[i].name);
      console.log('preview song:' + songs[i].preview_url);
      console.log('album:' + songs[i].album.name);
      console.log('-----------------------------------------');

    }


  });
}


var getMyMovie = function (movieName) {

  request('http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&r=json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var jsonData = JSON.parse(body);

      console.log('Title:' + jsonData.Title);
      console.log('Year:' + jsonData.Year);
      console.log('Rated:' + jsonData.Rated);
      console.log('IMDB Rating:' + jsonData.imdbRating);
      console.log(' Country:' + jsonData.Country);
      console.log('Launguage:' + jsonData.Language);
      console.log('Plot:' + jsonData.Plot);
      console.log('Actors:' + jsonData.Actors);
      console.log('Rotten tomatoes URL:' + jsonData.tomatoURL);
    }
  });

}
var doWhatItSays = function () { 
fs.readFile('random.txt', 'utf8', function (err, data) {
  if (err) throw err;
 var dataArr = data.split(',');
  if(dataArr.length ==2){
    pick(dataArr[0], dataArr[1]);}
    else if(dataArr.length ==1) {
    pick(dataArr[0]);
  }
  }
);

}

var pick = function (caseData, functionData) {
  switch (caseData) {
    case 'my-tweets':
      getMyTweets();
      break;
    case 'spotify-this-song':
      getMeSpotify(functionData);

    case 'movie-this':
      getMyMovie(functionData);
      case 'do-what-it-says' :
      doWhatItSays();
      break;
    default:
      console.log('LIRI does not know what you mean.');
  }
}

var runThis = function (argOne, argTwo) {
  pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);

// make another else if get the movie name code omdb 

//output inside body grab whatever you need
// same thing for twitter and spotify 
//	alrAxdjXXC7JR3Va5H3qZPJHT  twitter api
//Client ID
// 04e8fd3588f74133903fc279f87beca0
// Client Secret
// 06580c3ac383401bae35dbe8af1cd24f