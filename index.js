function addingEventListener() {
    // Get a reference to the input element by its ID
    const input = document.getElementById('input');
  
    // Define the event listener function
    function handleClick() {
      alert('Input was clicked!');
    }
  
    // Add a click event listener to the input element
    input.addEventListener('click', handleClick);
  }
  
  // Call the addingEventListener function to set up the event listener
  addingEventListener();
  
