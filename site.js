(function () {
  var nav = document.querySelector('.pz-nav');
  if (!nav) return;
  var menuBtn = nav.querySelector('.pz-menu-btn'), dd = nav.querySelector('.pz-dd'), ddBtn = dd && dd.querySelector('button');
  function setMenu(open) { nav.classList.toggle('pz-nav-open', open); menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false'); }
  function setDd(open) { if (!dd) return; dd.classList.toggle('open', open); ddBtn.setAttribute('aria-expanded', open ? 'true' : 'false'); }
  menuBtn.addEventListener('click', function () { setMenu(!nav.classList.contains('pz-nav-open')); });
  if (dd) {
    ddBtn.addEventListener('click', function (e) { e.stopPropagation(); setDd(!dd.classList.contains('open')); });
    document.addEventListener('click', function (e) { if (!dd.contains(e.target)) setDd(false); });
  }
  nav.querySelectorAll('.pz-navlinks a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); setDd(false); }); });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (dd && dd.classList.contains('open')) { setDd(false); ddBtn.focus(); }
    else if (nav.classList.contains('pz-nav-open')) { setMenu(false); menuBtn.focus(); }
  });
})();
