const curriculum = {
  middle: {
    label: "중학교",
    grades: {
      1: ["소인수분해", "정수와 유리수", "문자의 사용", "일차방정식", "좌표평면", "기본 도형"],
      2: ["유리수와 순환소수", "식의 계산", "연립일차방정식", "일차함수", "삼각형과 사각형", "확률"],
      3: ["제곱근", "다항식", "이차방정식", "이차함수", "원의 성질", "통계"]
    }
  },
  high: {
    label: "고등학교",
    grades: {
      1: ["다항식", "방정식과 부등식", "도형의 방정식", "집합과 명제", "함수", "경우의 수"],
      2: ["수열", "지수와 로그", "삼각함수", "미분", "적분", "확률분포"],
      3: ["극한", "미분법", "적분법", "공간도형", "벡터", "통계적 추정"]
    }
  }
};

const typeLabels = {
  mixed: "혼합",
  multiple: "객관식",
  short: "주관식",
  essay: "서술형",
  truefalse: "참/거짓"
};

const difficultyLabels = {
  easy: "기초",
  medium: "표준",
  hard: "심화"
};

const providerHints = {
  demo: "샘플 엔진 사용 중",
  gemini: "Gemini API 연결 준비",
  openai: "OpenAI API 연결 준비",
  local: "로컬 LLM 연결 준비"
};

const defaultApiSettings = {
  gemini: {
    apiKey: "",
    model: "gemini-2.5-flash",
    endpoint: "https://generativelanguage.googleapis.com/v1beta/models"
  },
  openai: {
    apiKey: "",
    model: "gpt-5.6-luna",
    endpoint: "https://api.openai.com/v1/responses"
  },
  local: {
    apiKey: "",
    model: "llama3.1",
    endpoint: "http://127.0.0.1:11434/api/generate"
  }
};

const modelOptions = {
  gemini: [
    { value: "gemini-2.5-flash", label: "Gemini 2.5 Flash" },
    { value: "gemini-2.5-flash-lite", label: "Gemini 2.5 Flash-Lite" },
    { value: "gemini-2.5-pro", label: "Gemini 2.5 Pro" },
    { value: "gemini-3.5-flash", label: "Gemini 3.5 Flash" },
    { value: "gemini-3.1-flash-lite", label: "Gemini 3.1 Flash-Lite" }
  ],
  openai: [
    { value: "gpt-5.6-luna", label: "GPT-5.6 Luna" },
    { value: "gpt-5.6-terra", label: "GPT-5.6 Terra" },
    { value: "gpt-5.6-sol", label: "GPT-5.6 Sol" },
    { value: "gpt-5.6", label: "GPT-5.6 alias" }
  ],
  local: [
    { value: "llama3.1", label: "Llama 3.1" },
    { value: "llama3.2", label: "Llama 3.2" },
    { value: "qwen2.5", label: "Qwen 2.5" },
    { value: "mistral", label: "Mistral" },
    { value: "gemma2", label: "Gemma 2" }
  ]
};

const state = {
  problemSets: loadProblemSets(),
  problems: [],
  currentProblems: [],
  currentSet: null,
  expandedSetIds: new Set(),
  apiSettings: loadApiSettings()
};
state.problems = flattenProblemSets(state.problemSets);

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const schoolLevel = $("#schoolLevel");
const grade = $("#grade");
const topic = $("#topic");
const questionType = $("#questionType");
const difficulty = $("#difficulty");
const count = $("#count");
const aiProvider = $("#aiProvider");
const customPrompt = $("#customPrompt");
const problemList = $("#problemList");
const libraryList = $("#libraryList");
const recentList = $("#recentList");
const toast = $("#toast");
const pageTitle = $("#pageTitle");
const engineStatus = $("#engineStatus");
const providerConfigHelp = $("#providerConfigHelp");
const settingsProvider = $("#settingsProvider");
const apiKey = $("#apiKey");
const apiModel = $("#apiModel");
const customApiModel = $("#customApiModel");
const customModelRow = $("#customModelRow");
const apiEndpoint = $("#apiEndpoint");
const apiStatusList = $("#apiStatusList");
const apiTestResult = $("#apiTestResult");
const backupStatus = $("#backupStatus");

function loadProblems() {
  try {
    return JSON.parse(localStorage.getItem("mathforge.problems")) || [];
  } catch {
    return [];
  }
}

function loadProblemSets() {
  try {
    const savedSets = JSON.parse(localStorage.getItem("mathforge.problemSets")) || [];
    if (savedSets.length) return savedSets;
  } catch {
    // Fall through to legacy migration.
  }

  const legacyProblems = loadProblems();
  if (!legacyProblems.length) return [];

  return [{
    id: crypto.randomUUID(),
    createdAt: legacyProblems[0]?.createdAt || new Date().toISOString(),
    title: "이전 보관 문제",
    summary: "기존 보관함에서 가져온 문제",
    problems: legacyProblems
  }];
}

function flattenProblemSets(problemSets) {
  return problemSets.flatMap((set) => set.problems || []);
}

function loadApiSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem("mathforge.apiSettings")) || {};
    return Object.fromEntries(
      Object.entries(defaultApiSettings).map(([provider, defaults]) => [
        provider,
        { ...defaults, ...(saved[provider] || {}) }
      ])
    );
  } catch {
    return structuredClone(defaultApiSettings);
  }
}

function saveApiSettings() {
  localStorage.setItem("mathforge.apiSettings", JSON.stringify(state.apiSettings));
}

function saveProblems() {
  state.problems = flattenProblemSets(state.problemSets);
  localStorage.setItem("mathforge.problemSets", JSON.stringify(state.problemSets));
  localStorage.setItem("mathforge.problems", JSON.stringify(state.problems));
}

function setBackupStatus(message, type = "") {
  backupStatus.textContent = message;
  backupStatus.className = `test-result show ${type}`.trim();
}

function backupToJson() {
  const payload = {
    app: "MathForge",
    version: 1,
    exportedAt: new Date().toISOString(),
    problemSets: state.problemSets,
    currentSet: state.currentSet,
    currentProblems: state.currentProblems,
    apiSettings: state.apiSettings
  };
  const fileName = `mathforge-backup-${new Date().toISOString().slice(0, 10)}.json`;
  downloadBlob(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" }), fileName);
  setBackupStatus("JSON 백업 파일을 다운로드했습니다.", "success");
  showToast("JSON 백업을 저장했습니다.");
}

async function restoreFromJsonFile(file) {
  if (!file) return;

  try {
    const payload = JSON.parse(await file.text());
    const problemSets = Array.isArray(payload.problemSets)
      ? payload.problemSets
      : Array.isArray(payload.problems)
        ? [{
            id: crypto.randomUUID(),
            createdAt: new Date().toISOString(),
            title: "복원한 문제",
            summary: `${payload.problems.length}문제`,
            problems: payload.problems
          }]
        : [];

    state.problemSets = problemSets;
    state.problems = flattenProblemSets(problemSets);
    state.currentSet = payload.currentSet || problemSets[0] || null;
    state.currentProblems = Array.isArray(payload.currentProblems)
      ? payload.currentProblems
      : state.currentSet?.problems || [];
    state.apiSettings = Object.fromEntries(
      Object.entries(defaultApiSettings).map(([provider, defaults]) => [
        provider,
        { ...defaults, ...(payload.apiSettings?.[provider] || {}) }
      ])
    );

    saveProblems();
    saveApiSettings();
    renderProblems(problemList, state.currentProblems, "아직 생성된 문제가 없습니다.", "왼쪽 조건을 설정하고 문제 생성을 눌러보세요.");
    renderDashboard();
    renderLibrarySets();
    loadSettingsForm();
    renderApiStatus();
    updateProviderStatus();
    setBackupStatus("JSON 백업을 복원했습니다.", "success");
    showToast("JSON 백업을 복원했습니다.");
  } catch (error) {
    setBackupStatus(`복원 실패: ${error.message}`, "error");
    showToast("JSON 복원에 실패했습니다.");
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function setView(viewId) {
  $$(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
  $$(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.viewLink === viewId));
  const title = document.querySelector(`#${viewId} h2`)?.textContent || "대시보드";
  pageTitle.textContent = title;
  $(".sidebar").classList.remove("open");
  window.location.hash = viewId;
  renderDashboard();
  renderLibrarySets();
}

function populateGrades() {
  const level = curriculum[schoolLevel.value];
  grade.innerHTML = Object.keys(level.grades)
    .map((gradeNumber) => `<option value="${gradeNumber}">${gradeNumber}학년</option>`)
    .join("");
  populateTopics();
}

function populateTopics() {
  const topics = curriculum[schoolLevel.value].grades[grade.value];
  topic.innerHTML = topics.map((item) => `<option value="${item}">${item}</option>`).join("");
}

function hasProviderConfig(provider) {
  if (provider === "demo") return true;
  const setting = state.apiSettings[provider];
  if (provider === "local") return Boolean(setting?.endpoint && setting?.model);
  return Boolean(setting?.apiKey && setting?.model);
}

function maskSecret(value) {
  if (!value) return "미설정";
  if (value.length <= 8) return "••••";
  return `${value.slice(0, 4)}••••${value.slice(-4)}`;
}

function getSelectedModel() {
  return apiModel.value === "__custom__" ? customApiModel.value.trim() : apiModel.value;
}

function populateModelOptions(provider, selectedModel = "") {
  const options = modelOptions[provider] || [];
  const hasSelected = options.some((option) => option.value === selectedModel);
  const modelValue = selectedModel && !hasSelected ? "__custom__" : selectedModel || defaultApiSettings[provider].model;

  apiModel.innerHTML = [
    ...options.map((option) => `<option value="${option.value}">${option.label}</option>`),
    `<option value="__custom__">직접 입력</option>`
  ].join("");
  apiModel.value = modelValue;
  customApiModel.value = modelValue === "__custom__" ? selectedModel : "";
  updateCustomModelVisibility();
}

function updateCustomModelVisibility() {
  const isCustom = apiModel.value === "__custom__";
  customModelRow.classList.toggle("hidden", !isCustom);
}

function setTestResult(message, type = "") {
  apiTestResult.textContent = message;
  apiTestResult.className = `test-result show ${type}`.trim();
}

function updateProviderStatus() {
  const provider = aiProvider.value;
  engineStatus.textContent = hasProviderConfig(provider)
    ? providerHints[provider]
    : `${providerHints[provider]} · 키 미설정`;

  if (provider === "demo") {
    providerConfigHelp.textContent = "데모 엔진은 API 키 없이 사용할 수 있습니다.";
    return;
  }

  const setting = state.apiSettings[provider];
  const providerName = aiProvider.options[aiProvider.selectedIndex].textContent;
  providerConfigHelp.textContent = hasProviderConfig(provider)
    ? `${providerName} 설정됨 · 모델 ${setting.model}`
    : `${providerName}를 사용하려면 설정 메뉴에서 API Key와 모델을 저장하세요.`;
}

function loadSettingsForm() {
  const setting = state.apiSettings[settingsProvider.value];
  apiKey.value = setting.apiKey || "";
  populateModelOptions(settingsProvider.value, setting.model || "");
  apiEndpoint.value = setting.endpoint || "";
  apiKey.type = "password";
  $("#toggleApiKey").textContent = "보기";
  apiTestResult.className = "test-result";
  apiTestResult.textContent = "";
}

function renderApiStatus() {
  const labels = {
    gemini: "Google Gemini API",
    openai: "OpenAI API",
    local: "로컬 LLM"
  };

  apiStatusList.innerHTML = Object.entries(state.apiSettings).map(([provider, setting]) => {
    const ready = hasProviderConfig(provider);
    const keyLine = provider === "local" && !setting.apiKey
      ? "API Key: 선택 사항"
      : `API Key: ${maskSecret(setting.apiKey)}`;
    return `
      <article>
        <div class="provider-card-header">
          <strong>${labels[provider]}</strong>
          <span class="status-pill">${ready ? "설정 완료" : "미설정"}</span>
        </div>
        <p>${keyLine}</p>
        <p>모델: ${escapeHtml(setting.model || "미설정")}</p>
        <p>엔드포인트: ${escapeHtml(setting.endpoint || "기본값 사용")}</p>
        <div class="provider-card-actions">
          <button class="ghost-button" type="button" data-api-edit="${provider}">수정</button>
          <button class="ghost-button danger" type="button" data-api-delete="${provider}">키 삭제</button>
        </div>
      </article>
    `;
  }).join("");
}

function resetProviderKey(provider) {
  state.apiSettings[provider] = { ...defaultApiSettings[provider], apiKey: "" };
  saveApiSettings();
  if (settingsProvider.value === provider) loadSettingsForm();
  renderApiStatus();
  updateProviderStatus();
}

async function testApiConnection() {
  const provider = settingsProvider.value;
  const setting = {
    apiKey: apiKey.value.trim(),
    model: getSelectedModel(),
    endpoint: apiEndpoint.value.trim()
  };

  if (!setting.model) {
    setTestResult("모델명을 선택하거나 입력하세요.", "error");
    return;
  }

  if (provider !== "local" && !setting.apiKey) {
    setTestResult("API Key를 입력한 뒤 테스트하세요.", "error");
    return;
  }

  if (provider === "local" && !setting.endpoint) {
    setTestResult("로컬 LLM 엔드포인트를 입력하세요.", "error");
    return;
  }

  setTestResult("연결을 테스트하는 중입니다...");

  try {
    if (provider === "gemini") {
      const base = setting.endpoint || defaultApiSettings.gemini.endpoint;
      const url = `${base.replace(/\/$/, "")}/${encodeURIComponent(setting.model)}:generateContent?key=${encodeURIComponent(setting.apiKey)}`;
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: "Reply with OK only." }] }]
        })
      });
      if (!response.ok) throw new Error(`Gemini 응답 오류 ${response.status}`);
      setTestResult(`Gemini 연결 성공 · ${setting.model}`, "success");
      return;
    }

    if (provider === "openai") {
      const endpoint = setting.endpoint || defaultApiSettings.openai.endpoint;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${setting.apiKey}`
        },
        body: JSON.stringify({
          model: setting.model,
          input: "Reply with OK only."
        })
      });
      if (!response.ok) throw new Error(`OpenAI 응답 오류 ${response.status}`);
      setTestResult(`OpenAI 연결 성공 · ${setting.model}`, "success");
      return;
    }

    const response = await fetch(setting.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: setting.model,
        prompt: "Reply with OK only.",
        stream: false
      })
    });
    if (!response.ok) throw new Error(`로컬 LLM 응답 오류 ${response.status}`);
    setTestResult(`로컬 LLM 연결 성공 · ${setting.model}`, "success");
  } catch (error) {
    setTestResult(`연결 실패: ${error.message}. 브라우저 CORS 정책이나 API Key 권한도 확인하세요.`, "error");
  }
}

function clampCount(value) {
  return Math.min(10, Math.max(1, Number(value) || 1));
}

function selectProblemType(selected, index) {
  if (selected !== "mixed") return selected;
  return ["multiple", "short", "essay", "truefalse"][index % 4];
}

function makeProblem(formData, index) {
  const selectedType = selectProblemType(formData.questionType, index);
  const seed = Date.now() + index * 17;
  const a = (seed % 8) + 2 + index;
  const b = ((seed >> 2) % 7) + 1;
  const c = ((seed >> 3) % 5) + 2;
  const levelLabel = curriculum[formData.schoolLevel].label;
  const gradeLabel = `${formData.grade}학년`;
  const topicText = formData.topic;
  const difficultyText = difficultyLabels[formData.difficulty];

  const templates = {
    multiple: () => {
      const answer = a * c + b;
      return {
        question: `${topicText} 단원 ${difficultyText} 문제입니다. x = ${a}일 때, ${c}x + ${b}의 값을 고르세요.`,
        choices: [answer - 3, answer - 1, answer, answer + 2, answer + 4].map(String),
        answer: String(answer),
        solution: `x에 ${a}를 대입하면 ${c}×${a}+${b}=${answer}입니다.`
      };
    },
    short: () => {
      const answer = a + b + c;
      return {
        question: `${topicText} 개념을 이용해 ${a} + ${b} + ${c}의 값을 구하세요.`,
        answer: String(answer),
        solution: `세 수를 차례로 더하면 ${a}+${b}+${c}=${answer}입니다.`
      };
    },
    essay: () => {
      const answer = a * b;
      return {
        question: `${topicText}와 관련하여 ${a}개의 묶음에 각각 ${b}개씩 있을 때 전체 개수를 구하고, 풀이 과정을 설명하세요.`,
        answer: `${answer}개`,
        solution: `같은 수의 묶음은 곱셈으로 표현할 수 있으므로 ${a}×${b}=${answer}입니다.`
      };
    },
    truefalse: () => {
      const answer = (a + b) % 2 === 0 ? "참" : "거짓";
      return {
        question: `${topicText} 확인 문제입니다. "${a}+${b}는 짝수이다." 이 명제는 참인가요, 거짓인가요?`,
        choices: ["참", "거짓"],
        answer,
        solution: `${a}+${b}=${a + b}이므로 ${answer}입니다.`
      };
    }
  };

  return {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    provider: formData.aiProvider,
    schoolLevel: levelLabel,
    grade: gradeLabel,
    topic: topicText,
    type: selectedType,
    typeLabel: typeLabels[selectedType],
    difficulty: formData.difficulty,
    difficultyLabel: difficultyText,
    note: formData.customPrompt.trim(),
    ...templates[selectedType]()
  };
}

function generateProblems(formData) {
  return Array.from({ length: formData.count }, (_, index) => makeProblem(formData, index));
}

function createProblemSet(formData, problems) {
  const levelLabel = curriculum[formData.schoolLevel].label;
  const gradeLabel = `${formData.grade}학년`;
  const typeLabel = typeLabels[formData.questionType];
  const difficultyLabel = difficultyLabels[formData.difficulty];

  return {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    title: `${levelLabel} ${gradeLabel} · ${formData.topic}`,
    summary: `${difficultyLabel} · ${typeLabel} · ${problems.length}문제`,
    provider: formData.aiProvider,
    problems
  };
}

function renderProblem(problem, index) {
  const choices = problem.choices
    ? `<ol class="choices">${problem.choices.map((choice, choiceIndex) => `<li>${choiceIndex + 1}. ${choice}</li>`).join("")}</ol>`
    : "";
  const note = problem.note ? `<p><strong>추가 조건:</strong> ${escapeHtml(problem.note)}</p>` : "";

  return `
    <article class="problem-card">
      <div class="problem-meta">
        <span class="type-pill">${problem.typeLabel}</span>
        <span class="difficulty-pill">${problem.difficultyLabel}</span>
        <span class="status-pill">${problem.schoolLevel} ${problem.grade}</span>
        <span class="status-pill">${problem.topic}</span>
      </div>
      <h4>문제 ${index + 1}. ${escapeHtml(problem.question)}</h4>
      ${choices}
      ${note}
      <div class="answer-box">
        <strong>정답:</strong> ${escapeHtml(problem.answer)}<br>
        <strong>풀이:</strong> ${escapeHtml(problem.solution)}
      </div>
    </article>
  `;
}

function renderProblems(target, problems, emptyTitle, emptyBody) {
  target.innerHTML = problems.length
    ? problems.map(renderProblem).join("")
    : `<div class="empty-state"><strong>${emptyTitle}</strong><p>${emptyBody}</p></div>`;
}

function renderProblemSetCard(set, setIndex, options = {}) {
  const totalSets = options.totalSets || state.problemSets.length;
  const isExpanded = state.expandedSetIds.has(set.id);
  const problems = set.problems || [];
  const detailId = `set-detail-${set.id}`;
  const actions = options.compact ? "" : `
    <div class="inline-actions">
      <button class="ghost-button" type="button" data-set-copy="${set.id}">복사</button>
      <button class="ghost-button" type="button" data-set-pdf="${set.id}">PDF</button>
      <button class="ghost-button" type="button" data-set-excel="${set.id}">엑셀</button>
      <button class="ghost-button" type="button" data-set-print-problems="${set.id}">문제지</button>
      <button class="ghost-button" type="button" data-set-print-answers="${set.id}">정답지</button>
      <button class="ghost-button" type="button" data-set-email="${set.id}">메일</button>
    </div>
  `;

  return `
    <section class="problem-set ${isExpanded ? "expanded" : ""}" data-set-id="${set.id}">
      <div class="problem-set-header">
        <button class="set-summary-button" type="button" data-set-toggle="${set.id}" aria-expanded="${isExpanded}" aria-controls="${detailId}">
          <span class="set-chevron" aria-hidden="true">${isExpanded ? "⌄" : "›"}</span>
          <span>
            <span class="status-pill">세트 ${totalSets - setIndex}</span>
            <strong>${escapeHtml(set.title || "문제 세트")}</strong>
            <small>${escapeHtml(set.summary || `${problems.length}문제`)} · ${formatDateTime(set.createdAt)}</small>
          </span>
        </button>
        ${actions}
      </div>
      <div class="problem-set-detail" id="${detailId}" ${isExpanded ? "" : "hidden"}>
        <div class="set-detail-grid">
          <span><strong>문제 수</strong>${problems.length}</span>
          <span><strong>유형</strong>${escapeHtml(summarizeProblemTypes(problems))}</span>
          <span><strong>난이도</strong>${escapeHtml(summarizeDifficulties(problems))}</span>
        </div>
        <div class="problem-list">
          ${problems.map(renderProblem).join("")}
        </div>
      </div>
    </section>
  `;
}

function summarizeProblemTypes(problems) {
  return [...new Set(problems.map((problem) => problem.typeLabel).filter(Boolean))].join(", ") || "-";
}

function summarizeDifficulties(problems) {
  return [...new Set(problems.map((problem) => problem.difficultyLabel).filter(Boolean))].join(", ") || "-";
}

function renderDashboard() {
  const total = state.problems.length;
  const multiple = state.problems.filter((problem) => problem.type === "multiple").length;
  const recent = state.problemSets.slice(0, 4);
  const difficultyScore = { easy: 1, medium: 2, hard: 3 };
  const scoreLabel = { 1: "기초", 2: "표준", 3: "심화" };
  const avg = total
    ? Math.round(state.problems.reduce((sum, problem) => sum + difficultyScore[problem.difficulty], 0) / total)
    : 0;

  $("#totalCount").textContent = total;
  $("#todayCount").textContent = state.problems.filter((problem) => {
    const created = new Date(problem.createdAt).toDateString();
    return created === new Date().toDateString();
  }).length;
  $("#choiceRate").textContent = total ? `${Math.round((multiple / total) * 100)}%` : "0%";
  $("#avgDifficulty").textContent = scoreLabel[avg] || "-";
  $("#recentLevel").textContent = state.problems[0] ? `${state.problems[0].schoolLevel} ${state.problems[0].grade}` : "-";

  recentList.innerHTML = recent.length
    ? recent.map((set, index) => renderProblemSetCard(set, index, { compact: true, totalSets: state.problemSets.length })).join("")
    : `<div class="empty-state"><strong>최근 생성 세트가 없습니다.</strong><p>문제 생성 메뉴에서 첫 세트를 만들어보세요.</p></div>`;
}

function renderLibrary() {
  renderProblems(libraryList, state.problems, "보관된 문제가 없습니다.", "생성한 문제는 자동으로 이곳에 저장됩니다.");
}

function exportAsText(problems, fileName) {
  if (!problems.length) {
    showToast("내보낼 문제가 없습니다.");
    return;
  }

  const text = problems.map((problem, index) => {
    const choices = problem.choices ? `\n선지: ${problem.choices.join(" / ")}` : "";
    return [
      `${index + 1}. [${problem.schoolLevel} ${problem.grade} · ${problem.topic} · ${problem.typeLabel}]`,
      `문제: ${problem.question}${choices}`,
      `정답: ${problem.answer}`,
      `풀이: ${problem.solution}`
    ].join("\n");
  }).join("\n\n");

  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(url);
}

function renderLibrarySets() {
  if (!state.problemSets.length) {
    libraryList.innerHTML = `<div class="empty-state"><strong>보관된 문제가 없습니다.</strong><p>생성한 문제는 생성 단위로 이곳에 저장됩니다.</p></div>`;
    return;
  }

  libraryList.innerHTML = state.problemSets.map((set, setIndex) => renderProblemSetCard(set, setIndex)).join("");
}

function formatDateTime(value) {
  return new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}

function formatProblemsText(problems, title = "MathForge 문제 세트") {
  const body = problems.map((problem, index) => {
    const choices = problem.choices ? `\n선지: ${problem.choices.join(" / ")}` : "";
    return [
      `${index + 1}. [${problem.schoolLevel} ${problem.grade} · ${problem.topic} · ${problem.typeLabel}]`,
      `문제: ${problem.question}${choices}`,
      `정답: ${problem.answer}`,
      `풀이: ${problem.solution}`
    ].join("\n");
  }).join("\n\n");

  return `${title}\n\n${body}`;
}

function exportProblemsAsText(problems, fileName, title = "MathForge 문제 세트") {
  if (!problems.length) {
    showToast("내보낼 문제가 없습니다.");
    return;
  }

  const blob = new Blob([formatProblemsText(problems, title)], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(url);
}

function sanitizeFileName(value) {
  return String(value || "mathforge")
    .replace(/[\\/:*?"<>|]/g, "-")
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

function downloadBlob(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(url);
}

function buildPrintableHtml(problems, title, mode = "full") {
  const showProblems = mode !== "answers";
  const showAnswers = mode !== "problems";
  const rows = problems.map((problem, index) => {
    const choices = problem.choices?.length
      ? `<ol class="choices">${problem.choices.map((choice) => `<li>${escapeHtml(choice)}</li>`).join("")}</ol>`
      : "";
    const questionBlock = showProblems ? `
      <section class="item">
        <h2>문제 ${index + 1}</h2>
        <p class="meta">${escapeHtml(problem.schoolLevel)} ${escapeHtml(problem.grade)} · ${escapeHtml(problem.topic)} · ${escapeHtml(problem.typeLabel)}</p>
        <p>${escapeHtml(problem.question)}</p>
        ${choices}
      </section>
    ` : "";
    const answerBlock = showAnswers ? `
      <section class="answer">
        <h2>정답 ${index + 1}</h2>
        <p><strong>${escapeHtml(problem.answer)}</strong></p>
        <p>${escapeHtml(problem.solution)}</p>
      </section>
    ` : "";
    return `${questionBlock}${answerBlock}`;
  }).join("");

  return `<!doctype html>
    <html lang="ko">
    <head>
      <meta charset="utf-8">
      <title>${escapeHtml(title)}</title>
      <style>
        @page { size: A4; margin: 16mm; }
        body { font-family: "Noto Sans KR", "Malgun Gothic", Arial, sans-serif; color: #16202a; line-height: 1.55; }
        h1 { font-size: 24px; margin: 0 0 18px; }
        h2 { font-size: 16px; margin: 0 0 6px; }
        .item, .answer { break-inside: avoid; border-bottom: 1px solid #dfe6ee; padding: 12px 0; }
        .meta { color: #627183; font-size: 12px; margin: 0 0 8px; }
        .choices { margin: 8px 0 0 20px; padding: 0; }
        .choices li { margin: 4px 0; }
        .answer { background: #f6f9fb; padding-left: 10px; padding-right: 10px; }
      </style>
    </head>
    <body>
      <h1>${escapeHtml(title)}</h1>
      ${rows}
    </body>
    </html>`;
}

function openPrintDocument(problems, title, mode = "full") {
  if (!problems.length) {
    showToast("출력할 문제가 없습니다.");
    return;
  }

  const oldFrame = document.getElementById("printFrame");
  oldFrame?.remove();

  const frame = document.createElement("iframe");
  frame.id = "printFrame";
  frame.title = "MathForge print document";
  frame.style.position = "fixed";
  frame.style.right = "0";
  frame.style.bottom = "0";
  frame.style.width = "0";
  frame.style.height = "0";
  frame.style.border = "0";
  frame.srcdoc = buildPrintableHtml(problems, title, mode);
  document.body.appendChild(frame);

  frame.addEventListener("load", () => {
    const printTarget = frame.contentWindow;
    printTarget.focus();
    printTarget.print();
    showToast("인쇄 창에서 PDF로 저장할 수 있습니다.");
    window.setTimeout(() => frame.remove(), 1000);
  }, { once: true });
}

function exportProblemsAsPdf(problems, title = "MathForge 문제 세트") {
  openPrintDocument(problems, `${title} PDF`, "full");
}

function exportProblemsAsExcel(problems, fileName, title = "MathForge 문제 세트") {
  if (!problems.length) {
    showToast("내보낼 문제가 없습니다.");
    return;
  }

  const rows = problems.map((problem, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${escapeHtml(problem.schoolLevel)}</td>
      <td>${escapeHtml(problem.grade)}</td>
      <td>${escapeHtml(problem.topic)}</td>
      <td>${escapeHtml(problem.typeLabel)}</td>
      <td>${escapeHtml(problem.difficultyLabel)}</td>
      <td>${escapeHtml(problem.question)}</td>
      <td>${escapeHtml((problem.choices || []).join(" / "))}</td>
      <td>${escapeHtml(problem.answer)}</td>
      <td>${escapeHtml(problem.solution)}</td>
    </tr>
  `).join("");
  const html = `<!doctype html>
    <html lang="ko">
    <head><meta charset="utf-8"></head>
    <body>
      <table border="1">
        <caption>${escapeHtml(title)}</caption>
        <thead>
          <tr>
            <th>번호</th><th>학교급</th><th>학년</th><th>단원</th><th>유형</th><th>난이도</th>
            <th>문제</th><th>선지</th><th>정답</th><th>풀이</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </body>
    </html>`;

  downloadBlob(new Blob([html], { type: "application/vnd.ms-excel;charset=utf-8" }), fileName);
  showToast("엑셀 파일을 다운로드했습니다.");
}

function findProblemSet(setId) {
  return state.problemSets.find((set) => set.id === setId);
}

function toggleProblemSet(setId) {
  if (state.expandedSetIds.has(setId)) {
    state.expandedSetIds.delete(setId);
  } else {
    state.expandedSetIds.add(setId);
  }
  renderDashboard();
  renderLibrarySets();
}

async function copyProblems(problems, title = "MathForge 문제 세트") {
  if (!problems.length) {
    showToast("복사할 문제가 없습니다.");
    return;
  }
  await writeTextToClipboard(formatProblemsText(problems, title));
  showToast("문제 내용을 복사했습니다.");
}

async function writeTextToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Use the fallback below for file:// or blocked clipboard permissions.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

async function emailProblems(problems, title = "MathForge 문제 세트") {
  if (!problems.length) {
    showToast("메일로 보낼 문제가 없습니다.");
    return;
  }

  const body = formatProblemsText(problems, title);
  const mailto = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;

  if (mailto.length > 1800) {
    await writeTextToClipboard(body);
    showToast("메일 본문이 길어 내용을 복사했습니다. 메일에 붙여넣어 주세요.");
    return;
  }

  window.location.href = mailto;
  showToast("메일 앱을 여는 중입니다.");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function bindEvents() {
  $$("[data-view-link]").forEach((link) => {
    link.addEventListener("click", () => setView(link.dataset.viewLink));
  });

  $("#menuToggle").addEventListener("click", () => $(".sidebar").classList.toggle("open"));
  schoolLevel.addEventListener("change", populateGrades);
  grade.addEventListener("change", populateTopics);
  aiProvider.addEventListener("change", () => {
    updateProviderStatus();
  });

  settingsProvider.addEventListener("change", loadSettingsForm);
  apiModel.addEventListener("change", updateCustomModelVisibility);

  $("#toggleApiKey").addEventListener("click", () => {
    const isHidden = apiKey.type === "password";
    apiKey.type = isHidden ? "text" : "password";
    $("#toggleApiKey").textContent = isHidden ? "숨김" : "보기";
  });

  $("#decreaseCount").addEventListener("click", () => {
    count.value = clampCount(Number(count.value) - 1);
  });

  $("#increaseCount").addEventListener("click", () => {
    count.value = clampCount(Number(count.value) + 1);
  });

  count.addEventListener("input", () => {
    count.value = clampCount(count.value);
  });

  $("#generatorForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = {
      schoolLevel: schoolLevel.value,
      grade: grade.value,
      topic: topic.value,
      questionType: questionType.value,
      difficulty: difficulty.value,
      count: clampCount(count.value),
      aiProvider: aiProvider.value,
      customPrompt: customPrompt.value
    };

    if (formData.aiProvider !== "demo") {
      if (!hasProviderConfig(formData.aiProvider)) {
        showToast("설정 메뉴에서 API Key를 저장하세요.");
        setView("settings");
        settingsProvider.value = formData.aiProvider;
        loadSettingsForm();
        return;
      }
      showToast("API 설정은 저장되어 있습니다. 현재 생성은 데모 엔진으로 처리됩니다.");
    }

    const generated = generateProblems(formData);
    const generatedSet = createProblemSet(formData, generated);
    state.currentProblems = generated;
    state.currentSet = generatedSet;
    state.problemSets = [generatedSet, ...state.problemSets];
    saveProblems();
    renderProblems(problemList, generated, "아직 생성된 문제가 없습니다.", "왼쪽 조건을 설정하고 문제 생성을 눌러보세요.");
    renderDashboard();
    renderLibrarySets();
    showToast(`${generated.length}개 문제가 생성되었습니다.`);
  });

  $("#copyBtn").addEventListener("click", async () => {
    await copyProblems(state.currentProblems, state.currentSet?.title || "MathForge 생성 문제");
  });

  $("#pdfBtn").addEventListener("click", () => {
    exportProblemsAsPdf(state.currentProblems, state.currentSet?.title || "MathForge 생성 문제");
  });

  $("#excelBtn").addEventListener("click", () => {
    const title = state.currentSet?.title || "MathForge 생성 문제";
    exportProblemsAsExcel(state.currentProblems, `${sanitizeFileName(title)}.xls`, title);
  });

  $("#printProblemsBtn").addEventListener("click", () => {
    openPrintDocument(state.currentProblems, state.currentSet?.title || "MathForge 문제지", "problems");
  });

  $("#printAnswersBtn").addEventListener("click", () => {
    openPrintDocument(state.currentProblems, state.currentSet?.title || "MathForge 정답지", "answers");
  });

  $("#emailBtn").addEventListener("click", () => {
    emailProblems(state.currentProblems, state.currentSet?.title || "MathForge 생성 문제");
  });

  $("#exportAllBtn").addEventListener("click", () => {
    exportProblemsAsPdf(state.problems, "MathForge 전체 보관함");
  });

  $("#exportAllExcelBtn").addEventListener("click", () => {
    exportProblemsAsExcel(state.problems, "mathforge-library.xls", "MathForge 전체 보관함");
  });

  $("#clearLibraryBtn").addEventListener("click", () => {
    if (!state.problems.length) {
      showToast("비울 문제가 없습니다.");
      return;
    }
    state.problemSets = [];
    state.problems = [];
    state.currentProblems = [];
    state.currentSet = null;
    saveProblems();
    renderProblems(problemList, [], "아직 생성된 문제가 없습니다.", "왼쪽 조건을 설정하고 문제 생성을 눌러보세요.");
    renderDashboard();
    renderLibrarySets();
    showToast("보관함을 비웠습니다.");
  });

  libraryList.addEventListener("click", async (event) => {
    const toggleButton = event.target.closest("[data-set-toggle]");
    if (toggleButton) {
      toggleProblemSet(toggleButton.dataset.setToggle);
      return;
    }

    const copyButton = event.target.closest("[data-set-copy]");
    const pdfButton = event.target.closest("[data-set-pdf]");
    const excelButton = event.target.closest("[data-set-excel]");
    const printProblemsButton = event.target.closest("[data-set-print-problems]");
    const printAnswersButton = event.target.closest("[data-set-print-answers]");
    const emailButton = event.target.closest("[data-set-email]");
    const setId = copyButton?.dataset.setCopy
      || pdfButton?.dataset.setPdf
      || excelButton?.dataset.setExcel
      || printProblemsButton?.dataset.setPrintProblems
      || printAnswersButton?.dataset.setPrintAnswers
      || emailButton?.dataset.setEmail;
    if (!setId) return;

    const problemSet = findProblemSet(setId);
    if (!problemSet) {
      showToast("문제 세트를 찾을 수 없습니다.");
      return;
    }

    if (copyButton) {
      await copyProblems(problemSet.problems || [], problemSet.title);
      return;
    }

    if (pdfButton) {
      exportProblemsAsPdf(problemSet.problems || [], problemSet.title);
      return;
    }

    if (excelButton) {
      exportProblemsAsExcel(problemSet.problems || [], `${sanitizeFileName(problemSet.title)}.xls`, problemSet.title);
      return;
    }

    if (printProblemsButton) {
      openPrintDocument(problemSet.problems || [], problemSet.title, "problems");
      return;
    }

    if (printAnswersButton) {
      openPrintDocument(problemSet.problems || [], problemSet.title, "answers");
      return;
    }

    emailProblems(problemSet.problems || [], problemSet.title);
  });

  recentList.addEventListener("click", (event) => {
    const toggleButton = event.target.closest("[data-set-toggle]");
    if (!toggleButton) return;
    toggleProblemSet(toggleButton.dataset.setToggle);
  });

  $("#apiSettingsForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const provider = settingsProvider.value;
    state.apiSettings[provider] = {
      apiKey: apiKey.value.trim(),
      model: getSelectedModel(),
      endpoint: apiEndpoint.value.trim()
    };
    saveApiSettings();
    renderApiStatus();
    updateProviderStatus();
    $("#apiSaveStatus").textContent = "저장됨";
    showToast("API 설정을 저장했습니다.");
  });

  $("#deleteApiKey").addEventListener("click", () => {
    resetProviderKey(settingsProvider.value);
    $("#apiSaveStatus").textContent = "삭제됨";
    showToast("현재 제공자의 API 키를 삭제했습니다.");
  });

  $("#testApiConnection").addEventListener("click", testApiConnection);

  $("#deleteAllApiKeys").addEventListener("click", () => {
    Object.keys(state.apiSettings).forEach((provider) => {
      state.apiSettings[provider] = { ...defaultApiSettings[provider], apiKey: "" };
    });
    saveApiSettings();
    loadSettingsForm();
    renderApiStatus();
    updateProviderStatus();
    $("#apiSaveStatus").textContent = "전체 삭제됨";
    showToast("저장된 모든 API 키를 삭제했습니다.");
  });

  $("#backupJsonBtn").addEventListener("click", backupToJson);

  $("#restoreJsonInput").addEventListener("change", async (event) => {
    await restoreFromJsonFile(event.target.files?.[0]);
    event.target.value = "";
  });

  apiStatusList.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-api-edit]");
    const deleteButton = event.target.closest("[data-api-delete]");

    if (editButton) {
      settingsProvider.value = editButton.dataset.apiEdit;
      loadSettingsForm();
      $("#apiSaveStatus").textContent = "수정 중";
      showToast("선택한 제공자 설정을 불러왔습니다.");
    }

    if (deleteButton) {
      resetProviderKey(deleteButton.dataset.apiDelete);
      $("#apiSaveStatus").textContent = "삭제됨";
      showToast("선택한 제공자의 API 키를 삭제했습니다.");
    }
  });
}

function init() {
  populateGrades();
  bindEvents();
  renderDashboard();
  renderLibrarySets();
  loadSettingsForm();
  renderApiStatus();
  updateProviderStatus();
  const initialView = location.hash.replace("#", "") || "dashboard";
  setView(document.getElementById(initialView) ? initialView : "dashboard");
}

init();
