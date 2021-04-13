const App = {

  baseUrl: 'https://the-tweeter-api.herokuapp.com',

  username: 'anonymous',

  initialize: function() {
    //call all functions that are needed when the app first loads here
    this.setUsername();
    this.fetchTweets();
  },

  setUsername: function() {
    //write logic here for getting and setting the current username
    let userBrowser = prompt("What's your user name?");
    this.username = userBrowser;
  },

  fetchTweets: function () {
    console.log('fetch tweets')
    //use axios to GET all tweets from the datase at the endpoint '/tweets'
    //after getting tweets, decide what to do with the data
    axios.get(`${this.baseUrl}/tweets`)
     .then(function (response) {
        // handle success
       Tweet.renderTweets(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      console.log('sent axios request')
  },

}
