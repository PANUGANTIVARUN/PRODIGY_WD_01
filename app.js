// Select the nav element
let navElement = document.getElementById('mainnav');

// Function to add/remove blur class based on scroll position
function handleScroll() {
    if (window.scrollY > 50) { // Change '50' to the scroll position you prefer
        navElement.classList.add('blur');
    } else {
        navElement.classList.remove('blur');
    }
}

// Add the scroll event listener
window.addEventListener('scroll', handleScroll);
