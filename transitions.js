document.addEventListener('click', function (e) {
  var link = e.target.closest('a[href]');
  if (!link) return;
  var href = link.getAttribute('href');
  if (!href) return;
  if (href.startsWith('http') || href.startsWith('//') ||
      href.startsWith('mailto') || href.startsWith('tel') ||
      href.startsWith('#')) return;
  if (link.hasAttribute('download')) return;

  e.preventDefault();
  document.body.style.transition = 'opacity 0.2s ease';
  document.body.style.opacity = '0';
  setTimeout(function () { window.location.href = href; }, 210);
});
