function change(){
  var elements = document.querySelectorAll('.klick');
  elements.forEach(function(element) {
    element.classList.toggle('hidden');
  });
}
