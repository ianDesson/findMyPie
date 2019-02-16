var Crawler = require("crawler");

var testCrawler = new Crawler({
  maxConnections : 10,
  callback : function (error, res, done) {
    if(error){
      console.log(error);
    }else{
      var $ = res.$;
      //Cheerio
      console.log($("inserttitle").text());
    }
    done();
  }
});

testCrawler.queue('https://gabrielpizza.com/restaurant-menu/pizza/');
