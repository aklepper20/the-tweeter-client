
const Tweet = {
  tweetsContainer: document.querySelector('.tweets-container'),
  createTweet: function(tweetData) {
    //write code here for creating a new tweet (used to dynamically create html content)
    return `<div class="tweet-card">
      <h4 class="user-name">@${tweetData.username}</h4>
      <p class="user-tweet">${tweetData.message}</p>
      <div class="tweet-info">
        <i class="far fa-comment"></i>
        <span>${tweetData.comments.length}</span>
        <i class="far fa-heart"></i>
        <span>${tweetData.likes}</span>
      </div>
      <div class="hide-comments">
        <div class="comments">
          ${Comments.createCommentsHtml(tweetData.comments)}
        </div>
        <input type="text" placeholder="Add comment here">
        <button data-id="${tweetData._id}" class="add-comment">Add Comment</button>
      </div>
    </div>`
  },
  renderTweets: function(tweetsArray) {
    //write code here for adding tweet data to the DOM
    let htmlString = '';
    for (let i = tweetsArray.length - 1; i >= 0; i--) {
      const newTweet = this.createTweet(tweetsArray[i]);
      htmlString += newTweet;
    }
     this.tweetsContainer.innerHTML = htmlString;
    // document.querySelector('.tweets-container').innerHTML = htmlString;
  },
  postTweet: function(tweetObj) {
    axios.post(`${App.baseUrl}/tweets`, tweetObj)
    .then(function (response) {
      App.fetchTweets();
    })
    .catch(function (error) {
       console.error(error)
    })
  }
}
