'use strict';

var editBtnClicked = document.querySelectorAll('button');

/////////////////////////////////////////////////////////////////////
// EDIT POST
/////////////////////////////////////////////////////////////////////

const editFormHandler = async () => {
  const title = document.querySelector('.note-title').value;
  const post_content = document.querySelector('.note-textarea').value;
  const post_id = window.location.pathname.split('/').pop();

  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title,
      post_content,
    }),
  };
  const response = await fetch(`/api/posts/${post_id}`, options);

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
};

/////////////////////////////////////////////////////////////////////
// DETELE POST
/////////////////////////////////////////////////////////////////////

const deleteFormHandler = async () => {
  const post_id = window.location.pathname.split('/').pop();
  const options = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ post_id }),
  };
  const response = await fetch(`/api/posts/${post_id}`, options);

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
};

/////////////////////////////////////////////////////////////////////
// LOOP FOR WHICH EDIT BUTTON CLICKED
/////////////////////////////////////////////////////////////////////

for (let i = 0; i < editBtnClicked.length; i++) {
  editBtnClicked[i].addEventListener('click', function () {
    if (editBtnClicked[i].id === 'save-post-button') {
      editFormHandler();
    } else if (editBtnClicked[i].id === 'delete-post-button') {
      deleteFormHandler();
    }
  });
}
