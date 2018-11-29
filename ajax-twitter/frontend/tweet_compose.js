const APIUtil = require("./api_util.js");
class TweetCompose {
  constructor($el) {
    this.$el = el;
    this.$el.on("submit", submit.bind(this));
  }

  submit(){
    APIUtil.createTweet(this.$el.serializeJSON());
    this.$el.find(":input").prop("disabled", true);
  }
}
