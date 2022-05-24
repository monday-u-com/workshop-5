import { AsyncWeather } from "@cicciosgamino/openweather-apis";
import http from "http";
// import your own logger

// step 1: install lib and print temp to console
const apiKey = "<<your api key>>";
const weatherInitializer = new AsyncWeather();
const weatherAPI = await weatherInitializer;

// step 2: server
// create your server here from http module
// example in the slides or here: https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTP-server/

// start your server

// step 3: install your logger and log temp and server start
// log that the service has started