$(function(){

  var githubName = "vaticancameo";

  var githubParameters = function(githubUserName) {
    this.githubName = githubUserName;
    this.githubUrl = "https://api.github.com/users/";
  };

  var githubAjaxCall = new githubParameters(githubName);

  $.ajax({
    type: "GET",
    url: githubAjaxCall.githubUrl + githubAjaxCall.githubName,
    success: function(githubData) {
      console.log(githubData);
    },
    error: function(err) {
      console.log(err);
    }
  });

});
