var tweetData = [
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
	}
]


// console.log(tweetData[placeholder])
function createTweetElement(tweetData) {

for (var id in tweetData) {
	var fullname = tweetData[id].user.name;
	var smallAvatar = tweetData[id].avatars.small;
	var handle = tweetData[id].handle;
	var content = tweetData[id].content.text;
	var timestamp = tweetData[id].created_at;
}

	let html = `
            <article>
                <header>
                  <img id="avatar" src="${smallAvatar}">
                  <p id ="name">${fullname}</p>
                  <p id ="username">${handle}</p>
                </header>
              <body>
                <p id="tweetbody">${content}</p>
              </body>
              <footer>
                <p id ="time">${timestamp}</p>
                <img src ="http://placehold.it/10x10">$
                <img src ="http://placehold.it/10x10">
                <img src ="http://placehold.it/10x10">
              </footer>
            </article> `
	return html;
}
	
console.log(html)	


document.ready()


// function renderTweets(callback, tweetData) {
//   for (tweetId in tweetData) {
//   	console.log(tweetData[tweetId].user)
//   	// createTweetElement(user);
//   }	
//   return;
//  }

// console.log(renderTweets(tweetData));

// var $tweet = createTweetElement(tweetData)
// // Test / driver code (temporary)
// console.log($tweet); // to see what it looks like

// $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.


