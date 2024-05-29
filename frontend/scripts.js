$(document).ready(function () {
  $("#survey-form").on("submit", function (e) {
    e.preventDefault();

    // Get form data
    var formData = $(this).serialize();

    // Send data to backend
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/submit-survey",
      data: formData,
      success: function (response) {
        var resultHtml = "<h2>Survey Results</h2><ul>";
        $.each(response.data, function (key, value) {
          resultHtml +=
            "<li><strong>" +
            key.charAt(0).toUpperCase() +
            key.slice(1) +
            ":</strong> " +
            value +
            "</li>";
        });
        resultHtml += "</ul>";
        $("#result").html(resultHtml);
      },
      error: function () {
        $("#result").html(
          '<p style="color:red;">There was an error submitting the survey. Please try again.</p>'
        );
      },
    });

    this.reset();
  });
});
