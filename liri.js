require('dotenv').config();
var LS = require('./liri-functions');
let keys = require('./keys');


//var spotify = new Spotify(keys.spotify);

var search = process.argv[2];

var term = process.argv.slice(3).join(" ");

var liriSearch = new LS();

if (search === "concert-this") {
  console.log('Searching for upcoming shows');
  LS.concertThis(term);
  console.log(showData);

  } else if (search === "spotify-this-song"){

  } else if (search === "movie-this"){

  } else if(search === "do-what-it-says"){

  } else {
      console.log("Please enter a command with one of the acceptable parameters: 'concert-this' , 'spotify-this-song' , 'movie-this' , or 'do-what-it-says'");
  }