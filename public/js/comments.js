
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
  createCommentsHtml: function (commentArray) {
     let commentString = '';
    for (let i = commentArray.length - 1; i >= 0; i--) {
      const commentObj = commentArray[i];
      commentString += `<div>
      <div class="comment-header"> <h5 class="comment-username"> ${commentObj.username} </h5> <span>${commentObj.createdAt}</span> </div>
      <p>${commentObj.comment}</p>
    </div>`
    }
    return commentString;
  },

  deleteComment: function() {

  }
}
