// Event listener for the submit button click event
document.getElementById("commentForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    // Collect comment data from input fields
    var commentText = document.getElementById("body").value;

    // Construct the comment object
    var newComment = {
        body: commentText,
        post_id: document.getElementById("commentForm").getAttribute('data-id')
    };
    console.log(newComment);
    const response = await fetch('/api/comments', {
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

// const delComment = async (event) => {
  document.getElementById("delete-button").addEventListener("click", async function(event){
    console.log("testing")
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/post');
      } else {
        alert('Failed to delete comment');
      }
    }
  });


