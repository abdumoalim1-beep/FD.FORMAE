document.querySelectorAll('.faqItem').forEach((item) => {
  const question = item.querySelector('.faqQ');
  question.addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faqItem.open').forEach((el) => el.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

/* ---------- Rotating demo scenarios ---------- */

const heroScenarios = [
  { file: 'الموظفين_الجدد.xlsx', request: 'أنشئ عقود جميع الموظفين الجدد', resultLabel: 'تم إنشاء 24 عقدًا', files: ['عقد — سارة أحمد.docx', 'عقد — محمد خالد.docx', 'عقد — نورة علي.docx', '+21 ملفًا'] },
  { file: 'عملاء_جدد.xlsx', request: 'أنشئ عروض أسعار لجميع العملاء الجدد', resultLabel: 'تم إنشاء 12 عرض سعر', files: ['عرض سعر — شركة ألف.docx', 'عرض سعر — شركة باء.docx', 'عرض سعر — أحمد.docx', '+9 ملفات'] },
  { file: 'المشاركين.xlsx', request: 'أنشئ شهادات حضور لجميع المشاركين', resultLabel: 'تم إنشاء 48 شهادة', files: ['شهادة — سلمى.pdf', 'شهادة — فهد.pdf', 'شهادة — ريم.pdf', '+45 ملفًا'] },
];

const singleScenarios = [
  { request: 'جهّز عرض سعر لشركة ألف وفق الاتفاق الجديد', doc: 'عرض السعر' },
  { request: 'جهّز عقد عمل لموظف جديد في المبيعات', doc: 'عقد العمل' },
  { request: 'جهّز خطاب شكر لعميل شركة باء', doc: 'خطاب الشكر' },
];

const clientScenarios = [
  { brief: 'اتفقنا مع شركة ألف على الباقة الاحترافية بقيمة 9,500 ريال، وتبدأ الخدمة في 1 أغسطس', tags: ['العميل: شركة ألف', 'الباقة: الاحترافية', 'القيمة: 9,500 ريال', 'تاريخ البداية: 1 أغسطس'], files: ['عرض السعر النهائي', 'العقد', 'الفاتورة', 'خطاب بدء العمل'] },
  { brief: 'اتفقنا مع مؤسسة نور على باقة النمو بقيمة 4,200 ريال شهريًا، بدءًا من 15 سبتمبر', tags: ['العميل: مؤسسة نور', 'الباقة: النمو', 'القيمة: 4,200 ريال', 'تاريخ البداية: 15 سبتمبر'], files: ['عرض السعر النهائي', 'العقد', 'الفاتورة', 'خطاب ترحيب'] },
  { brief: 'وظّفنا خالد العتيبي كمدير مشاريع براتب 14,000 ريال، ويبدأ العمل في 1 سبتمبر', tags: ['الموظف: خالد العتيبي', 'المسمى: مدير مشاريع', 'الراتب: 14,000 ريال', 'تاريخ البداية: 1 سبتمبر'], files: ['عقد العمل', 'خطاب التعيين', 'نموذج التأمينات', 'بطاقة الموظف'] },
];

const scaleScenarios = [
  { template: 'قالب عقد العمل', dataFile: 'الموظفون.xlsx — 100 موظف', request: 'أنشئ عقدًا لكل موظف في هذا الجدول', progressLabel: 'جاري إنشاء 100 عقد…', files: ['عقد — أحمد محمد', 'عقد — سارة خالد', 'عقد — نورة علي', '+97 ملفًا'] },
  { template: 'قالب عرض السعر', dataFile: 'العملاء_الجدد.xlsx — 48 عميلًا', request: 'أنشئ عرض سعر لكل عميل في هذا الجدول', progressLabel: 'جاري إنشاء 48 عرض سعر…', files: ['عرض سعر — شركة ألف', 'عرض سعر — شركة باء', 'عرض سعر — أحمد', '+45 ملفًا'] },
  { template: 'قالب شهادة الحضور', dataFile: 'المشاركين.xlsx — 200 مشارك', request: 'أنشئ شهادة حضور لكل مشارك في هذا الجدول', progressLabel: 'جاري إنشاء 200 شهادة…', files: ['شهادة — سلمى', 'شهادة — فهد', 'شهادة — ريم', '+197 ملفًا'] },
];

function renderHeroScenario(i) {
  const s = heroScenarios[i];
  document.getElementById('hero-demo-file').textContent = `📎 ${s.file}`;
  document.getElementById('hero-demo-request').textContent = s.request;
  document.getElementById('hero-demo-result-label').textContent = s.resultLabel;
  document.getElementById('hero-demo-result-files').innerHTML = s.files.map((f) => `<span>${f}</span>`).join('');
}

function renderSingleScenario(i) {
  const s = singleScenarios[i];
  document.getElementById('single-demo-request').textContent = s.request;
  document.getElementById('single-demo-doc').textContent = s.doc;
  document.getElementById('single-demo-doc2').textContent = s.doc;
}

function renderClientScenario(i) {
  const s = clientScenarios[i];
  document.getElementById('client-demo-brief').textContent = s.brief;
  document.getElementById('client-demo-tags').innerHTML = s.tags.map((t) => `<span>${t}</span>`).join('');
  document.getElementById('client-demo-files').innerHTML = s.files.map((f) => `<div>${f}</div>`).join('');
}

function renderScaleScenario(i) {
  const s = scaleScenarios[i];
  document.getElementById('scale-demo-chips').innerHTML = `<span>📄 ${s.template}</span><span>📊 ${s.dataFile}</span>`;
  document.getElementById('scale-demo-request').textContent = s.request;
  document.getElementById('scale-demo-label').textContent = s.progressLabel;
  document.getElementById('scale-demo-files').innerHTML = s.files
    .map((f) => `<div><span>${f}</span><span class="tick">✓</span></div>`)
    .join('');
}

function startRotator(render, count, intervalMs) {
  let i = 0;
  render(i);
  setInterval(() => {
    i = (i + 1) % count;
    render(i);
  }, intervalMs);
}

if (document.getElementById('hero-demo')) startRotator(renderHeroScenario, heroScenarios.length, 4500);
if (document.getElementById('single-demo')) startRotator(renderSingleScenario, singleScenarios.length, 3800);
if (document.getElementById('client-demo')) startRotator(renderClientScenario, clientScenarios.length, 4200);
if (document.getElementById('scale-demo')) startRotator(renderScaleScenario, scaleScenarios.length, 4800);

/* ---------- Waitlist modal ---------- */

const SUPABASE_URL = 'https://ypsbkrolcspycaihfkno.supabase.co';
const SUPABASE_KEY = 'sb_publishable_uySWgbSM1O2oPoIrOtclcA_S-fXYFHO';

const modal = document.getElementById('waitlist-modal');
const openModalBtns = document.querySelectorAll('.js-open-modal');
const closeModalBtn = document.getElementById('modal-close');
const backBtn = document.getElementById('modal-back');
const nextBtn = document.getElementById('modal-next');
const modalForm = document.getElementById('modal-form');
const modalTitle = document.getElementById('modal-title');
const modalSubtitle = document.getElementById('modal-subtitle');
const joinOpenBtn = document.getElementById('join-open-modal');
const ctaSuccess = document.getElementById('cta-success');

const stepMeta = [
  { title: 'كم ساعة تقضي شهريًا في إنشاء المستندات وتعديلها؟', sub: 'إجابتك تساعدنا على تجهيز FORMA لحالتك بالضبط.' },
  { title: 'كم مستندًا تنشئ أو تعدّل شهريًا؟', sub: 'إجابتك تساعدنا على تجهيز FORMA لحالتك بالضبط.' },
  { title: 'ما أكثر ما يستهلك وقتك عند تجهيز المستندات؟', sub: 'إجابتك تساعدنا على تجهيز FORMA لحالتك بالضبط.' },
  { title: 'احجز وصولك المبكر', sub: 'بريدك الإلكتروني وسنراسلك عند فتح الوصول المبكر.' },
];

const answers = { hours_per_month: null, documents_per_month: null, pain_points: [] };
let currentStep = 0;

function renderStep() {
  document.querySelectorAll('.modalStep').forEach((el) => {
    el.hidden = Number(el.dataset.step) !== currentStep;
  });
  document.querySelectorAll('.stepDot').forEach((dot) => {
    dot.classList.toggle('done', Number(dot.dataset.step) <= currentStep);
  });
  backBtn.hidden = currentStep === 0;
  modalTitle.textContent = stepMeta[currentStep].title;
  modalSubtitle.textContent = stepMeta[currentStep].sub;
}

function resetModal() {
  currentStep = 0;
  answers.hours_per_month = null;
  answers.documents_per_month = null;
  answers.pain_points = [];
  document.querySelectorAll('.optionBtn, .checkBtn').forEach((btn) => btn.classList.remove('selected'));
  if (nextBtn) nextBtn.disabled = true;
  const emailInput = document.getElementById('q-email');
  if (emailInput) emailInput.value = '';
  renderStep();
}

function openModal() {
  resetModal();
  modal.hidden = false;
}

function closeModal() {
  modal.hidden = true;
}

openModalBtns.forEach((btn) => btn.addEventListener('click', openModal));
if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
if (backBtn) {
  backBtn.addEventListener('click', () => {
    currentStep = Math.max(0, currentStep - 1);
    renderStep();
  });
}
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });
}

document.querySelectorAll('.optionList').forEach((group) => {
  const field = group.dataset.field;
  group.querySelectorAll('.optionBtn').forEach((btn) => {
    btn.addEventListener('click', () => {
      group.querySelectorAll('.optionBtn').forEach((b) => b.classList.remove('selected'));
      btn.classList.add('selected');
      answers[field] = btn.textContent;
      currentStep += 1;
      renderStep();
    });
  });
});

const painGroup = document.querySelector('.checkList[data-field="pain_points"]');
if (painGroup) {
  painGroup.querySelectorAll('.checkBtn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const label = btn.textContent;
      const idx = answers.pain_points.indexOf(label);
      if (idx === -1) {
        answers.pain_points.push(label);
        btn.classList.add('selected');
      } else {
        answers.pain_points.splice(idx, 1);
        btn.classList.remove('selected');
      }
      nextBtn.disabled = answers.pain_points.length === 0;
    });
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    if (answers.pain_points.length === 0) return;
    currentStep += 1;
    renderStep();
  });
}

if (modalForm) {
  modalForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('q-email').value.trim();
    if (!email) return;

    const payload = {
      email,
      hours_per_month: answers.hours_per_month,
      documents_per_month: answers.documents_per_month,
      pain_points: answers.pain_points.join('، ') || null,
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
      if (joinOpenBtn) joinOpenBtn.hidden = true;
      if (ctaSuccess) ctaSuccess.hidden = false;
    } catch (err) {
      alert('حدث خطأ أثناء التسجيل، حاول مرة أخرى.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    }
  });
}
