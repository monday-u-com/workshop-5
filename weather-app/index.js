import { AsyncWeather } from "@cicciosgamino/openweather-apis";
import http from "http";
import { mondayuLogger } from "mondayu-logger";

// step 1: install lib and print temp to console
const apiKey = ""; // never store a key in your source code and if you do, revoke its access or deactivate it.
const weatherInstance = new AsyncWeather();
const weatherAPI = await weatherInstance;

// step 2: server
// create your server here from http module
// example in the slides or here: https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTP-server/
const server = http.createServer(async (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  weatherAPI.setApiKey(apiKey);
  weatherAPI.setCityId(293397);
  const temp = await weatherAPI.getTemperature();
  res.end(
    JSON.stringify({
      temp,
    })
  );
  mondayuLogger.log(`temp is ${temp}`);
});

// start your server
server.listen(8000);
mondayuLogger.log('weather service started! 🌤🌧🌈');
