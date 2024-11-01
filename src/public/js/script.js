document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = new URLSearchParams(formData);
  
    fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {
      if (!response.ok) {
        return response.json().then(error => { throw new Error(error.error); });
      }
      return response.text();
    })
    .then(() => {
      window.location.href = `/confirmation?name=${formData.get('name')}&age=${formData.get('age')}&email=${formData.get('email')}`;
    })
    .catch(error => {
      alert(error.message);
    });
  });