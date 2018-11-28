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
    let ajaxObject = {};
    if(!this.followState) {
      ajaxObject = {
        method: "POST",
        url: `/users/${this.userId}/follow`,
        dataType: "JSON"
      };

    } else {
      ajaxObject = {
        method: "DELETE",
        url: `/users/${this.userId}/follow`,
        dataType: "JSON"
      };
    }
    $.ajax(ajaxObject)
    .then(() => {
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
