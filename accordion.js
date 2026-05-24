document.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
  trigger.addEventListener('click', function () {
    var item = this.closest('.accordion-item');
    var isOpen = item.classList.contains('open');
    item.closest('.accordion').querySelectorAll('.accordion-item.open').forEach(function (el) {
      el.classList.remove('open');
    });
    if (!isOpen) item.classList.add('open');
  });
});
