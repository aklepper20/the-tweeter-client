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
  },

  toggleModal: function() {
    const toggleModal = document.querySelectorAll('.fa-ellipsis-v')

    for (let i = 0; i < toggleModal.length; i++) {
      const modal = toggleModal[i];

      modal.addEventListener('click', function(event) {
        event.preventDefault();
        const modalSection = event.target.parentNode.parentNode.childNodes[3]
        modalSection.classList.toggle('hide-modal')
      })
    }
  },

  deleteTrashCan: function() {
    const deleteTrash = document.querySelectorAll('.fa-trash-alt');

    for (let i = 0; i < deleteTrash.length; i++) {
      const trash = deleteTrash[i];

      trash.addEventListener('click', function(event) {
        event.preventDefault();
        // send axios delete request, needed tweetId and comment Id
        const commentId = event.target.dataset.commentid;
        const tweetId = event.target.dataset.tweetid;
        Comments.deleteComment(commentId, tweetId);
        event.target.parentNode.childNodes[1].innerText = "Deleting..."
      })
    }
  }

}
