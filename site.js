const links = document.querySelectorAll('a');
links.forEach(e => e.addEventListener('click',(e) => underConstructionAlert()))

function underConstructionAlert() {
  alert('Under construction');
}