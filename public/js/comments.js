
const Comments = {
  addComment: function(id, commentData) {
    axios.put(`${App.baseUrl}/tweets/comments/${id}`, {username: App.username, comment: commentData})
    .then(function (repsonse) {
      App.fetchTweets();
      console.log(repsonse)
    })
    .catch(function (error) {
      console.log(error);
    })
  },
  createCommentsHtml: function (commentArray, tweetId) {
     let commentString = '';
    for (let i = commentArray.length - 1; i >= 0; i--) {
      const commentObj = commentArray[i];
      commentString +=
    `<div class="comment-container">
      <div class="comment-header">
        <div class="comment-header-details">
          <h5 class="comment-username">${commentObj.username}</h5>
          <span>${commentObj.createdAt}</span>
        </div>
         <i class="fas fa-ellipsis-v"></i>
       </div>
       <div class="comment-modal hide-modal">
        <p>Delete Comment</p>
        <i data-commentId="${commentObj._id}" data-tweetId="${tweetId}" class="far fa-trash-alt"></i>
       </div>
      <p>${commentObj.comment}</p>
    </div>`
    }
    return commentString;
  },

  deleteComment: function(commentId, tweetId) {
    axios.delete(`${App.baseUrl}/tweets/comments/${tweetId}/${commentId}`)
    .then(function(response) {
      App.fetchTweets();
      console.log(response)
    })
  }
}
