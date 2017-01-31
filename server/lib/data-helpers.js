"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  const saveTweet = function(newTweet, callback) {
      db.collection("tweets")
        .insertOne(newTweet, callback);
  };

  return {
    // Saves a tweet to `db`
    saveTweet: saveTweet,

    // NOTE: keep exported object readabe, refactor
    //       method below, similar to `saveTweet`
    // loadds all tweets from DB
    getTweets: function(callback) {
      const sortNewestFirst = (a, b) => a.created_at - b.created_at;
      db.collection("tweets").find().toArray((err, tweets) => {
        if (err) {
          return callback(err);
        }
        callback(null, tweets.sort(sortNewestFirst));
      });
    }
  }
}
