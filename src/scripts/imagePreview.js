export function imagePreview() {
  const uiPagesContainer = document.getElementById('uiPagesContainer');
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const closeModal = document.getElementById('closeModal');

  //   handle image click to preview
  uiPagesContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('preview-image')) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      modalImage.src = e.target.src;
    }
  });

  //   handle close button event
  closeModal.addEventListener('click', () => {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
  });

  //   handle Escape button close event
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.classList.remove('flex');
      modal.classList.add('hidden');
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('imageModel')) {
      modal.classList.remove('flex');
      modal.classList.add('hidden');
    }
  });
}
