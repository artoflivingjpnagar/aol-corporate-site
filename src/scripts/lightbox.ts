/** Tap a gallery photo to view it full size; tap anywhere (or press Esc) to close. */
export function initLightbox(): void {
  const dialog = document.querySelector<HTMLDialogElement>('dialog.lightbox');
  const img = dialog?.querySelector('img');
  if (!dialog || !img) return;

  document.querySelectorAll<HTMLButtonElement>('[data-full]').forEach((tile) => {
    tile.addEventListener('click', () => {
      img.src = tile.dataset.full ?? '';
      img.alt = tile.querySelector('img')?.alt ?? '';
      dialog.showModal();
    });
  });

  dialog.addEventListener('click', () => dialog.close());
}
