'use strict';

const createPostBtn = document.querySelector('#create-post');

const newPostHandler = async () => {
  const title = document.querySelector('.note-title').value;
  const post_content = document.querySelector('.note-textarea').value;

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title,
      post_content,
    }),
  };

  const response = await fetch('/api/posts/', options);

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};

/////////////////////////////////////////////////////////////////
// EVENT LISTENERS
/////////////////////////////////////////////////////////////////
if (window.location.pathname === '/dashboard/create/') {
  createPostBtn.addEventListener('click', newPostHandler);
}
