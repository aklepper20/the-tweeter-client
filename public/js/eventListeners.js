const Listeners = {
  sendTweetBtn: function() {
    const sendTweet = document.querySelector('.tweet-btn');
    const newTweet = document.querySelector('.new-tweet');

    sendTweet.addEventListener('click', function(event) {
      event.preventDefault();
      const userCreatedTweet = {
        username: App.username,
        message: newTweet.value
      }
      Tweet.postTweet(userCreatedTweet);
    })
  }
}
