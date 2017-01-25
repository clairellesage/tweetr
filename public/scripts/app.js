
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
          	<div class="tweetbody">${(tweet.content.text)} </div>
          </body>
          <footer> 
           	<div class= "time">${tweet.created_at} </div>
           	<img src ="http://placehold.it/10x10">
           	<img src ="http://placehold.it/10x10">
           	<img src ="http://placehold.it/10x10">
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

  	let formdata = $(this).serialize()
       $.ajax('/tweets', {method: "post", data: formdata })
      .then((result) => {
          $(".tweetlist").empty()
          fetchAndDisplayTweets()
      })

      .fail((error) => console.error(error))
  })

  //GET
  function loadTweets () {
    $.ajax({
        url : '/tweets',
        method: "GET",
        })

      .success((res) => {
        createAndRender(res);
        console.log('Success!');
      })

      .fail((error) => {
        console.error(error)
      })
  }
  loadTweets()
});




  //     $.ajax({
  //       url: '/tweets',
  //       method: 'GET',
  //       success: function (morePostsHtml) {
  //         renderTweets(request);
  //         console.log('Success: ', morePostsHtml);
  //   });
  // });



