$(function() {

  // your code will go here
  var reportCardUrl = "https://www.codeschool.com/users/payne68106.json";
  $.ajax({
    url: reportCardUrl,
    dataType: 'jsonp',
    success: function(response) {
      //alert('it worked! response='+response.courses.completed[0].title);
      processCompletedCourses(response.courses.completed);
    }
  });

  function processCompletedCourses(completedCourses) {
    var badges = $('#badges');
    completedCourses.forEach(function(course) {
      var newHtml = "<div class='course'>";
      newHtml += "<h3>"+course.title+"</h3>";
      newHtml += "<img src='"+course.badge+"'/>";
      newHtml += "<a href='"+course.url+"' target='_blank' class='btn btn-primary'>";
      newHtml += "See Course</a>"
      newHtml += "</div>";
      badges.append(newHtml);
      //alert('course: '+course.title);
    });
  }


});
