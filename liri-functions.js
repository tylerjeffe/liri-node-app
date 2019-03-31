var axios = require("axios");
var moment = require("moment");

var LS= function() {
  
    this.concertThis = function(artist) {
      var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
      axios.get(URL).then(function(response) {
      
        var jsonData = response.data[0];
        var showData = [
          "Venue: " + jsonData.venue.name,
          "Location: " + jsonData.venue.city,
          "Concert Date: " + moment(jsonData.datetime).format('mm/dd/yyyy')
        ].join("\n\n")        
      });
    }

    this.spotifyThisSong = function(song){
        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
         axios.get(URL).then(function(response) {
    }
}