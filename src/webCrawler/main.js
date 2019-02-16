var Crawler = require("crawler");

var testCrawler = new Crawler({
  maxConnections : 10,
  callback: function (error, res, done) {
    //Note:
    //console.log(error);
    //console.log(result);
    //console.log($);
    //console.log(result.body);

    if (res){
      var page = result.body;
      var res = page.match(/price/i);
      if (res && res.length > 0){
        console.log(result.body);//prints boday where a hit is found
      }
    }

    $("a").each(function(index, a) {//looks for anchor tags and resubmits new
      //page to the queue
      console.log(a.href);
      c.queue(a.href);//logs each URL where a hit is found
    });
  }
});

testCrawler.queue('https://gabrielpizza.com/');
