document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedback-form');
    const commentsSection = document.getElementById('comments-section');

    // Load existing comments from localStorage when the page loads
    loadComments();

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission from reloading the page

        // Get input values
        const name = document.getElementById('name').value;
        const feedback = document.getElementById('feedback-text').value;

        // Create a new comment object
        const comment = {
            name: name || 'Anonymous', // Default to 'Anonymous' if no name is entered
            feedback: feedback
        };

        // Save the comment to localStorage
        saveComment(comment);

        // Clear the form inputs
        form.reset();
    });

    function saveComment(comment) {
        // Retrieve existing comments from localStorage
        let comments = JSON.parse(localStorage.getItem('comments')) || [];

        // Add new comment to the array
        comments.push(comment);

        // Save the updated comments array back to localStorage
        localStorage.setItem('comments', JSON.stringify(comments));

        // Display the new comment
        displayComment(comment);
    }

    function loadComments() {
        // Retrieve existing comments from localStorage
        let comments = JSON.parse(localStorage.getItem('comments')) || [];

        // Display each comment
        comments.forEach(comment => {
            displayComment(comment);
        });
    }

    function displayComment(comment) {
        // Create a new comment div
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');

        // Add comment content
        const commentHeader = document.createElement('h4');
        commentHeader.textContent = comment.name;
        commentDiv.appendChild(commentHeader);

        const commentBody = document.createElement('p');
        commentBody.textContent = comment.feedback;
        commentDiv.appendChild(commentBody);

        // Append the comment to the comments section
        commentsSection.appendChild(commentDiv);
    }
});
