
const Comments = {
  addComment: function(id, commentData) {
    axios.put(`${App.baseUrl}/tweets/comments/${id}`, {username: App.username, comment: commentData})
    .then(function () {
      App.fetchTweets();
    })
    .catch(function (error) {
      console.log(error);
    })
  },

  deleteComment: function() {

  }
}
