document.querySelectorAll('.faqItem').forEach((item) => {
  const question = item.querySelector('.faqQ');
  question.addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faqItem.open').forEach((el) => el.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

const SUPABASE_URL = 'https://ypsbkrolcspycaihfkno.supabase.co';
const SUPABASE_KEY = 'sb_publishable_uySWgbSM1O2oPoIrOtclcA_S-fXYFHO';

const waitlistForm = document.getElementById('waitlist-form');
const ctaSuccess = document.getElementById('cta-success');
if (waitlistForm) {
  waitlistForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('waitlist-email');
    const email = emailInput.value.trim();
    if (!email) return;

    const submitBtn = waitlistForm.querySelector('button[type="submit"]');
    const originalLabel = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'جارٍ الحجز...';

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok && res.status !== 409) {
        throw new Error(`Request failed: ${res.status}`);
      }

      waitlistForm.hidden = true;
      ctaSuccess.hidden = false;
    } catch (err) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
      alert('حدث خطأ أثناء التسجيل، حاول مرة أخرى.');
    }
  });
}
