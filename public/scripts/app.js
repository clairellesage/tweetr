function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}


 //I don't need the escape function because it's protected from XSS
function createHtml(tweet) {
  let html = `
  <section class="oldtweet">
    <form action= "/tweets" method="GET">
    <article>
        <header>
          <img class="avatar" src=${tweet.user.avatars.small}>
          <div class ="name"> ${tweet.user.name} </div>
          <div class ="username"> ${tweet.user.handle} </div>
        </header>
          <body>
          	<div class="tweetbody">${(tweet.content.text)}</div>
          </body>
          <footer> 
           	<div class= "time">${timeSince(tweet.created_at)} ago</div>
              <i class="fa fa-flag-o" aria-hidden="true"></i>
           	  <i class="fa fa-heart" aria-hidden="true"></i>
           	  <i class="fa fa-retweet" aria-hidden="true"></i>
          </footer>
    </article>
   </form>
 </section>
  `
  return html;
}

//formats the html with the right data
function createTweetElements(data) {
  return data.map(createHtml)
}

//each tweet is prepended to tweetlist
function renderTweets($tweets){
  $tweets.forEach(tweet => {
    $('.tweetlist').prepend(tweet)
  })
}

//makes a jQuery tweet
//calls render tweets on that jQuery tweet
//now they're ready to be called together
//calls two above functions
function createAndRender(tweets){
var $tweets = createTweetElements(tweets);
	renderTweets($tweets);
}


//ON DOC READY
$(document).ready(function() {
	function fetchAndDisplayTweets() {
		$.getJSON('/tweets')
 		.then((tweets) => {
  		createAndRender(tweets)
	 });
  }

  fetchAndDisplayTweets()


  $('#tweetform').on('submit', function(ev) {
    ev.preventDefault();
    if ($('.textarea').val() === "") {
      alert("Did you forget to write something?")
      return;
    } else if ($('.textarea').val().length > 140) {
      alert("Too long!");
      return;
    };

  	let formdata = $(this).serialize()
       $.ajax('/tweets', {method: "post", data: formdata })
      .then((result) => {
          $(".tweetlist").empty()
          fetchAndDisplayTweets()
      })

      .fail((error) => console.error(error))
  })

  $('#composebutton').click(function(ev) {
    $('.new-tweet').slideToggle('200');
    $('.textarea').focus();
  });



  //this is how I'd write a GET function with AJAX
//   function loadTweets () {
//     $.ajax({
//         url : '/tweets',
//         method: "GET",
//         })

//       .success((res) => {
//         createAndRender(res);
//         console.log('Success!');
//       })

//       .fail((error) => {
//         console.error(error)
//       })
//   }
//   loadTweets()
});

