document.querySelectorAll('.js-scroll-waitlist').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  });
});

const copyBtn = document.getElementById('copy-link-btn');
if (copyBtn) {
  const defaultLabel = copyBtn.textContent;
  copyBtn.addEventListener('click', () => {
    navigator.clipboard?.writeText('https://forma.app/waitlist').catch(() => {});
    copyBtn.textContent = 'تم النسخ ✓';
    setTimeout(() => { copyBtn.textContent = defaultLabel; }, 1800);
  });
}

document.querySelectorAll('.faq-item').forEach((item) => {
  const question = item.querySelector('.faq-q');
  question.addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach((el) => el.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

const waitlistForm = document.getElementById('waitlist-form');
const waitlistSuccess = document.getElementById('waitlist-success');
if (waitlistForm) {
  waitlistForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('waitlist-email').value.trim();
    if (!email) return;
    waitlistForm.hidden = true;
    waitlistSuccess.hidden = false;
  });
}
