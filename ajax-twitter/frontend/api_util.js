const APIUtil = {
  followUser: id => {
    return $.ajax({
      method: "POST",
      url: `/users/${id}/follow`,
      dataType: "JSON"
    });
  },

  unfollowUser: id => {
    return $.ajax({
      method: "DELETE",
      url: `/users/${id}/follow`,
      dataType: "JSON"
    });
  },

  searchUsers: (queryVal, success) => {
    return $.ajax({
      method: "GET",
      url: "/users/search",
      dataType: "JSON",
      data: {query:queryVal},
      success: success
    });
  },

  createTweet: data => {
    return $.ajax({
      method: "POST",
      url: "/tweets",
      dataType: "JSON",
      data: data
    });
  }




};

module.exports = APIUtil;
