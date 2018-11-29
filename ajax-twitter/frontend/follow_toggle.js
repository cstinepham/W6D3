const APIUtil = require("./api_util.js");

class FollowToggle {
  constructor($el, options) {
    this.$el = $el;
    this.$el.on("click", this.handleClick.bind(this));
    this.userId = this.$el.data("user-id") || options.userId;
    if (this.$el.data("initial-follow-state") !== undefined) {
      this.followState = this.$el.data("initial-follow-state");
    } else {
      this.followState = options.followState;
    }

    this.render();
  }

  render() {
    if (this.followState === false) {
      this.$el.text("Follow");
    } else if (this.followState) {
      this.$el.text("Unfollow");
    }
    this.$el.prop("disabled", false);
  }

  handleClick(e) {
    this.$el.prop("disabled", true);
    e.preventDefault();
    let ajaxPromise = null;
    if(!this.followState) {
      ajaxPromise = APIUtil.followUser(this.userId);
    } else {
      ajaxPromise = APIUtil.unfollowUser(this.userId);
    }
    ajaxPromise.then(() => {
      if (this.followState) {
        this.followState = false;
      } else {
        this.followState = true;
      }
      this.render();
    });
  }
}



module.exports = FollowToggle;
