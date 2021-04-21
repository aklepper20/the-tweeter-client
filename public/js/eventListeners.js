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
        const comment = event.target.parentNode.childNodes[3].value;

        Comments.addComment(tweetId, comment);
      })
    }
  },

  toggleComments: function() {
    const toggleBtns = document.querySelectorAll('.fa-comment');

    for (let i = 0; i < toggleBtns.length; i++) {
      const toggle = toggleBtns[i];

      toggle.addEventListener('click', function(event) {
        event.preventDefault();
        const commentSection = event.target.parentNode.parentNode.childNodes[7]
        commentSection.classList.toggle('hide-comments')
      })
    }
  }
}
