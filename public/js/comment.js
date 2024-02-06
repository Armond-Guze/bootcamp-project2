$(document).ready(function() {
    // Event listener for the submit button click event
    $("#submit").on("click", function(event) {
        event.preventDefault();
        
        // Collect comment data from input fields
        var username = $("#usernameInput").val();
        var commentText = $("#commentBody").val();
        var createdAt = new Date(); // Current date/time
        
        // Construct the comment object
        var newComment = {
            user: {
                username: username
            },
            comment_body: commentText,
            createdAt: createdAt
        };

        // Call a function to post the comment onto the page
        postComment(newComment);
    });
});

// Function to post the comment onto the page
function postComment(comment) {
    // Compile the comment card template using Handlebars
    var template = Handlebars.compile($("#comment-card").html());
    
    // Pass the comment data to the compiled template to create the HTML
    var html = template(comment);
    
    // Append the HTML to the comments section on the page
    $(".comments").append(html);
}
