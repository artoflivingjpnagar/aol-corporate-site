/** Mobile hamburger: opens/closes the nav links panel. Closes on link tap, outside tap or Esc. */
export function initMobileMenu(): void {
  const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
  const panel = document.getElementById('nav-links');
  if (!toggle || !panel) return;

  const setOpen = (open: boolean): void => {
    panel.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  const isOpen = (): boolean => panel.classList.contains('open');

  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    setOpen(!isOpen());
  });

  // Tapping a link jumps to the section, so the menu should get out of the way.
  panel.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));

  document.addEventListener('click', (event) => {
    if (isOpen() && !panel.contains(event.target as Node)) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Rotating a tablet to desktop width shouldn't leave the panel stuck open.
  window.matchMedia('(min-width: 901px)').addEventListener('change', (e) => {
    if (e.matches) setOpen(false);
  });
}
