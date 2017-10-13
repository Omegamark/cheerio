var express = require("express");
// var path = require("path");
var app = express();
var request = require("request");
var cheerio = require("cheerio");
// var fs = require("fs");
var port = 8080;

var url =
  "https://denver.craigslist.org/search/sss?query=subaru&sort=rel&min_price=500&max_price=1500";

var cars = [];
var carObject = {
  carModel: "djkfals;dfk",
  postDate: "",
  carPrice: "",
  carLocation: "",
  postHref: ""
};

// carObject[0].carModel = "subaru";
console.log("dkfasldj", jsonObject[0].carModel);

function doRequest(url) {
  request(url, function(err, res, body) {
    if (err) {
      console.error("Here is what went wrong", err);
    } else {
      // Load the html body
      var $ = cheerio.load(body);
      // Get the car descriptions
      var carModel = [];
      $(".result-title").each(function(i) {
        // console.log(jsonObject.carModel);
        // console.log(i);
        let car = $(this).text();
        carObject[i];

        // jsonObject[i][carModel] = carModel;
      });
      console.log(jsonObject);

      // Get the dates for each result
      // var postDate = [];
      // $(".result-date").each(function(i) {
      //   postDate[i] = $(this).text();
      // });
      // console.log(postDate);
      //
      // // Get the price for each date
      // var carPrice = [];
      // $(".result-price").each(function(i) {
      //   carPrice[i] = $(this).text();
      // });
      // console.log(carPrice);
      // // Get the neighborhood for each post
      // // var carLocation = $(".result-hood");
      // // var carLocationText = carLocation.text();
      // // console.log(carLocationText);
      // // Get the link to the craigslist post
      // // var postHref = [];
      // // $(".result-title").each(function(i, elem) {
      // //   postHref[i] = $(this).attr("href");
      // // });
      // // postHref.join(", ");
      // //
      // // console.log(postHref);
    }
  });
}
async function scrape() {
  let res = await doRequest(url);
  console.log(res);
}
scrape();
app.listen(port);
console.log("server running on " + port);
