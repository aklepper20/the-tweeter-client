
const Tweet = {
  tweetsContainer: document.querySelector('.tweets-container'),
  createTweet: function(tweetData) {
    //write code here for creating a new tweet (used to dynamically create html content)
    return `<div class="tweet-card">
      <h4 class="user-name">@${tweetData.username}</h4>
      <p class="user-tweet">${tweetData.message}</p>
    </div>`
  },
  renderTweets: function(tweetsArray) {
    //write code here for adding tweet data to the DOM
    let htmlString = '';
    for (let i = 0; i < tweetsArray.length; i++) {
      const newTweet = this.createTweet(tweetsArray[i]);
      htmlString += newTweet;
    }
    this.tweetsContainer.innerHTML = htmlString;
  },
  postTweet: function(tweetObj) {
    axios.post(`${App.baseUrl}/tweets`, tweetObj)
    .then(function (response) {
      console.log(response)
    })

  }
}
