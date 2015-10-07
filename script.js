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
      populatePage(githubData);
    },
    error: function(err) {
      console.log(err);
    }
  });

  $.ajax({
    url: githubAjaxCall.githubUrl+githubName+"/starred",
    type: "GET"
  }).done(function(data) {
    $(".starred").text(JSON.parse(data.length));
  });

  function populatePage(g) {

    details = {
      bio: "bio",
      company: "company",
      blog: "blog",
      location: "location",
      email: "email",
      hireable: "hireable"
    }
    $(".fullname").text(g.name);
    $(".username").text(g.login);
    $(".avatar").attr("src", g.avatar_url);
    $details = $(".card-details");
    if (g.company) {
      $details.append("<li>"+g.company+"</li>");
    }
    if (g.bio) {
      $details.append("<li>"+g.bio+"</li>");
    }
    if (g.blog) {
      $details.append("<li>"+g.blog+"</li>");
    }
    if (g.locatioin) {
      $details.append("<li>"+g.locatioin+"</li>");
    }
    if (g.email) {
      $details.append("<li>"+g.email+"</li>");
    }
    if (g.hireable) {
      $details.append("<li>"+g.hireable+"</li>");
    }
    d = (new Date(g.created_at)).toDateString().split(' ').splice(1).join(' ');
    $details.append("<li>Joined on "+d+"</li>")
    $('.followers').text(g.followers);
    $('.following').text(g.following);
  };

});
