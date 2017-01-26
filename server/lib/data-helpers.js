"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
        db.collection("tweets")
          .insertOne(newTweet, callback);
    },

    // Modify saveTweet to use Mongo (try Mongo's insertOne()
    // Get all tweets in `db`, sorted by newest first

    getTweets: function(callback) {
    const sortNewestFirst = (a, b) => a.created_at - b.created_at;
    db.collection("tweets").find().toArray((err, tweets) => {
      if (err) {
        return callback(err);
      }
      callback(null, tweets.sort(sortNewestFirst));
    });

  // ==> Later it can be invoked. Remember even if you pass
  //     `getTweets` to another scope, it still has closure over
  //     `db`, so it will still work. Yay!

    }
  }
}
