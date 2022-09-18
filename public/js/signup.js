const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title-newPost');
    const content = document.querySelector('#content-newPost');
    
    if (email && password && username) {
      const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify ({    
            title: title.value,
            body: content.value, 
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert('Failed to publish post.');
      }
    }
  };
  
  document
    .querySelector('.newPost-form')
    .addEventListener('submit', loginFormHandler);
  