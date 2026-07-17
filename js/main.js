document.querySelectorAll('.faqItem').forEach((item) => {
  const question = item.querySelector('.faqQ');
  question.addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faqItem.open').forEach((el) => el.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

const waitlistForm = document.getElementById('waitlist-form');
const ctaSuccess = document.getElementById('cta-success');
if (waitlistForm) {
  waitlistForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('waitlist-email').value.trim();
    if (!email) return;
    waitlistForm.hidden = true;
    ctaSuccess.hidden = false;
  });
}
