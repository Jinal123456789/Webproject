const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=3032d294cd7986c675aaccde9686d3dd&query= " +
    latitude +
    "," +
    longitude +
    "&unit=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,

        body.current.weather_descriptions +
          ". Current temperature is " +
          body.current.temperature +
          " degree.  " +
          "  There is a " +
          body.current.precip +
          "% chances to rain today "
      );
    }
  });
};

module.exports = forecast;
