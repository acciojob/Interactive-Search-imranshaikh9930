//your JS code here. If required.
 function activateSearch() {
    const searchDiv = document.querySelector('.search');
    const input = document.querySelector('.input');

    // Toggle the 'active' class on the search div
    searchDiv.classList.toggle('active');

    // Focus on the input after clicking the button
    if (searchDiv.classList.contains('active')) {
      input.focus();
    }
  }