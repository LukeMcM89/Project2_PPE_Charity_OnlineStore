const https = require("https");

// Endpoint for getting latest totals
const endpointUrl = "https://covid-19-data.p.rapidapi.com/totals";

// RapidAPI host
const rapidApiHost = "covid-19-data.p.rapidapi.com";

// YOUR RapidAPI key
const rapidApiKey = "a4a9dafd64mshc3dbedd703f38bbp16884djsn011747e629e7";

const options = {
  headers: {
    "x-rapidapi-host": rapidApiHost,
    "x-rapidapi-key": rapidApiKey,
    useQueryString: true,
  },
};

module.exports=  function (callback){

 https
  .get(endpointUrl, options, (res) => {
    let body = [];

    res.on("data", (chunk) => {
      body.push(chunk);
    });

    res.on("end", () => {
      try {
        let json = JSON.parse(body);
        console.log(json);
        callback(json);
      } catch (error) {
        console.error(error.message);
      }
    });
  })
  .on("error", (error) => {
    console.error(error.message);
  });

};