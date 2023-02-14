var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});


// START FOOTER

const getyear = document.getElementById('getyear');
const getFullyear = new Date().getFullYear();
getyear.textContent = getFullyear;
// END FOOTER
