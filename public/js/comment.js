$(document).ready(function() {
    // Event listener for the submit button click event
    $("#submit").on("click", async function(event) {
        event.preventDefault();
        
        // Collect comment data from input fields
        var commentText = $("#commentBody").val();
        
        // Construct the comment object
        var newComment = {
            
            comment_body: commentText,
        };
        const response = await fetch('/api/comment', {
                method: 'POST',
                body: JSON.stringify(newComment),
                headers: {
                  'Content-Type': 'application/json',
                },
                   
        }) 
        if (response.ok) {
            document.location.reload();
          } else {
            alert('Failed to create post');
          }
    });
});

