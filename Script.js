$(document).ready(function(){
    $.ajax({
        url: 'api.openweathermap.org/data/2.5/weather',
        type: "GET",
        data: 
            { 
            q: "Stockholm" , 
            appid: 'c5bf5d99c4ebb07f0a60cbabebec2b95', 
            units: 'metric'
            }
      });
    });