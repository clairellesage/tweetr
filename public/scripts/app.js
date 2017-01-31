
// NOTE: use function expressions over function declarations
const timeSince = function(date) {
    // NOTE: use const/let instead of `var`
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
          <footer class="footer">
             <div class= "time">${timeSince(tweet.created_at)} ago</div>
            <div class= "icon">
              <img id="flag" src="http://placehold.it/12x12">
               <img id="love" src="http://placehold.it/12x12">
              <img id="retweet" src="http://placehold.it/12x12">
            </div>
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
    $('.tweetlist').prepend(tweet);
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

     const formdata = $(this).serialize()
     $.ajax('/tweets', {method: "post", data: formdata})
      .then((result) => {
          // NOTE: instead of reloading the entire tweet list
          //       on new tweet create succes, we will only
          //       render the newly created tweet
          // REMOVE:
          //  $(".tweetlist").empty()
          //  fetchAndDisplayTweets()
          createAndRender([result]);
      })
      .fail((error) => console.error(error));
  });

  $('#composebutton').click(function(ev) {
    $('.new-tweet').slideToggle('200');
    $('.textarea').focus();
  });


// NOTE: always remove commented out code
//       -- or ---
//       place it with a note about why its here in the function
//       you are referring to
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
