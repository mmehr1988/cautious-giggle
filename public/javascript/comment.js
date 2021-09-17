'use strict';

const addComment = document.querySelector('.add-comment-button');

const commentFormHandler = async () => {
  const comment_text = document.querySelector('.comment-textarea').value;
  const post_id = window.location.pathname.split('/').pop();

  if (comment_text) {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        post_id,
        comment_text,
      }),
    };
    const response = await fetch(`/api/comments`, options);

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

// /////////////////////////////////////////////////////////////////
// // EVENT LISTENERS
// /////////////////////////////////////////////////////////////////
if (window.location.pathname.split('/').includes('post')) {
  addComment.addEventListener('click', commentFormHandler);
}
