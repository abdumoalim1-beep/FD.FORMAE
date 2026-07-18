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

const modal = document.getElementById('waitlist-modal');
const openModalBtn = document.getElementById('open-waitlist-modal');
const closeModalBtn = document.getElementById('modal-close');
const modalForm = document.getElementById('modal-form');
const ctaSuccess = document.getElementById('cta-success');

function openModal() {
  modal.hidden = false;
  document.getElementById('q-doc').focus();
}

function closeModal() {
  modal.hidden = true;
}

if (openModalBtn) openModalBtn.addEventListener('click', openModal);
if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });
}

document.querySelectorAll('.pillGroup').forEach((group) => {
  group.querySelectorAll('.pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      group.querySelectorAll('.pill').forEach((p) => p.classList.remove('selected'));
      pill.classList.add('selected');
    });
  });
});

function selectedPill(fieldName) {
  const group = document.querySelector(`.pillGroup[data-field="${fieldName}"]`);
  const selected = group.querySelector('.pill.selected');
  return selected ? selected.textContent : null;
}

if (modalForm) {
  modalForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('q-email').value.trim();
    if (!email) return;

    const payload = {
      email,
      document_type: document.getElementById('q-doc').value.trim() || null,
      monthly_volume: selectedPill('monthly_volume'),
      main_problem: selectedPill('main_problem'),
    };

    const submitBtn = modalForm.querySelector('.modalSubmit');
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
        body: JSON.stringify(payload),
      });

      if (!res.ok && res.status !== 409) {
        throw new Error(`Request failed: ${res.status}`);
      }

      closeModal();
      openModalBtn.hidden = true;
      ctaSuccess.hidden = false;
    } catch (err) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
      alert('حدث خطأ أثناء التسجيل، حاول مرة أخرى.');
    }
  });
}
