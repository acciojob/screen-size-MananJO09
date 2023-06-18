//your JS code here. If required.
// Function to handle the window resize event
function handleResize() {
  // Get the width and height of the window
  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  // Display the width and height
  console.log('Width: ' + width);
  console.log('Height: ' + height);
}

// Add event listener for window resize
window.addEventListener('resize', handleResize);

// Initial call to handleResize to get the width and height on page load
handleResize();
