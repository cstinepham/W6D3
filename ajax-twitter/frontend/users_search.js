const APIUtil = require("./api_util.js");
const FollowToggle = require("./follow_toggle.js");

class UsersSearch {
  constructor($el) {
    this.$el = $el;
    this.$input = $el.find("input");
    this.$ul = $el.find(".users");
    this.$input.on("input", this.handleInput.bind(this));
  }

  handleInput(e) {
    APIUtil.searchUsers(this.$input.val(), this.renderResults.bind(this));
  }

  renderResults(users) {
    this.$ul.empty();
    $(users).each((idx, user) => {
      let $li = $(`<li><a href="/users/${user.id}">${user.username}</a></li>`);
      this.$ul.append($li);
      let $button = $('<button class="follow-toggle" type="button" name="button"></button>');
      $li.append($button);
      let toggle = new FollowToggle($button, {userId: user.id, followState: user.followed});
    });
  }
}

module.exports = UsersSearch;
