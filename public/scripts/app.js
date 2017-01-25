data =  [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
]

function createHtml(tweet) {
  let html = `
    <article>
        <header>
          <img src=${tweet.user.avatars.small}>
          <p id ="name"> ${tweet.user.name} </p>
          <p id ="username"> ${tweet.user.handle} </p>
        </header>
          <body>
          	<p id="tweetbody"> ${tweet.content.text} </p>
          </body>
          <footer> 
           		<p id= "time">${data.created_at} </p>
           	<img src ="http://placehold.it/10x10">
           	<img src ="http://placehold.it/10x10">
           	<img src ="http://placehold.it/10x10">
          </footer>
     </section>
    </article>
  `
  return html;
}

function createTweetElements(data) {
  return data.map(createHtml)
}

function renderTweet($tweets){
  $tweets.forEach(tweet => {
    $('.container').append(tweet)
    console.log($('.container'))
  })
}

$(document).ready(function() {
	var $tweets = createTweetElements(data);
	renderTweet($tweets)
});
