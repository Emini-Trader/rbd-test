// Logika interaktywnego quizu.

const AVAILABLE_COUNTS = [10, 15, 20, 25, 30, 50];
const REVIEW_THRESHOLD = 70; // % poniżej którego rozdział trafia do listy "do powtórki"
const MASTERY_KEY = "quizMasteredIds";

// Lista rozdziałów (grup tematycznych) w kolejności pierwszego wystąpienia w bazie,
// z liczbą pytań w każdym - używana zarówno w przeglądarce pytań, jak i w wyborze
// grup do testu.
function getChaptersInfo() {
  const order = [];
  const byChapter = new Map();
  QUESTIONS.forEach(q => {
    if (!byChapter.has(q.chapter)) {
      byChapter.set(q.chapter, { code: q.chapter, name: q.chapterName, count: 0 });
      order.push(q.chapter);
    }
    byChapter.get(q.chapter).count++;
  });
  return order.map(code => byChapter.get(code));
}

function getMasteredIds() {
  try {
    const raw = localStorage.getItem(MASTERY_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch (e) {
    return new Set();
  }
}

function saveMasteredIds(set) {
  try {
    localStorage.setItem(MASTERY_KEY, JSON.stringify([...set]));
  } catch (e) {
    // localStorage niedostępny (np. tryb prywatny) - po prostu pomijamy zapis
  }
}

function markMastered(id, wasCorrect) {
  const mastered = getMasteredIds();
  if (wasCorrect) {
    mastered.add(id);
  } else {
    mastered.delete(id);
  }
  saveMasteredIds(mastered);
}

function resetProgress() {
  saveMasteredIds(new Set());
}

// Jeśli cała baza jest już opanowana, od razu zaczynamy nowy cykl (czyścimy postęp),
// zamiast czekać z resetem do momentu kliknięcia "Rozpocznij test".
function checkFullCycleReset() {
  const mastered = getMasteredIds();
  if (mastered.size > 0 && mastered.size >= QUESTIONS.length) {
    saveMasteredIds(new Set());
    return true;
  }
  return false;
}

const state = {
  screen: "start", // start | quiz | summary
  selectedCount: null,
  selectedChapters: new Set(getChaptersInfo().map(c => c.code)), // domyślnie wszystkie grupy
  pool: [],
  currentIndex: 0,
  checked: {},     // aktualnie zaznaczone klucze opcji dla bieżącego pytania
  answered: false,
  results: [],      // {question, selectedKeys, correct}
};

const appEl = document.getElementById("app");

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuiz(count) {
  // Pula ograniczona do wybranych grup tematycznych (domyślnie wszystkie).
  const scope = state.selectedChapters && state.selectedChapters.size > 0
    ? QUESTIONS.filter(q => state.selectedChapters.has(q.chapter))
    : QUESTIONS;

  const n = Math.min(count, scope.length);

  // Zabezpieczenie na wypadek gdyby ekran startowy nie zdążył zrobić resetu
  // (np. wywołanie startQuiz() bez wcześniejszego renderStart()).
  checkFullCycleReset();

  let mastered = getMasteredIds();
  let unmastered = scope.filter(q => !mastered.has(q.id));

  const shuffledUnmastered = shuffle(unmastered);
  let pool = shuffledUnmastered.slice(0, n);

  // Za mało nieopanowanych pytań na wybraną liczbę - dobieramy resztę z już opanowanych
  // (w obrębie tych samych, wybranych grup tematycznych).
  if (pool.length < n) {
    const masteredQuestions = scope.filter(q => mastered.has(q.id));
    const filler = shuffle(masteredQuestions).slice(0, n - pool.length);
    pool = shuffle(pool.concat(filler));
  }

  state.pool = pool;
  state.currentIndex = 0;
  state.checked = {};
  state.answered = false;
  state.results = [];
  state.screen = "quiz";
  render();
}

function toggleOption(key) {
  if (state.answered) return;
  state.checked[key] = !state.checked[key];
  render();
}

function checkAnswer() {
  const q = state.pool[state.currentIndex];
  const selectedKeys = Object.keys(state.checked).filter(k => state.checked[k]);
  const correctKeys = q.options.filter(o => o.correct).map(o => o.key);
  const isFullyCorrect =
    selectedKeys.length === correctKeys.length &&
    selectedKeys.every(k => correctKeys.includes(k));

  state.answered = true;
  state.results.push({
    id: q.id,
    chapter: q.chapter,
    chapterName: q.chapterName,
    correct: isFullyCorrect,
  });
  markMastered(q.id, isFullyCorrect);
  render();
}

function nextQuestion() {
  state.currentIndex++;
  state.checked = {};
  state.answered = false;
  if (state.currentIndex >= state.pool.length) {
    state.screen = "summary";
  }
  render();
}

function restart() {
  state.screen = "start";
  state.selectedCount = null;
  state.pool = [];
  state.currentIndex = 0;
  state.checked = {};
  state.answered = false;
  state.results = [];
  render();
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// ---------- RENDER ----------

function render() {
  if (state.screen === "start") renderStart();
  else if (state.screen === "quiz") renderQuiz();
  else if (state.screen === "summary") renderSummary();
  else if (state.screen === "browse") renderBrowse();
}

function renderBrowse() {
  // Grupowanie pytań wg rozdziału, w kolejności pierwszego wystąpienia w bazie.
  const chapterOrder = [];
  const byChapter = new Map();
  QUESTIONS.forEach(q => {
    if (!byChapter.has(q.chapter)) {
      byChapter.set(q.chapter, { name: q.chapterName, questions: [] });
      chapterOrder.push(q.chapter);
    }
    byChapter.get(q.chapter).questions.push(q);
  });

  const navHtml = chapterOrder.map(ch => {
    const c = byChapter.get(ch);
    return `<a href="#browse-${ch}" class="chapter-nav-link"><span class="chapter-tag">${ch}</span>${escapeHtml(c.name)} <span class="chapter-nav-count">(${c.questions.length})</span></a>`;
  }).join("");

  const sectionsHtml = chapterOrder.map(ch => {
    const c = byChapter.get(ch);
    const questionsHtml = c.questions.map(q => renderBrowseQuestion(q)).join("");
    return `
      <section class="browse-chapter" id="browse-${ch}">
        <h2 class="browse-chapter-title"><span class="chapter-tag">${ch}</span>${escapeHtml(c.name)}</h2>
        ${questionsHtml}
      </section>
    `;
  }).join("");

  appEl.innerHTML = `
    <div class="browse-top">
      <button class="btn secondary" id="backToStartBtn">← Powrót</button>
      <div>
        <h1>Baza pytań i odpowiedzi</h1>
        <p class="subtitle">Wszystkie ${QUESTIONS.length} pytań z poprawnymi odpowiedziami, uzasadnieniami i rozwinięciem tematu - do samodzielnej nauki.</p>
      </div>
    </div>
    <nav class="chapter-nav">${navHtml}</nav>
    <div class="browse-list">${sectionsHtml}</div>
    <button class="btn secondary full" id="backToStartBtnBottom">← Powrót na start</button>
  `;

  const back = () => { state.screen = "start"; render(); };
  document.getElementById("backToStartBtn").addEventListener("click", back);
  document.getElementById("backToStartBtnBottom").addEventListener("click", back);
}

function renderBrowseQuestion(q) {
  const codeHtml = q.code ? `<pre class="code-block">${escapeHtml(q.code)}</pre>` : "";

  const optionsHtml = q.options.map(opt => {
    const cls = opt.correct ? "browse-option correct" : "browse-option";
    const badge = opt.correct ? '<span class="option-badge">Poprawna</span>' : "";
    const imageHtml = opt.image
      ? `<img class="option-image" src="${escapeHtml(opt.image)}" alt="${escapeHtml(opt.imageAlt || "")}">`
      : "";
    return `
      <div class="${cls}">
        <div class="browse-option-text">${opt.correct ? "✓" : "○"} ${escapeHtml(opt.text)} ${badge}</div>
        ${imageHtml}
        <div class="browse-option-explain">${escapeHtml(opt.explain)}</div>
      </div>
    `;
  }).join("");

  const topicHtml = q.topicSummary ? `
    <div class="topic-info">
      <div class="topic-info-title">📘 Warto wiedzieć${q.topicTitle ? ": " + escapeHtml(q.topicTitle) : ""}</div>
      <div class="topic-info-text">${escapeHtml(q.topicSummary)}</div>
    </div>
  ` : "";

  return `
    <div class="card browse-question">
      <div class="browse-question-id">${q.id}</div>
      <p class="question-text">${escapeHtml(q.question)}</p>
      ${codeHtml}
      <div class="options">${optionsHtml}</div>
      ${topicHtml}
    </div>
  `;
}

function renderStart() {
  const justFinishedCycle = checkFullCycleReset();
  const masteredCount = getMasteredIds().size;
  const chapters = getChaptersInfo();

  const chaptersHtml = chapters.map(c => {
    const isSelected = state.selectedChapters.has(c.code);
    return `
      <button class="chapter-toggle${isSelected ? " selected" : ""}" data-chapter="${escapeHtml(c.code)}" aria-pressed="${isSelected}">
        <span class="chapter-toggle-check">${isSelected ? "✓" : ""}</span>
        <span class="chapter-toggle-label"><span class="chapter-tag">${escapeHtml(c.code)}</span>${escapeHtml(c.name)}</span>
        <span class="chapter-toggle-count">${c.count}</span>
      </button>
    `;
  }).join("");

  appEl.innerHTML = `
    <h1>Quiz RBD</h1>
    <p class="subtitle">Baza ${QUESTIONS.length} pytań z zakresu: SQL, projektowanie schematów, postacie normalne, spójność i modelowanie relacyjnych baz danych. Wybierz liczbę pytań w teście.</p>
    <div class="card">
      ${justFinishedCycle ? '<div class="cycle-note">🎉 Ukończyłeś całą bazę pytań! Licznik postępu wystartował od nowa - kolejny test znów losuje z pełnej puli.</div>' : ""}
      <div class="mastery-row">
        <span>Opanowane pytania: <strong>${masteredCount} / ${QUESTIONS.length}</strong></span>
        ${masteredCount > 0 ? '<button class="link-btn" id="resetProgressBtn">Wyczyść postęp</button>' : ""}
      </div>
      <div class="count-grid" id="countGrid">
        ${AVAILABLE_COUNTS.map(c => `<button class="count-btn${state.selectedCount === c ? " selected" : ""}" data-count="${c}">${c}</button>`).join("")}
      </div>
      <div class="count-note">Pytania już opanowane (poprawnie rozwiązane) są pomijane, dopóki nie przerobisz całej bazy - błędne odpowiedzi wracają do puli.</div>

      <div class="chapters-header">
        <span class="chapters-title">Grupy tematyczne w teście</span>
        <span class="chapters-header-actions">
          <button class="link-btn" id="selectAllChaptersBtn">Zaznacz wszystkie</button>
          <button class="link-btn" id="selectNoneChaptersBtn">Odznacz wszystkie</button>
        </span>
      </div>
      <div class="chapter-grid" id="chapterGrid">${chaptersHtml}</div>
      <div class="count-note" id="chapterScopeNote">${chapterScopeNoteText()}</div>

      <button class="btn full" id="startBtn" disabled>Rozpocznij test</button>
      <button class="btn secondary full" id="browseBtn">📖 Zobacz wszystkie pytania i odpowiedzi</button>
    </div>
  `;

  updateStartBtnState();

  document.querySelectorAll(".count-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".count-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      state.selectedCount = parseInt(btn.dataset.count, 10);
      updateStartBtnState();
    });
  });

  function setChapterSelected(code, selected) {
    if (selected) state.selectedChapters.add(code);
    else state.selectedChapters.delete(code);
    const btn = document.querySelector(`.chapter-toggle[data-chapter="${CSS.escape(code)}"]`);
    if (btn) {
      btn.classList.toggle("selected", selected);
      btn.setAttribute("aria-pressed", String(selected));
      btn.querySelector(".chapter-toggle-check").textContent = selected ? "✓" : "";
    }
    document.getElementById("chapterScopeNote").textContent = chapterScopeNoteText();
    updateStartBtnState();
  }

  document.querySelectorAll(".chapter-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const code = btn.dataset.chapter;
      setChapterSelected(code, !state.selectedChapters.has(code));
    });
  });

  document.getElementById("selectAllChaptersBtn").addEventListener("click", () => {
    chapters.forEach(c => setChapterSelected(c.code, true));
  });

  document.getElementById("selectNoneChaptersBtn").addEventListener("click", () => {
    chapters.forEach(c => setChapterSelected(c.code, false));
  });

  document.getElementById("startBtn").addEventListener("click", () => {
    if (state.selectedCount && state.selectedChapters.size > 0) startQuiz(state.selectedCount);
  });

  document.getElementById("browseBtn").addEventListener("click", () => {
    state.screen = "browse";
    render();
  });

  const resetBtn = document.getElementById("resetProgressBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      resetProgress();
      render();
    });
  }
}

function chapterScopeNoteText() {
  if (state.selectedChapters.size === 0) {
    return "Wybierz co najmniej jedną grupę tematyczną, żeby rozpocząć test.";
  }
  const scopeCount = QUESTIONS.filter(q => state.selectedChapters.has(q.chapter)).length;
  if (state.selectedChapters.size === getChaptersInfo().length) {
    return `Wybrano wszystkie grupy - ${scopeCount} pytań w puli.`;
  }
  return `Wybrano ${state.selectedChapters.size} z ${getChaptersInfo().length} grup - ${scopeCount} pytań w puli.`;
}

function updateStartBtnState() {
  const startBtn = document.getElementById("startBtn");
  if (startBtn) startBtn.disabled = !state.selectedCount || state.selectedChapters.size === 0;
}

function renderQuiz() {
  const q = state.pool[state.currentIndex];
  const total = state.pool.length;
  const num = state.currentIndex + 1;

  const codeHtml = q.code
    ? `<pre class="code-block">${escapeHtml(q.code)}</pre>`
    : "";

  const optionsHtml = q.options.map(opt => {
    const isChecked = !!state.checked[opt.key];
    let classes = "option";
    let badge = "";
    if (state.answered) {
      classes += " locked";
      if (opt.correct && isChecked) {
        classes += " result-correct-selected";
        badge = '<span class="option-badge">Poprawnie zaznaczone</span>';
      } else if (opt.correct && !isChecked) {
        classes += " result-correct-missed";
        badge = '<span class="option-badge">Poprawna - nie zaznaczono</span>';
      } else if (!opt.correct && isChecked) {
        classes += " result-wrong-selected";
        badge = '<span class="option-badge">Błędnie zaznaczone</span>';
      }
    } else if (isChecked) {
      classes += " checked";
    }

    const imageHtml = opt.image
      ? `<img class="option-image" src="${escapeHtml(opt.image)}" alt="${escapeHtml(opt.imageAlt || "")}">`
      : "";

    return `
      <label class="${classes}" data-key="${opt.key}">
        <input type="checkbox" ${isChecked ? "checked" : ""} ${state.answered ? "disabled" : ""} data-key="${opt.key}">
        <div class="option-main">
          <span class="option-text">${escapeHtml(opt.text)}</span>
          ${badge}
          ${imageHtml}
          <div class="option-explain">${escapeHtml(opt.explain)}</div>
        </div>
      </label>
    `;
  }).join("");

  let verdictHtml = "";
  let topicInfoHtml = "";
  if (state.answered) {
    const last = state.results[state.results.length - 1];
    verdictHtml = last.correct
      ? `<div class="verdict-banner pass">✓ Poprawna odpowiedź!</div>`
      : `<div class="verdict-banner fail">✗ Niepoprawna odpowiedź.</div>`;

    if (q.topicSummary) {
      topicInfoHtml = `
        <div class="topic-info">
          <div class="topic-info-title">📘 Warto wiedzieć${q.topicTitle ? ": " + escapeHtml(q.topicTitle) : ""}</div>
          <div class="topic-info-text">${escapeHtml(q.topicSummary)}</div>
        </div>
      `;
    }
  }

  const pctDone = Math.round((state.currentIndex / total) * 100);

  appEl.innerHTML = `
    <div class="progress-row">
      <span>Pytanie ${num} z ${total}</span>
      <span class="chapter-info"><span class="chapter-tag">${q.chapter}</span>${escapeHtml(q.chapterName)}</span>
    </div>
    <div class="progress-bar"><div class="progress-bar-fill" style="width:${pctDone}%"></div></div>
    <div class="card">
      <p class="question-text">${escapeHtml(q.question)}</p>
      ${codeHtml}
      <div class="options">${optionsHtml}</div>
      ${verdictHtml}
      ${topicInfoHtml}
      <div class="actions-row">
        ${state.answered
          ? `<button class="btn" id="nextBtn">${num === total ? "ZOBACZ PODSUMOWANIE" : "NASTĘPNE PYTANIE"}</button>`
          : `<button class="btn" id="checkBtn" ${Object.values(state.checked).every(v => !v) ? "disabled" : ""}>SPRAWDŹ ODPOWIEDŹ</button>`
        }
      </div>
    </div>
  `;

  if (!state.answered) {
    document.querySelectorAll('.option input[type=checkbox]').forEach(cb => {
      cb.addEventListener("change", () => toggleOption(cb.dataset.key));
    });
    const checkBtn = document.getElementById("checkBtn");
    if (checkBtn) checkBtn.addEventListener("click", checkAnswer);
  } else {
    document.getElementById("nextBtn").addEventListener("click", nextQuestion);
  }
}

function renderSummary() {
  const total = state.results.length;
  const correctCount = state.results.filter(r => r.correct).length;
  const pct = Math.round((correctCount / total) * 100);

  // Grupowanie po rozdziale
  const byChapter = {};
  state.results.forEach(r => {
    if (!byChapter[r.chapter]) {
      byChapter[r.chapter] = { name: r.chapterName, total: 0, correct: 0 };
    }
    byChapter[r.chapter].total++;
    if (r.correct) byChapter[r.chapter].correct++;
  });

  const chapterRows = Object.keys(byChapter).sort().map(ch => {
    const c = byChapter[ch];
    const chPct = Math.round((c.correct / c.total) * 100);
    const barClass = chPct >= REVIEW_THRESHOLD ? "good" : (chPct >= 40 ? "mid" : "low");
    return { ch, name: c.name, correct: c.correct, total: c.total, pct: chPct, barClass };
  });

  const toReview = chapterRows.filter(r => r.pct < REVIEW_THRESHOLD).sort((a,b) => a.pct - b.pct);
  const solid = chapterRows.filter(r => r.pct >= REVIEW_THRESHOLD).sort((a,b) => b.pct - a.pct);

  const tableHtml = chapterRows.map(r => `
    <tr>
      <td>${r.ch} — ${escapeHtml(r.name)}</td>
      <td>${r.correct}/${r.total}</td>
      <td style="width:120px;">
        <div class="chapter-bar-wrap"><div class="chapter-bar-fill ${r.barClass}" style="width:${r.pct}%"></div></div>
      </td>
      <td class="pct-col" style="width:50px; text-align:right;">${r.pct}%</td>
    </tr>
  `).join("");

  const reviewHtml = toReview.length
    ? `<div class="review-list">
        <h3>📌 Rozdziały wymagające powtórki (poniżej ${REVIEW_THRESHOLD}%)</h3>
        <ul>${toReview.map(r => `<li>${r.ch} — ${escapeHtml(r.name)}: ${r.correct}/${r.total} (${r.pct}%)</li>`).join("")}</ul>
      </div>`
    : "";

  const goodHtml = solid.length
    ? `<div class="good-list">
        <h3>✅ Rozdziały opanowane dobrze</h3>
        <ul>${solid.map(r => `<li>${r.ch} — ${escapeHtml(r.name)}: ${r.correct}/${r.total} (${r.pct}%)</li>`).join("")}</ul>
      </div>`
    : "";

  appEl.innerHTML = `
    <h1>Podsumowanie testu</h1>
    <p class="subtitle">Test ukończony - poniżej wyniki i wskazówki, co warto powtórzyć.</p>
    <div class="card">
      <div class="score-hero">
        <div class="big">${correctCount} / ${total}</div>
        <div class="pct">${pct}% poprawnych odpowiedzi</div>
      </div>

      <table class="chapter-table">
        <thead><tr><th>Rozdział</th><th>Wynik</th><th>Postęp</th><th class="pct-col"></th></tr></thead>
        <tbody>${tableHtml}</tbody>
      </table>

      ${reviewHtml}
      ${goodHtml}

      <div class="footer-actions">
        <button class="btn secondary full" id="restartBtn">Nowy test</button>
      </div>
    </div>
  `;

  document.getElementById("restartBtn").addEventListener("click", restart);
}

render();
