const APIUtil = require("./api_util.js");

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
    $(users).each((idx, el) => {
      this.$ul.append(`<li><a href="/users/${el.id}">${el.username}</a></li>`);
    });
  }
}

module.exports = UsersSearch;
