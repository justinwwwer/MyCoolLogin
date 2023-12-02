// Get the form element
const form = document.querySelector('form');

// Add event listener to the form submission
form.addEventListener('submit',function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the values of the username and password fields
  const username = form.username.value;
  const password = form.password.value;

  // Check if either the username or password is empty
  if (username === '' && password === '') {
    alert('Please fill in Username and Password');
  } else if (username === '') {
    alert('Please fill in Username');
  } else if (password === '') {
    alert('Please fill in Password');
  } else {
    alert('Completed');
    // You can add additional logic here, like redirecting to another page
  }
});