"use strict";

/////////// init table and rangeBar ///////////
var DATA = [];
fetch('./config/data.json').then(function (resp) {
  return resp.text();
}).then(function (text) {
  return JSON.parse(text);
}).then(function (data) {
  DATA = data; // console.log('DATA: ', DATA)

  initTableAndRB();
})["catch"](function (error) {
  return console.log('Error:', error);
}); /////////// init iframe ///////////

fetch('./config/video_url.json').then(function (resp) {
  return resp.text();
}).then(function (text) {
  return JSON.parse(text);
}).then(function (data) {
  // console.log('video url: ', data.url)
  initIframe(data.url);
})["catch"](function (error) {
  return console.log('Error:', error);
}); /////////// init links ///////////

fetch('./config/links.json').then(function (resp) {
  return resp.text();
}).then(function (text) {
  return JSON.parse(text);
}).then(function (data) {
  // console.log('links: ', data)
  setLogoLinks(data);
  setLinks(data);
})["catch"](function (error) {
  return console.log('Error:', error);
}); /////////// init contact ///////////

fetch('./config/contact.json').then(function (resp) {
  return resp.text();
}).then(function (text) {
  return JSON.parse(text);
}).then(function (data) {
  // console.log('contact: ', data)
  setContact(data);
})["catch"](function (error) {
  return console.log('Error:', error);
}); /////////// init card ///////////

fetch('./config/prices_card.json').then(function (resp) {
  return resp.text();
}).then(function (text) {
  return JSON.parse(text);
}).then(function (data) {
  // console.log('prices: ', data)
  initCarousel(data);
})["catch"](function (error) {
  return console.log('Error:', error);
});