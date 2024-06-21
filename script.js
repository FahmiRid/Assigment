const form = document.getElementById('marine-debris-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const debrisType = document.getElementById('debris-type').value;
    const source = document.getElementById('source').value;
    const location = document.getElementById('location').value;
    const impacts = document.getElementById('impacts').value;
    const email = document.getElementById('email').value;

      // Check if all fields are filled
      if (debrisType && source && location && impacts && email) {
        alert("Form submitted successfully!");
    } else {
        alert("Please fill in all required fields.");
    }
})