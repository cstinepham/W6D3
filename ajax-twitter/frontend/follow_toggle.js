const APIUtil = require("./api_util.js");

class FollowToggle {
  constructor($el) {
    this.userId = $el.data("user-id");
    this.followState = $el.data("initial-follow-state");
    this.$el = $el;
    this.$el.on("click", this.handleClick.bind(this));
    this.render();
  }

  render() {
    if (this.followState === false) {
      this.$el.text("Follow!");
    } else if (this.followState) {
      this.$el.text("Unfollow!");
    }
  }

  handleClick(e) {
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
