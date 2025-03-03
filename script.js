function switchLanguage(language) {
  const elements = document.querySelectorAll('[data-es], [data-en]');
  elements.forEach(function(element) {
    if (language === 'es') {
      element.textContent = element.getAttribute('data-es');
    } else {
      element.textContent = element.getAttribute('data-en');
    }
  });
}
