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
  },

  addCommentBtn: function() {
    const commentBtns = document.querySelectorAll('.add-comment');

    for (let i = 0; i < commentBtns.length; i++) {
      const btn = commentBtns[i];

      btn.addEventListener('click', function (event) {
        event.preventDefault();
        const tweetId = event.target.dataset.id;
        const comment = event.target.parentNode.childNodes[5].value;
        Comments.addComment(tweetId, comment);
      })
    }
  }
}
