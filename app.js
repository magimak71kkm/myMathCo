const APP_UPDATED_AT = "2026-07-17";

const curriculum = {
  middle: {
    label: "중학교",
    grades: {
      1: ["소인수분해", "최대공약수와 최소공배수", "정수와 유리수", "유리수의 계산", "문자의 사용", "일차식의 계산", "일차방정식", "좌표평면과 그래프", "정비례와 반비례", "기본 도형", "작도와 합동", "입체도형", "자료의 정리와 해석"],
      2: ["유리수와 순환소수", "단항식과 다항식", "식의 계산", "일차부등식", "연립일차방정식", "일차함수와 그래프", "일차함수의 활용", "삼각형의 성질", "사각형의 성질", "도형의 닮음", "피타고라스 정리", "경우의 수", "확률"],
      3: ["제곱근과 실수", "근호를 포함한 식의 계산", "다항식의 곱셈과 인수분해", "이차방정식", "이차방정식의 활용", "이차함수와 그래프", "이차함수의 활용", "삼각비", "원의 성질", "원주각", "대푯값과 산포도", "상관관계"]
    }
  },
  high: {
    label: "고등학교",
    grades: {
      1: ["다항식의 연산", "나머지정리와 인수정리", "복소수", "이차방정식과 이차함수", "여러 가지 방정식", "여러 가지 부등식", "평면좌표", "직선의 방정식", "원의 방정식", "도형의 이동", "집합", "명제", "함수", "유리함수와 무리함수", "경우의 수"],
      2: ["수열의 뜻", "등차수열과 등비수열", "수열의 합", "수학적 귀납법", "지수", "로그", "지수함수", "로그함수", "삼각함수의 뜻", "삼각함수의 그래프", "삼각함수의 활용", "함수의 극한", "연속", "미분계수와 도함수", "도함수의 활용", "부정적분", "정적분"],
      3: ["수열의 극한", "급수", "함수의 극한 심화", "미분법", "여러 가지 함수의 미분", "도함수의 활용 심화", "적분법", "정적분의 활용", "이차곡선", "공간도형", "공간좌표", "벡터의 연산", "평면벡터와 공간벡터", "확률분포", "통계적 추정"]
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

const lessonPurposeLabels = {
  concept: "개념 확인",
  homework: "숙제",
  quiz: "쪽지시험",
  exam: "내신 대비",
  advanced: "상위권 심화"
};

const studentProfileLabels = {
  foundation: "기초 보완반",
  standard: "표준반",
  top: "상위권반",
  mixed: "혼합반"
};

const solutionDepthLabels = {
  brief: "간단 풀이",
  teaching: "수업용 상세 풀이",
  rubric: "채점 기준 포함"
};

const fontOptions = {
  system: {
    label: "기본 시스템",
    css: `Inter, "Noto Sans KR", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,
    canvas: `"Noto Sans KR", "Malgun Gothic", Arial, sans-serif`
  },
  noto: {
    label: "Noto Sans KR",
    css: `"Noto Sans KR", "Malgun Gothic", Arial, sans-serif`,
    canvas: `"Noto Sans KR", "Malgun Gothic", Arial, sans-serif`
  },
  malgun: {
    label: "맑은 고딕",
    css: `"Malgun Gothic", "맑은 고딕", Arial, sans-serif`,
    canvas: `"Malgun Gothic", Arial, sans-serif`
  },
  serif: {
    label: "명조 계열",
    css: `"Noto Serif KR", "Batang", "바탕", serif`,
    canvas: `"Batang", "Noto Serif KR", serif`
  },
  mono: {
    label: "고정폭",
    css: `"D2Coding", "Consolas", "Courier New", monospace`,
    canvas: `"Consolas", "Courier New", monospace`
  }
};

const providerHints = {
  demo: "샘플 엔진 사용 중",
  gemini: "Gemini API 연결 준비",
  openai: "OpenAI API 연결 준비",
  local: "로컬 LLM 연결 준비"
};

const topbarTitles = {
  dashboard: "MathForge Studio",
  generator: "문제 제작 워크스페이스",
  library: "생성 기록 관리",
  guide: "도움말 센터",
  settings: "환경 설정",
  deploy: "배포 준비"
};

const defaultApiSettings = {
  gemini: {
    apiKey: "",
    model: "gemini-3.1-flash-lite",
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
    { value: "gemini-3.1-flash-lite", label: "Gemini 3.1 Flash-Lite" },
    { value: "gemini-flash-latest", label: "Gemini Flash Latest" },
    { value: "gemini-2.5-flash", label: "Gemini 2.5 Flash" },
    { value: "gemini-2.5-flash-lite", label: "Gemini 2.5 Flash-Lite" },
    { value: "gemini-2.5-pro", label: "Gemini 2.5 Pro" },
    { value: "gemini-3.5-flash", label: "Gemini 3.5 Flash" }
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
  apiSettings: loadApiSettings(),
  defaultProvider: loadDefaultProvider(),
  appFont: loadAppFont()
};
state.problems = flattenProblemSets(state.problemSets);

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const schoolLevel = $("#schoolLevel");
const grade = $("#grade");
const topic = $("#topic");
const customTopicPanel = $("#customTopicPanel");
const customTopic = $("#customTopic");
const topicSearch = $("#topicSearch");
const topicSuggestions = $("#topicSuggestions");
const questionType = $("#questionType");
const difficulty = $("#difficulty");
const lessonPurpose = $("#lessonPurpose");
const studentProfile = $("#studentProfile");
const solutionDepth = $("#solutionDepth");
const includeMistakes = $("#includeMistakes");
const includeRubric = $("#includeRubric");
const includeVisuals = $("#includeVisuals");
const count = $("#count");
const aiProvider = $("#aiProvider");
const customPrompt = $("#customPrompt");
const problemList = $("#problemList");
const libraryList = $("#libraryList");
const recentList = $("#recentList");
const toast = $("#toast");
const pageTitle = $("#pageTitle");
const updatedAt = $("#updatedAt");
const engineStatus = $("#engineStatus");
const providerConfigHelp = $("#providerConfigHelp");
const apiPinCard = $("#apiPinCard");
const settingsProvider = $("#settingsProvider");
const fontSelect = $("#fontSelect");
const apiKey = $("#apiKey");
const apiModel = $("#apiModel");
const customApiModel = $("#customApiModel");
const customModelRow = $("#customModelRow");
const apiEndpoint = $("#apiEndpoint");
const apiStatusList = $("#apiStatusList");
const apiTestResult = $("#apiTestResult");
const backupStatus = $("#backupStatus");
const downloadShelf = $("#downloadShelf");
const downloadLinks = $("#downloadLinks");
const downloadItems = new Map();

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

function loadDefaultProvider() {
  const saved = localStorage.getItem("mathforge.defaultProvider");
  return ["gemini", "openai", "local"].includes(saved) ? saved : "";
}

function loadAppFont() {
  const saved = localStorage.getItem("mathforge.appFont");
  return fontOptions[saved] ? saved : "system";
}

function saveApiSettings() {
  localStorage.setItem("mathforge.apiSettings", JSON.stringify(state.apiSettings));
}

function saveDefaultProvider(provider) {
  state.defaultProvider = provider;
  localStorage.setItem("mathforge.defaultProvider", provider);
}

function saveAppFont(fontKey) {
  state.appFont = fontOptions[fontKey] ? fontKey : "system";
  localStorage.setItem("mathforge.appFont", state.appFont);
}

function applyAppFont(fontKey = state.appFont) {
  const selected = fontOptions[fontKey] || fontOptions.system;
  document.documentElement.style.setProperty("--app-font", selected.css);
  if (fontSelect) fontSelect.value = fontOptions[fontKey] ? fontKey : "system";
}

function getCurrentFontCss() {
  return (fontOptions[state.appFont] || fontOptions.system).css;
}

function getCanvasFontFamily() {
  return (fontOptions[state.appFont] || fontOptions.system).canvas;
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
    apiSettings: state.apiSettings,
    defaultProvider: state.defaultProvider,
    appFont: state.appFont
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
    state.defaultProvider = ["gemini", "openai", "local"].includes(payload.defaultProvider)
      ? payload.defaultProvider
      : "";
    state.appFont = fontOptions[payload.appFont] ? payload.appFont : "system";

    saveProblems();
    saveApiSettings();
    saveDefaultProvider(state.defaultProvider);
    saveAppFont(state.appFont);
    applyAppFont();
    renderProblems(problemList, state.currentProblems, "아직 생성된 문제가 없습니다.", "왼쪽 조건을 설정하고 문제 생성을 눌러보세요.");
    renderDashboard();
    renderLibrarySets();
    loadSettingsForm();
    renderApiStatus();
    syncDefaultProvider();
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
  pageTitle.textContent = topbarTitles[viewId] || "MathForge Studio";
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
  topic.innerHTML = [
    ...topics.map((item) => `<option value="${item}">${item}</option>`),
    `<option value="__custom__">직접 입력</option>`
  ].join("");
  updateCustomTopicPanel();
  renderTopicSuggestions();
}

function getAllTopics() {
  return Object.values(curriculum)
    .flatMap((level) => Object.values(level.grades).flat());
}

function getTopicValue() {
  return topic.value === "__custom__" ? customTopic.value.trim() : topic.value;
}

function updateCustomTopicPanel() {
  const isCustom = topic.value === "__custom__";
  customTopicPanel.classList.toggle("hidden", !isCustom);
}

function renderTopicSuggestions() {
  const query = topicSearch.value.trim().toLowerCase();
  const currentTopics = curriculum[schoolLevel.value].grades[grade.value];
  const base = query
    ? getAllTopics().filter((item) => item.toLowerCase().includes(query))
    : getRelatedTopicSuggestions(currentTopics[0] || "");
  const suggestions = [...new Set(base)].slice(0, 12);

  topicSuggestions.innerHTML = suggestions.map((item) => `
    <button class="suggestion-chip" type="button" data-topic-suggestion="${escapeHtml(item)}">${escapeHtml(item)}</button>
  `).join("");
}

function getRelatedTopicSuggestions(seedTopic) {
  const keywordMap = [
    ["함수", ["일차함수의 활용", "이차함수의 활용", "삼각함수의 그래프", "함수의 극한", "도함수의 활용"]],
    ["방정식", ["연립일차방정식", "이차방정식의 활용", "여러 가지 방정식", "판별식", "근과 계수의 관계"]],
    ["도형", ["원의 방정식", "도형의 이동", "피타고라스 정리", "삼각비", "공간도형"]],
    ["확률", ["경우의 수", "확률", "확률분포", "조건부확률", "통계적 추정"]],
    ["수열", ["등차수열", "등비수열", "수열의 합", "수학적 귀납법", "수열의 극한"]],
    ["삼각", ["삼각비", "삼각함수의 뜻", "삼각함수의 그래프", "삼각함수의 활용", "사인법칙과 코사인법칙"]]
  ];
  const matched = keywordMap.find(([keyword]) => seedTopic.includes(keyword));
  return matched?.[1] || ["함수의 활용", "방정식의 활용", "그래프 해석", "복합 조건 문제", "실생활 응용"];
}

function hasProviderConfig(provider) {
  if (provider === "demo") return true;
  const setting = state.apiSettings[provider];
  if (provider === "local") return Boolean(setting?.endpoint && setting?.model);
  return Boolean(setting?.apiKey && setting?.model);
}

function getProviderLabel(provider) {
  const labels = {
    demo: "데모 샘플 엔진",
    gemini: "Google Gemini API",
    openai: "OpenAI API",
    local: "로컬 LLM"
  };
  const model = state.apiSettings[provider]?.model;
  return provider !== "demo" && model ? `${labels[provider]} · ${model}` : labels[provider];
}

function refreshAiProviderOptions(selectedProvider = aiProvider.value) {
  Array.from(aiProvider.options).forEach((option) => {
    option.textContent = getProviderLabel(option.value);
  });
  aiProvider.value = selectedProvider;
}

function getDefaultProvider() {
  if (state.defaultProvider && hasProviderConfig(state.defaultProvider)) return state.defaultProvider;
  return ["gemini", "openai", "local"].find((provider) => hasProviderConfig(provider)) || "demo";
}

function syncDefaultProvider() {
  refreshAiProviderOptions(getDefaultProvider());
  aiProvider.value = getDefaultProvider();
  updateProviderStatus();
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
  renderApiPinCard(provider);

  if (provider === "demo") {
    providerConfigHelp.textContent = "데모 엔진은 API 키 없이 사용할 수 있습니다.";
    return;
  }

  const setting = state.apiSettings[provider];
  const providerName = getProviderLabel(provider);
  providerConfigHelp.textContent = hasProviderConfig(provider)
    ? `${providerName} 기본 사용 중`
    : `${providerName}를 사용하려면 설정 메뉴에서 API Key와 모델을 저장하세요.`;
}

function renderApiPinCard(provider = aiProvider.value) {
  if (!apiPinCard) return;
  if (provider === "demo") {
    apiPinCard.classList.remove("is-missing");
    apiPinCard.innerHTML = `
      <div>
        <strong>고정 API Key</strong>
        <p>데모 엔진 사용 중 · API Key 불필요</p>
      </div>
      <button class="ghost-button" type="button" data-api-pin-settings="gemini">설정</button>
    `;
    return;
  }

  const setting = state.apiSettings[provider] || {};
  const configured = hasProviderConfig(provider);
  apiPinCard.classList.toggle("is-missing", !configured);
  apiPinCard.innerHTML = `
    <div>
      <strong>고정 API Key</strong>
      <p>${escapeHtml(getProviderLabel(provider))}</p>
      <small>Key: ${escapeHtml(maskSecret(setting.apiKey))} · Model: ${escapeHtml(setting.model || "미설정")}</small>
    </div>
    <button class="ghost-button" type="button" data-api-pin-settings="${provider}">${configured ? "수정" : "등록"}</button>
  `;
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
  if (state.defaultProvider === provider) saveDefaultProvider("");
  saveApiSettings();
  if (settingsProvider.value === provider) loadSettingsForm();
  renderApiStatus();
  syncDefaultProvider();
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
      const listResponse = await fetch(`${base.replace(/\/$/, "")}?key=${encodeURIComponent(setting.apiKey)}`);
      if (!listResponse.ok) throw new Error(`Gemini 모델 목록 조회 오류 ${listResponse.status}`);
      const modelList = await listResponse.json();
      const usableModels = (modelList.models || [])
        .filter((model) => model.supportedGenerationMethods?.includes("generateContent"))
        .map((model) => model.name?.replace("models/", ""))
        .filter(Boolean);

      if (usableModels.length && !usableModels.includes(setting.model)) {
        const suggestions = usableModels.slice(0, 5).join(", ");
        throw new Error(`선택한 모델을 이 API Key에서 찾을 수 없습니다. 사용 가능 예: ${suggestions}`);
      }

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
  return Math.min(30, Math.max(1, Number(value) || 1));
}

function selectProblemType(selected, index) {
  if (selected !== "mixed") return selected;
  return ["multiple", "short", "essay", "truefalse"][index % 4];
}

function pickVisualKind(topicText, index) {
  if (/원|호|현|접선/.test(topicText)) return "circle";
  if (/삼각|도형|각|닮음|피타고라스|벡터|공간/.test(topicText)) return "triangle";
  if (/함수|그래프|좌표|직선|이차|로그|지수|미분|적분/.test(topicText)) return "graph";
  return index % 4 === 0 ? "graph" : "none";
}

function buildTeacherMeta(formData, params, selectedType) {
  const purposeLabel = lessonPurposeLabels[formData.lessonPurpose] || lessonPurposeLabels.exam;
  const profileLabel = studentProfileLabels[formData.studentProfile] || studentProfileLabels.standard;
  const depthLabel = solutionDepthLabels[formData.solutionDepth] || solutionDepthLabels.teaching;
  const baseMinutes = { easy: 2, medium: 4, hard: 7 }[formData.difficulty] || 4;
  const typeMinutes = { multiple: 1, short: 2, essay: 4, truefalse: 1 }[selectedType] || 2;
  const purposeMinutes = formData.lessonPurpose === "advanced" ? 3 : formData.lessonPurpose === "quiz" ? -1 : 0;
  const estimatedMinutes = Math.max(2, baseMinutes + typeMinutes + purposeMinutes);
  const coreSkill = /함수|그래프|좌표|직선|이차|로그|지수|미분|적분/.test(formData.topic)
    ? "식과 그래프의 연결"
    : /도형|삼각|원|각|닮음|피타고라스|벡터/.test(formData.topic)
      ? "도형 조건 해석"
      : /확률|통계|경우|분포/.test(formData.topic)
        ? "자료 해석과 경우 분류"
        : "개념 적용과 계산 검증";

  return {
    lessonPurpose: purposeLabel,
    studentProfile: profileLabel,
    solutionDepth: depthLabel,
    estimatedMinutes,
    skillTags: [coreSkill, purposeLabel, profileLabel],
    teachingPoint: `${formData.topic}에서 ${coreSkill}을 확인하고, 풀이 과정의 근거를 말로 설명하게 합니다.`,
    commonMistake: formData.includeMistakes
      ? `조건을 식으로 옮기는 단계에서 부호, 범위, 단위 또는 그래프 축을 빠뜨리기 쉽습니다.`
      : "",
    rubric: formData.includeRubric
      ? [
          `핵심 개념 또는 정리 선택: ${params.c}점`,
          `조건 정리와 식 세우기: ${params.b}점`,
          `계산 및 결론 표현: ${params.d}점`
        ].join(" / ")
      : ""
  };
}

function createDemoVisual(formData, params, index) {
  if (!formData.includeVisuals) return null;
  const kind = pickVisualKind(formData.topic, index);
  if (kind === "none") return null;

  if (kind === "triangle") {
    return normalizeProblemVisual({
      type: "triangle",
      title: "보기 도형",
      description: `삼각형 ABC에서 AB=${params.a}, AC=${params.b + 4}, ∠A=${40 + params.c}°`,
      labels: ["A", "B", "C"]
    });
  }

  if (kind === "circle") {
    return normalizeProblemVisual({
      type: "circle",
      title: "보기 도형",
      description: `중심 O인 원에서 반지름은 ${params.c + 3}, 현 AB와 중심각을 이용한다.`,
      labels: ["O", "A", "B"]
    });
  }

  return normalizeProblemVisual({
    type: "graph",
    title: "보기 그래프",
    description: formData.schoolLevel === "high"
      ? `y=x^2+${params.b}x-${params.c}의 개형`
      : `두 점 (${params.d}, ${params.b}), (${params.d + 3}, ${params.b + params.c})를 지나는 직선`,
    points: formData.schoolLevel === "high"
      ? [[-4, 8], [-2, 1], [0, -params.c], [2, 2 + params.b], [4, 8 + params.b]]
      : [[params.d, params.b], [params.d + 3, params.b + params.c]]
  });
}

function makeProblem(formData, index) {
  const selectedType = selectProblemType(formData.questionType, index);
  const seed = Date.now() + index * 17;
  const gradeNumber = Number(formData.grade);
  const levelBoost = formData.schoolLevel === "high" ? 3 : 0;
  const difficultyBoost = { easy: 0, medium: 2, hard: 4 }[formData.difficulty];
  const scale = gradeNumber + levelBoost + difficultyBoost;
  const a = (seed % 5) + 2 + scale;
  const b = ((seed >> 2) % 6) + 1 + difficultyBoost;
  const c = ((seed >> 3) % 4) + 2 + gradeNumber;
  const d = ((seed >> 4) % 5) + 1 + levelBoost;
  const levelLabel = curriculum[formData.schoolLevel].label;
  const gradeLabel = `${formData.grade}학년`;
  const topicText = formData.topic;
  const difficultyText = difficultyLabels[formData.difficulty];
  const isHigh = formData.schoolLevel === "high";
  const isHard = formData.difficulty === "hard";
  const visual = createDemoVisual(formData, { a, b, c, d }, index);
  const teacherMeta = buildTeacherMeta(formData, { b, c, d }, selectedType);

  const templates = {
    multiple: () => {
      const answer = isHigh
        ? a * a + b * a - c
        : c * (a + b) - d;
      const stem = isHigh
        ? `함수 f(x)=x²+${b}x-${c}에 대하여 f(${a})의 값을 고르세요.`
        : `식 ${c}(x+${b})-${d}에서 x=${a}일 때의 값을 고르세요.`;
      return {
        question: stem,
        choices: [answer - c, answer - b, answer, answer + d, answer + b + c].map(String),
        answer: String(answer),
        solution: isHigh
          ? `f(${a})=${a}²+${b}×${a}-${c}=${answer}입니다.`
          : `x=${a}를 대입하면 ${c}(${a}+${b})-${d}=${answer}입니다.`
      };
    },
    short: () => {
      if (isHigh) {
        const answer = 2 * a + b;
        return {
          question: `${topicText} 개념을 이용해 함수 y=x²+${b}x+${c}의 x=${a}에서의 순간변화율을 구하세요.`,
          answer: String(answer),
          solution: `y'=2x+${b}이므로 x=${a}에서 y'=${2 * a}+${b}=${answer}입니다.`
        };
      }
      const answer = a + b;
      return {
        question: `${topicText} 개념을 이용해 방정식 ${c}x-${c * a}=${c * b}를 만족하는 x의 값을 구하세요.`,
        answer: String(answer),
        solution: `${c}x=${c * a}+${c * b}=${c * answer}이므로 x=${answer}입니다.`
      };
    },
    essay: () => {
      if (isHigh || isHard) {
        const vertexX = -b / 2;
        const minValueNumerator = 4 * c - b * b;
        return {
          question: `${topicText}와 관련하여 이차함수 y=x²+${b}x+${c}의 꼭짓점의 x좌표와 최솟값을 구하는 과정을 설명하세요.`,
          answer: `x좌표 -${b}/2, 최솟값 ${minValueNumerator}/4`,
          solution: `완전제곱식으로 고치면 y=(x+${b}/2)²+(${minValueNumerator}/4)이므로 꼭짓점의 x좌표는 -${b}/2, 최솟값은 ${minValueNumerator}/4입니다.`
        };
      }
      const answer = a * b + c;
      return {
        question: `${topicText}와 관련하여 ${a}개의 항이 첫째항 ${b}, 공차 ${c}인 등차수열을 이룰 때, 마지막 항을 구하고 과정을 설명하세요.`,
        answer: String(answer),
        solution: `등차수열의 n번째 항은 a_n=${b}+(${a}-1)×${c}=${answer}입니다.`
      };
    },
    truefalse: () => {
      const discriminant = b * b - 4 * c;
      const answer = discriminant >= 0 ? "참" : "거짓";
      return {
        question: `${topicText} 확인 문제입니다. "이차방정식 x²+${b}x+${c}=0은 실근을 가진다." 이 명제는 참인가요, 거짓인가요?`,
        choices: ["참", "거짓"],
        answer,
        solution: `판별식 D=${b}²-4×1×${c}=${discriminant}입니다. D가 0 이상이면 실근을 가지므로 명제는 ${answer}입니다.`
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
    visual,
    teacherMeta,
    ...templates[selectedType]()
  };
}

function generateProblems(formData) {
  return Array.from({ length: formData.count }, (_, index) => makeProblem(formData, index));
}

function normalizeProblemVisual(visual) {
  if (!visual || typeof visual !== "object") return null;
  const type = String(visual.type || "none").toLowerCase();
  if (!["graph", "triangle", "circle"].includes(type)) return null;
  const points = Array.isArray(visual.points)
    ? visual.points
        .map((point) => Array.isArray(point) ? point.slice(0, 2).map(Number) : null)
        .filter((point) => point && point.every(Number.isFinite))
        .slice(0, 8)
    : [];
  const labels = Array.isArray(visual.labels)
    ? visual.labels.map(String).filter(Boolean).slice(0, 4)
    : [];

  return {
    type,
    title: String(visual.title || (type === "graph" ? "보기 그래프" : "보기 도형")).slice(0, 40),
    description: String(visual.description || "").slice(0, 160),
    points,
    labels
  };
}

function buildAiPrompt(formData) {
  const levelLabel = curriculum[formData.schoolLevel].label;
  const gradeLabel = `${formData.grade}학년`;
  const typeLabel = typeLabels[formData.questionType];
  const difficultyLabel = difficultyLabels[formData.difficulty];
  const purposeLabel = lessonPurposeLabels[formData.lessonPurpose];
  const profileLabel = studentProfileLabels[formData.studentProfile];
  const depthLabel = solutionDepthLabels[formData.solutionDepth];
  const extra = formData.customPrompt.trim() || "없음";

  return `
${levelLabel} ${gradeLabel} 대상 수학 학원 선생님이 바로 사용할 수 있는 전문가용 문제 세트를 생성해줘.

조건:
- 단원: ${formData.topic}
- 난이도: ${difficultyLabel}
- 문제 유형: ${typeLabel}
- 생성 개수: ${formData.count}
- 수업 용도: ${purposeLabel}
- 학생 수준: ${profileLabel}
- 풀이 수준: ${depthLabel}
- 흔한 오답 포인트 포함: ${formData.includeMistakes ? "예" : "아니오"}
- 채점 기준 포함: ${formData.includeRubric ? "예" : "아니오"}
- 도형/그래프 우선 포함: ${formData.includeVisuals ? "예" : "아니오"}
- 추가 조건: ${extra}

품질 기준:
- 단순 사칙연산 문제가 아니라 학원 내신 대비, 숙제, 쪽지시험에 쓸 수 있는 개념형, 적용형, 사고력 문제를 섞어줘.
- 중학교는 방정식, 함수, 도형, 확률, 통계의 개념 적용이 드러나게 해줘.
- 고등학교는 함수, 방정식, 수열, 미분, 적분, 확률 등에서 풀이 전략이 필요한 문제로 만들어줘.
- 심화 난이도는 2단계 이상 추론이 필요하게 해줘.
- 각 문항은 예상 풀이 시간, 핵심 역량 태그, 수업 포인트, 흔한 오답, 채점 기준을 포함해줘.
- 풀이에는 선생님이 판서할 수 있도록 핵심 전개와 근거를 분리해서 설명해줘.
- 문제 문장 첫머리에 "${formData.topic} 단원 ${difficultyLabel} 문제입니다" 같은 안내 문구를 반복하지 마.
- 단원명과 난이도는 문제 메타데이터에 이미 표시되므로 문제 본문에는 자연스럽게 녹여줘.
- 함수, 좌표, 도형, 삼각비, 원, 벡터, 통계 그래프처럼 그림이 도움이 되는 문제는 visual 필드를 포함해줘.
- visual은 실제 이미지를 만들지 말고 아래 JSON 데이터만 넣어줘. ${formData.includeVisuals ? "가능하면 그림이 필요한 문항을 포함해줘." : "그림이 꼭 필요 없으면 null로 둬."}
- 객관식은 choices 5개를 만들고, 오답 선지는 그럴듯해야 해.
- 주관식과 서술형도 answer와 solution을 반드시 포함해.

반드시 JSON 배열만 반환해.
각 항목 형식:
{
  "type": "multiple | short | essay | truefalse",
  "question": "문제 본문",
  "choices": ["선지1", "선지2", "선지3", "선지4", "선지5"],
  "answer": "정답",
  "solution": "풀이",
  "teacherMeta": {
    "estimatedMinutes": 5,
    "skillTags": ["핵심 역량", "출제 의도"],
    "teachingPoint": "수업에서 강조할 포인트",
    "commonMistake": "학생들이 자주 틀리는 지점",
    "rubric": "채점 기준"
  },
  "visual": {
    "type": "graph | triangle | circle",
    "title": "보기 그래프 또는 보기 도형",
    "description": "그림에 표시할 짧은 설명",
    "points": [[-2, 3], [0, 1], [2, 5]],
    "labels": ["A", "B", "C"]
  }
}
`.trim();
}

async function generateProblemsWithGemini(formData) {
  const setting = state.apiSettings.gemini;
  const base = setting.endpoint || defaultApiSettings.gemini.endpoint;
  const model = setting.model || defaultApiSettings.gemini.model;
  const url = `${base.replace(/\/$/, "")}/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(setting.apiKey)}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: buildAiPrompt(formData) }] }],
      generationConfig: {
        temperature: formData.difficulty === "hard" ? 0.85 : 0.65,
        responseMimeType: "application/json"
      }
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini 생성 오류 ${response.status}: ${errorText.slice(0, 160)}`);
  }

  const result = await response.json();
  const text = result.candidates?.[0]?.content?.parts?.map((part) => part.text || "").join("") || "";
  const parsed = JSON.parse(text.replace(/^```json\s*|\s*```$/g, ""));
  const items = Array.isArray(parsed) ? parsed : parsed.problems;
  if (!Array.isArray(items) || !items.length) {
    throw new Error("Gemini 응답에서 문제 배열을 찾지 못했습니다.");
  }

  return items.slice(0, formData.count).map((item, index) => normalizeAiProblem(item, formData, index));
}

function normalizeAiProblem(item, formData, index) {
  const selectedType = selectProblemType(formData.questionType, index);
  const type = ["multiple", "short", "essay", "truefalse"].includes(item.type) ? item.type : selectedType;
  const choices = Array.isArray(item.choices)
    ? item.choices.map(String).filter(Boolean).slice(0, type === "multiple" ? 5 : 2)
    : undefined;
  const fallbackMeta = buildTeacherMeta(formData, { b: 3, c: 3, d: 4 }, type);
  const aiMeta = item.teacherMeta && typeof item.teacherMeta === "object" ? item.teacherMeta : {};

  return {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    provider: formData.aiProvider,
    schoolLevel: curriculum[formData.schoolLevel].label,
    grade: `${formData.grade}학년`,
    topic: formData.topic,
    type,
    typeLabel: typeLabels[type],
    difficulty: formData.difficulty,
    difficultyLabel: difficultyLabels[formData.difficulty],
    note: formData.customPrompt.trim(),
    question: String(item.question || "문제 생성 결과를 확인하세요."),
    choices,
    answer: String(item.answer || "정답 확인 필요"),
    solution: String(item.solution || "풀이 확인 필요"),
    teacherMeta: {
      ...fallbackMeta,
      estimatedMinutes: Number(aiMeta.estimatedMinutes) || fallbackMeta.estimatedMinutes,
      skillTags: Array.isArray(aiMeta.skillTags) && aiMeta.skillTags.length
        ? aiMeta.skillTags.map(String).slice(0, 5)
        : fallbackMeta.skillTags,
      teachingPoint: String(aiMeta.teachingPoint || fallbackMeta.teachingPoint),
      commonMistake: formData.includeMistakes ? String(aiMeta.commonMistake || fallbackMeta.commonMistake) : "",
      rubric: formData.includeRubric ? String(aiMeta.rubric || fallbackMeta.rubric) : ""
    },
    visual: normalizeProblemVisual(item.visual)
  };
}

async function generateProblemsForForm(formData) {
  if (formData.aiProvider === "gemini") {
    return generateProblemsWithGemini(formData);
  }
  return generateProblems(formData);
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
    lessonPurpose: lessonPurposeLabels[formData.lessonPurpose],
    studentProfile: studentProfileLabels[formData.studentProfile],
    problems
  };
}

function renderProblemVisual(visual) {
  const data = normalizeProblemVisual(visual);
  if (!data) return "";

  const caption = data.description
    ? `<figcaption>${escapeHtml(data.description)}</figcaption>`
    : "";
  const title = escapeHtml(data.title);
  let svg = "";

  if (data.type === "graph") {
    const points = data.points.length >= 2 ? data.points : [[-3, 4], [-1, 1], [1, 2], [3, 6]];
    const xs = points.map(([x]) => x);
    const ys = points.map(([, y]) => y);
    const minX = Math.min(-5, ...xs);
    const maxX = Math.max(5, ...xs);
    const minY = Math.min(-5, ...ys);
    const maxY = Math.max(5, ...ys);
    const mapX = (x) => 44 + ((x - minX) / (maxX - minX || 1)) * 252;
    const mapY = (y) => 172 - ((y - minY) / (maxY - minY || 1)) * 132;
    const path = points.map(([x, y], idx) => `${idx ? "L" : "M"} ${mapX(x).toFixed(1)} ${mapY(y).toFixed(1)}`).join(" ");
    const pointDots = points.map(([x, y]) => `<circle cx="${mapX(x).toFixed(1)}" cy="${mapY(y).toFixed(1)}" r="4" />`).join("");
    svg = `
      <svg viewBox="0 0 340 210" role="img" aria-label="${title}">
        <rect x="1" y="1" width="338" height="208" rx="8" />
        <g class="grid">${Array.from({ length: 6 }, (_, i) => `<path d="M44 ${40 + i * 26}H296M${44 + i * 50.4} 40V172" />`).join("")}</g>
        <path class="axis" d="M44 106H296M170 40V172" />
        <path class="curve" d="${path}" />
        <g class="points">${pointDots}</g>
        <text x="52" y="28">${title}</text>
      </svg>`;
  } else if (data.type === "circle") {
    svg = `
      <svg viewBox="0 0 340 210" role="img" aria-label="${title}">
        <rect x="1" y="1" width="338" height="208" rx="8" />
        <circle class="shape" cx="170" cy="104" r="64" />
        <path class="curve" d="M170 104L109 124M170 104L222 66M109 124Q158 154 222 66" />
        <circle class="points" cx="170" cy="104" r="4" />
        <circle class="points" cx="109" cy="124" r="4" />
        <circle class="points" cx="222" cy="66" r="4" />
        <text x="176" y="101">O</text><text x="92" y="140">A</text><text x="228" y="62">B</text>
        <text x="52" y="28">${title}</text>
      </svg>`;
  } else {
    const labels = data.labels.length >= 3 ? data.labels : ["A", "B", "C"];
    svg = `
      <svg viewBox="0 0 340 210" role="img" aria-label="${title}">
        <rect x="1" y="1" width="338" height="208" rx="8" />
        <path class="shape" d="M84 164L168 48L270 164Z" />
        <path class="curve" d="M84 164L270 164M168 48L168 164" />
        <circle class="points" cx="84" cy="164" r="4" /><circle class="points" cx="168" cy="48" r="4" /><circle class="points" cx="270" cy="164" r="4" />
        <text x="164" y="38">${escapeHtml(labels[0])}</text><text x="66" y="182">${escapeHtml(labels[1])}</text><text x="276" y="182">${escapeHtml(labels[2])}</text>
        <text x="52" y="28">${title}</text>
      </svg>`;
  }

  return `<figure class="problem-visual">${svg}${caption}</figure>`;
}

function renderTeacherMeta(meta) {
  if (!meta) return "";
  const tags = Array.isArray(meta.skillTags)
    ? meta.skillTags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")
    : "";
  const mistake = meta.commonMistake
    ? `<p><strong>오답 포인트</strong>${escapeHtml(meta.commonMistake)}</p>`
    : "";
  const rubric = meta.rubric
    ? `<p><strong>채점 기준</strong>${escapeHtml(meta.rubric)}</p>`
    : "";

  return `
    <aside class="teacher-meta">
      <div class="teacher-meta-head">
        <strong>강사용 분석</strong>
        <span>${escapeHtml(meta.estimatedMinutes || "-")}분</span>
      </div>
      <div class="skill-tags">${tags}</div>
      <p><strong>수업 포인트</strong>${escapeHtml(meta.teachingPoint || "핵심 개념 적용 과정을 확인합니다.")}</p>
      ${mistake}
      ${rubric}
    </aside>
  `;
}

function renderProblem(problem, index) {
  const choices = problem.choices
    ? `<ol class="choices">${problem.choices.map((choice, choiceIndex) => `<li>${choiceIndex + 1}. ${choice}</li>`).join("")}</ol>`
    : "";
  const note = problem.note ? `<p><strong>추가 조건:</strong> ${escapeHtml(problem.note)}</p>` : "";
  const visual = renderProblemVisual(problem.visual);
  const teacherMeta = renderTeacherMeta(problem.teacherMeta);

  return `
    <article class="problem-card">
      <div class="problem-meta">
        <span class="type-pill">${problem.typeLabel}</span>
        <span class="difficulty-pill">${problem.difficultyLabel}</span>
        <span class="status-pill">${problem.schoolLevel} ${problem.grade}</span>
        <span class="status-pill">${problem.topic}</span>
      </div>
      <h4>문제 ${index + 1}. ${escapeHtml(problem.question)}</h4>
      ${visual}
      ${choices}
      ${note}
      ${teacherMeta}
      <button class="ghost-button answer-toggle" type="button" data-answer-toggle>정답/풀이 보기</button>
      <div class="answer-box" hidden>
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
          <span><strong>수업 용도</strong>${escapeHtml(set.lessonPurpose || "-")}</span>
          <span><strong>학생 수준</strong>${escapeHtml(set.studentProfile || "-")}</span>
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
    const meta = problem.teacherMeta ? [
      `예상 시간: ${problem.teacherMeta.estimatedMinutes || "-"}분`,
      `수업 포인트: ${problem.teacherMeta.teachingPoint || "-"}`,
      problem.teacherMeta.commonMistake ? `오답 포인트: ${problem.teacherMeta.commonMistake}` : "",
      problem.teacherMeta.rubric ? `채점 기준: ${problem.teacherMeta.rubric}` : ""
    ].filter(Boolean).join("\n") : "";
    return [
      `${index + 1}. [${problem.schoolLevel} ${problem.grade} · ${problem.topic} · ${problem.typeLabel}]`,
      `문제: ${problem.question}${choices}`,
      meta,
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
    const meta = problem.teacherMeta ? [
      `예상 시간: ${problem.teacherMeta.estimatedMinutes || "-"}분`,
      `수업 포인트: ${problem.teacherMeta.teachingPoint || "-"}`,
      problem.teacherMeta.commonMistake ? `오답 포인트: ${problem.teacherMeta.commonMistake}` : "",
      problem.teacherMeta.rubric ? `채점 기준: ${problem.teacherMeta.rubric}` : ""
    ].filter(Boolean).join("\n") : "";
    return [
      `${index + 1}. [${problem.schoolLevel} ${problem.grade} · ${problem.topic} · ${problem.typeLabel}]`,
      `문제: ${problem.question}${choices}`,
      meta,
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

function saveBlobWithAndroidBridge(blob, fileName) {
  if (!window.MathForgeAndroid?.saveFile) return false;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const base64 = String(reader.result || "").split(",")[1] || "";
    window.MathForgeAndroid.saveFile(fileName, blob.type || "application/octet-stream", base64);
  });
  reader.addEventListener("error", () => {
    showToast("앱 저장 준비에 실패했습니다. 다시 시도해 주세요.");
  });
  reader.readAsDataURL(blob);
  showToast("앱 저장 창을 여는 중입니다.");
  return true;
}

function downloadBlob(blob, fileName) {
  if (saveBlobWithAndroidBridge(blob, fileName)) return;

  const id = crypto.randomUUID();
  const url = URL.createObjectURL(blob);
  const file = new File([blob], fileName, { type: blob.type || "application/octet-stream" });
  downloadItems.set(id, { file, url });

  const item = document.createElement("div");
  item.className = "download-item";
  item.dataset.downloadId = id;

  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = fileName;

  const shareButton = document.createElement("button");
  shareButton.className = "ghost-button download-share-button";
  shareButton.type = "button";
  shareButton.dataset.shareDownload = id;
  shareButton.textContent = "공유/저장";

  item.append(link, shareButton);

  downloadShelf.hidden = false;
  downloadLinks.prepend(item);

  while (downloadLinks.children.length > 5) {
    const oldItem = downloadLinks.lastElementChild;
    const oldId = oldItem.dataset.downloadId;
    const oldDownload = downloadItems.get(oldId);
    if (oldDownload) URL.revokeObjectURL(oldDownload.url);
    downloadItems.delete(oldId);
    oldItem.remove();
  }

  window.setTimeout(() => link.click(), 0);
}

function buildPrintableHtml(problems, title, mode = "full") {
  const showProblems = mode !== "answers";
  const showAnswers = mode !== "problems";
  const printFont = getCurrentFontCss();
  const rows = problems.map((problem, index) => {
    const choices = problem.choices?.length
      ? `<ol class="choices">${problem.choices.map((choice) => `<li>${escapeHtml(choice)}</li>`).join("")}</ol>`
      : "";
    const questionBlock = showProblems ? `
      <section class="item">
        <h2>문제 ${index + 1}</h2>
        <p class="meta">${escapeHtml(problem.schoolLevel)} ${escapeHtml(problem.grade)} · ${escapeHtml(problem.topic)} · ${escapeHtml(problem.typeLabel)}</p>
        <p>${escapeHtml(problem.question)}</p>
        ${renderProblemVisual(problem.visual)}
        ${choices}
      </section>
    ` : "";
    const answerBlock = showAnswers ? `
      <section class="answer">
        <h2>정답 ${index + 1}</h2>
        <p><strong>${escapeHtml(problem.answer)}</strong></p>
        <p>${escapeHtml(problem.solution)}</p>
        ${problem.teacherMeta ? `
          <p><strong>예상 시간:</strong> ${escapeHtml(problem.teacherMeta.estimatedMinutes || "-")}분</p>
          <p><strong>수업 포인트:</strong> ${escapeHtml(problem.teacherMeta.teachingPoint || "-")}</p>
          ${problem.teacherMeta.commonMistake ? `<p><strong>오답 포인트:</strong> ${escapeHtml(problem.teacherMeta.commonMistake)}</p>` : ""}
          ${problem.teacherMeta.rubric ? `<p><strong>채점 기준:</strong> ${escapeHtml(problem.teacherMeta.rubric)}</p>` : ""}
        ` : ""}
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
        body { font-family: ${printFont}; color: #16202a; line-height: 1.55; }
        h1 { font-size: 24px; margin: 0 0 18px; }
        h2 { font-size: 16px; margin: 0 0 6px; }
        .item, .answer { break-inside: avoid; border-bottom: 1px solid #dfe6ee; padding: 12px 0; }
        .meta { color: #627183; font-size: 12px; margin: 0 0 8px; }
        .choices { margin: 8px 0 0 20px; padding: 0; }
        .choices li { margin: 4px 0; }
        .answer { background: #f6f9fb; padding-left: 10px; padding-right: 10px; }
        .problem-visual { margin: 12px 0; max-width: 360px; }
        .problem-visual svg { width: 100%; height: auto; }
        .problem-visual rect { fill: #fbfcfe; stroke: #d8e1ea; }
        .problem-visual .grid path { stroke: #e7edf3; stroke-width: 1; }
        .problem-visual .axis { stroke: #7d8b99; stroke-width: 1.5; }
        .problem-visual .curve { fill: none; stroke: #256f6f; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }
        .problem-visual .shape { fill: rgba(37, 111, 111, 0.08); stroke: #256f6f; stroke-width: 3; stroke-linejoin: round; }
        .problem-visual .points { fill: #d88425; }
        .problem-visual text { fill: #243241; font: 700 13px Arial, sans-serif; }
        .problem-visual figcaption { color: #627183; font-size: 12px; margin-top: 4px; }
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
    window.setTimeout(() => {
      printTarget.print();
      showToast("인쇄 창에서 PDF로 저장할 수 있습니다.");
    }, 250);
  }, { once: true });
}

async function exportProblemsAsPdf(problems, title = "MathForge 문제 세트") {
  if (!problems.length) {
    showToast("내보낼 문제가 없습니다.");
    return;
  }

  showToast("PDF 파일을 만드는 중입니다.");
  const pages = await renderPdfPages(problems, title);
  const pdfBlob = buildPdfFromJpegs(pages);
  downloadBlob(pdfBlob, `${sanitizeFileName(title)}.pdf`);
  showToast("PDF 파일을 다운로드했습니다.");
}

async function renderPdfPages(problems, title) {
  const pageWidth = 1240;
  const pageHeight = 1754;
  const margin = 88;
  const lineHeight = 34;
  const pages = [];
  let canvas;
  let ctx;
  let y;
  const pdfFontFamily = getCanvasFontFamily();
  const pdfFont = (weight, size) => `${weight} ${size}px ${pdfFontFamily}`;

  function newPage() {
    canvas = document.createElement("canvas");
    canvas.width = pageWidth;
    canvas.height = pageHeight;
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, pageWidth, pageHeight);
    ctx.fillStyle = "#16202a";
    ctx.font = pdfFont(700, 34);
    ctx.fillText(title, margin, margin);
    ctx.strokeStyle = "#dfe6ee";
    ctx.beginPath();
    ctx.moveTo(margin, margin + 28);
    ctx.lineTo(pageWidth - margin, margin + 28);
    ctx.stroke();
    y = margin + 82;
  }

  function pushPage() {
    pages.push({
      width: pageWidth,
      height: pageHeight,
      jpeg: dataUrlToBytes(canvas.toDataURL("image/jpeg", 0.92))
    });
  }

  function ensureSpace(height) {
    if (y + height <= pageHeight - margin) return;
    pushPage();
    newPage();
  }

  function drawWrapped(text, x, maxWidth, font, color = "#16202a") {
    ctx.font = font;
    ctx.fillStyle = color;
    const words = String(text).split(/\s+/);
    const lines = [];
    let line = "";
    for (const word of words) {
      const test = line ? `${line} ${word}` : word;
      if (ctx.measureText(test).width > maxWidth && line) {
        lines.push(line);
        line = word;
      } else {
        line = test;
      }
    }
    if (line) lines.push(line);
    for (const lineText of lines) {
      ctx.fillText(lineText, x, y);
      y += lineHeight;
    }
    return lines.length * lineHeight;
  }

  function drawVisual(visual) {
    const data = normalizeProblemVisual(visual);
    if (!data) return;
    ensureSpace(230);
    const x = margin;
    const w = 420;
    const h = 220;
    const top = y;
    ctx.fillStyle = "#fbfcfe";
    ctx.strokeStyle = "#d8e1ea";
    ctx.lineWidth = 2;
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(x, top, w, h, 14);
    } else {
      ctx.rect(x, top, w, h);
    }
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#243241";
    ctx.font = pdfFont(700, 22);
    ctx.fillText(data.title, x + 26, top + 36);

    if (data.type === "graph") {
      const gx = x + 52;
      const gy = top + 56;
      const gw = 310;
      const gh = 120;
      ctx.strokeStyle = "#e7edf3";
      ctx.lineWidth = 1;
      for (let i = 0; i <= 5; i += 1) {
        ctx.beginPath();
        ctx.moveTo(gx, gy + i * (gh / 5));
        ctx.lineTo(gx + gw, gy + i * (gh / 5));
        ctx.moveTo(gx + i * (gw / 5), gy);
        ctx.lineTo(gx + i * (gw / 5), gy + gh);
        ctx.stroke();
      }
      ctx.strokeStyle = "#7d8b99";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(gx, gy + gh / 2);
      ctx.lineTo(gx + gw, gy + gh / 2);
      ctx.moveTo(gx + gw / 2, gy);
      ctx.lineTo(gx + gw / 2, gy + gh);
      ctx.stroke();
      const points = data.points.length >= 2 ? data.points : [[-3, 4], [-1, 1], [1, 2], [3, 6]];
      const xs = points.map(([px]) => px);
      const ys = points.map(([, py]) => py);
      const minX = Math.min(-5, ...xs);
      const maxX = Math.max(5, ...xs);
      const minY = Math.min(-5, ...ys);
      const maxY = Math.max(5, ...ys);
      const mapX = (px) => gx + ((px - minX) / (maxX - minX || 1)) * gw;
      const mapY = (py) => gy + gh - ((py - minY) / (maxY - minY || 1)) * gh;
      ctx.strokeStyle = "#256f6f";
      ctx.lineWidth = 5;
      ctx.beginPath();
      points.forEach(([px, py], idx) => {
        const sx = mapX(px);
        const sy = mapY(py);
        if (idx) ctx.lineTo(sx, sy);
        else ctx.moveTo(sx, sy);
      });
      ctx.stroke();
      ctx.fillStyle = "#d88425";
      points.forEach(([px, py]) => {
        ctx.beginPath();
        ctx.arc(mapX(px), mapY(py), 6, 0, Math.PI * 2);
        ctx.fill();
      });
    } else if (data.type === "circle") {
      ctx.strokeStyle = "#256f6f";
      ctx.fillStyle = "rgba(37, 111, 111, 0.08)";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.arc(x + 208, top + 118, 58, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + 208, top + 118);
      ctx.lineTo(x + 154, top + 136);
      ctx.moveTo(x + 208, top + 118);
      ctx.lineTo(x + 254, top + 82);
      ctx.moveTo(x + 154, top + 136);
      ctx.quadraticCurveTo(x + 205, top + 162, x + 254, top + 82);
      ctx.stroke();
      ctx.fillStyle = "#243241";
      ctx.fillText("O", x + 216, top + 116);
      ctx.fillText("A", x + 132, top + 154);
      ctx.fillText("B", x + 264, top + 78);
    } else {
      ctx.strokeStyle = "#256f6f";
      ctx.fillStyle = "rgba(37, 111, 111, 0.08)";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(x + 94, top + 168);
      ctx.lineTo(x + 210, top + 62);
      ctx.lineTo(x + 330, top + 168);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.strokeStyle = "#d88425";
      ctx.beginPath();
      ctx.moveTo(x + 210, top + 62);
      ctx.lineTo(x + 210, top + 168);
      ctx.stroke();
      ctx.fillStyle = "#243241";
      const labels = data.labels.length >= 3 ? data.labels : ["A", "B", "C"];
      ctx.fillText(labels[0], x + 204, top + 52);
      ctx.fillText(labels[1], x + 72, top + 190);
      ctx.fillText(labels[2], x + 338, top + 190);
    }

    if (data.description) {
      y = top + h + 22;
      drawWrapped(data.description, x, pageWidth - margin * 2, pdfFont(400, 19), "#627183");
    } else {
      y = top + h + 18;
    }
  }

  newPage();
  problems.forEach((problem, index) => {
    ensureSpace(260);
    ctx.fillStyle = "#eef8f6";
    ctx.fillRect(margin - 18, y - 34, pageWidth - margin * 2 + 36, 46);
    ctx.fillStyle = "#174f52";
    ctx.font = pdfFont(700, 24);
    ctx.fillText(`문제 ${index + 1} · ${problem.topic} · ${problem.typeLabel} · ${problem.difficultyLabel}`, margin, y);
    y += 48;
    drawWrapped(problem.question, margin, pageWidth - margin * 2, pdfFont(500, 25));
    drawVisual(problem.visual);
    if (problem.choices?.length) {
      y += 8;
      problem.choices.forEach((choice, choiceIndex) => {
        ensureSpace(46);
        drawWrapped(`${choiceIndex + 1}. ${choice}`, margin + 22, pageWidth - margin * 2 - 22, pdfFont(400, 23), "#344353");
      });
    }
    y += 14;
    ensureSpace(120);
    drawWrapped(`정답: ${problem.answer}`, margin, pageWidth - margin * 2, pdfFont(700, 23), "#174f52");
    drawWrapped(`풀이: ${problem.solution}`, margin, pageWidth - margin * 2, pdfFont(400, 22), "#344353");
    if (problem.teacherMeta) {
      y += 10;
      drawWrapped(`강사용: 예상 ${problem.teacherMeta.estimatedMinutes || "-"}분 · ${problem.teacherMeta.teachingPoint || ""}`, margin, pageWidth - margin * 2, pdfFont(400, 20), "#627183");
      if (problem.teacherMeta.commonMistake) {
        drawWrapped(`오답 포인트: ${problem.teacherMeta.commonMistake}`, margin, pageWidth - margin * 2, pdfFont(400, 20), "#627183");
      }
      if (problem.teacherMeta.rubric) {
        drawWrapped(`채점 기준: ${problem.teacherMeta.rubric}`, margin, pageWidth - margin * 2, pdfFont(400, 20), "#627183");
      }
    }
    y += 26;
  });
  pushPage();
  return pages;
}

function dataUrlToBytes(dataUrl) {
  const binary = atob(dataUrl.split(",")[1]);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function buildPdfFromJpegs(pages) {
  const encoder = new TextEncoder();
  const chunks = [];
  const offsets = [0];
  let length = 0;

  function addText(text) {
    const bytes = encoder.encode(text);
    chunks.push(bytes);
    length += bytes.length;
  }

  function addBytes(bytes) {
    chunks.push(bytes);
    length += bytes.length;
  }

  function beginObject(id) {
    offsets[id] = length;
    addText(`${id} 0 obj\n`);
  }

  addText("%PDF-1.4\n%\xFF\xFF\xFF\xFF\n");
  beginObject(1);
  addText("<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");
  beginObject(2);
  const pageObjectIds = pages.map((_, index) => 3 + index * 3);
  addText(`<< /Type /Pages /Kids [${pageObjectIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pages.length} >>\nendobj\n`);

  pages.forEach((page, index) => {
    const pageId = 3 + index * 3;
    const imageId = pageId + 1;
    const contentId = pageId + 2;
    const pageWidthPt = 595.28;
    const pageHeightPt = 841.89;
    const content = `q\n${pageWidthPt} 0 0 ${pageHeightPt} 0 0 cm\n/Im0 Do\nQ\n`;

    beginObject(pageId);
    addText(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidthPt} ${pageHeightPt}] /Resources << /XObject << /Im0 ${imageId} 0 R >> >> /Contents ${contentId} 0 R >>\nendobj\n`);
    beginObject(imageId);
    addText(`<< /Type /XObject /Subtype /Image /Width ${page.width} /Height ${page.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${page.jpeg.length} >>\nstream\n`);
    addBytes(page.jpeg);
    addText("\nendstream\nendobj\n");
    beginObject(contentId);
    addText(`<< /Length ${encoder.encode(content).length} >>\nstream\n${content}endstream\nendobj\n`);
  });

  const xrefOffset = length;
  addText(`xref\n0 ${offsets.length}\n0000000000 65535 f \n`);
  for (let i = 1; i < offsets.length; i += 1) {
    addText(`${String(offsets[i]).padStart(10, "0")} 00000 n \n`);
  }
  addText(`trailer\n<< /Size ${offsets.length} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`);
  return new Blob(chunks, { type: "application/pdf" });
}

function exportProblemsAsExcel(problems, fileName, title = "MathForge 문제 세트") {
  if (!problems.length) {
    showToast("내보낼 문제가 없습니다.");
    return;
  }

  const headers = ["번호", "학교급", "학년", "단원", "유형", "난이도", "예상 시간", "역량 태그", "수업 포인트", "오답 포인트", "채점 기준", "문제", "그림 유형", "그림 설명", "선지", "정답", "풀이"];
  const rows = problems.map((problem, index) => [
    index + 1,
    problem.schoolLevel,
    problem.grade,
    problem.topic,
    problem.typeLabel,
    problem.difficultyLabel,
    problem.teacherMeta?.estimatedMinutes ? `${problem.teacherMeta.estimatedMinutes}분` : "",
    (problem.teacherMeta?.skillTags || []).join(" / "),
    problem.teacherMeta?.teachingPoint || "",
    problem.teacherMeta?.commonMistake || "",
    problem.teacherMeta?.rubric || "",
    problem.question,
    problem.visual?.type || "",
    problem.visual?.description || "",
    (problem.choices || []).join(" / "),
    problem.answer,
    problem.solution
  ]);
  const workbook = buildXlsxWorkbook([headers, ...rows], title);
  downloadBlob(workbook, fileName.replace(/\.(xls|csv)$/i, ".xlsx"));
  showToast("XLSX 파일을 다운로드했습니다.");
}

function buildXlsxWorkbook(rows, title) {
  const sheetRows = rows.map((row, rowIndex) => {
    const cells = row.map((cell, cellIndex) => {
      const ref = `${columnName(cellIndex + 1)}${rowIndex + 1}`;
      return `<c r="${ref}" t="inlineStr"><is><t>${escapeXml(cell)}</t></is></c>`;
    }).join("");
    return `<row r="${rowIndex + 1}">${cells}</row>`;
  }).join("");

  const files = {
    "[Content_Types].xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
</Types>`,
    "_rels/.rels": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
</Relationships>`,
    "docProps/core.xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:title>${escapeXml(title)}</dc:title>
  <dc:creator>MathForge</dc:creator>
  <dcterms:created xsi:type="dcterms:W3CDTF">${new Date().toISOString()}</dcterms:created>
</cp:coreProperties>`,
    "xl/workbook.xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets><sheet name="Problems" sheetId="1" r:id="rId1"/></sheets>
</workbook>`,
    "xl/_rels/workbook.xml.rels": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
</Relationships>`,
    "xl/worksheets/sheet1.xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetData>${sheetRows}</sheetData>
</worksheet>`
  };

  return new Blob([zipStore(files)], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  });
}

function columnName(index) {
  let name = "";
  while (index > 0) {
    const remainder = (index - 1) % 26;
    name = String.fromCharCode(65 + remainder) + name;
    index = Math.floor((index - 1) / 26);
  }
  return name;
}

function escapeXml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function zipStore(files) {
  const encoder = new TextEncoder();
  const chunks = [];
  const central = [];
  let offset = 0;

  Object.entries(files).forEach(([name, content]) => {
    const nameBytes = encoder.encode(name);
    const data = encoder.encode(content);
    const crc = crc32(data);
    const local = new Uint8Array(30 + nameBytes.length);
    const view = new DataView(local.buffer);
    view.setUint32(0, 0x04034b50, true);
    view.setUint16(4, 20, true);
    view.setUint16(6, 0, true);
    view.setUint16(8, 0, true);
    view.setUint32(14, crc, true);
    view.setUint32(18, data.length, true);
    view.setUint32(22, data.length, true);
    view.setUint16(26, nameBytes.length, true);
    local.set(nameBytes, 30);
    chunks.push(local, data);

    const centralHeader = new Uint8Array(46 + nameBytes.length);
    const centralView = new DataView(centralHeader.buffer);
    centralView.setUint32(0, 0x02014b50, true);
    centralView.setUint16(4, 20, true);
    centralView.setUint16(6, 20, true);
    centralView.setUint16(8, 0, true);
    centralView.setUint16(10, 0, true);
    centralView.setUint32(16, crc, true);
    centralView.setUint32(20, data.length, true);
    centralView.setUint32(24, data.length, true);
    centralView.setUint16(28, nameBytes.length, true);
    centralView.setUint32(42, offset, true);
    centralHeader.set(nameBytes, 46);
    central.push(centralHeader);
    offset += local.length + data.length;
  });

  const centralOffset = offset;
  const centralSize = central.reduce((sum, item) => sum + item.length, 0);
  const end = new Uint8Array(22);
  const endView = new DataView(end.buffer);
  endView.setUint32(0, 0x06054b50, true);
  endView.setUint16(8, central.length, true);
  endView.setUint16(10, central.length, true);
  endView.setUint32(12, centralSize, true);
  endView.setUint32(16, centralOffset, true);

  return new Blob([...chunks, ...central, end]);
}

function crc32(bytes) {
  let crc = 0xffffffff;
  for (let i = 0; i < bytes.length; i += 1) {
    crc ^= bytes[i];
    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
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
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-answer-toggle]");
    if (!button) return;
    const answerBox = button.nextElementSibling;
    const isHidden = answerBox.hasAttribute("hidden");
    answerBox.toggleAttribute("hidden", !isHidden);
    button.textContent = isHidden ? "정답/풀이 숨기기" : "정답/풀이 보기";
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-api-pin-settings]");
    if (!button) return;
    settingsProvider.value = button.dataset.apiPinSettings;
    loadSettingsForm();
    setView("settings");
  });

  downloadLinks.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-share-download]");
    if (!button) return;
    const item = downloadItems.get(button.dataset.shareDownload);
    if (!item) {
      showToast("다운로드 파일을 찾을 수 없습니다. 다시 생성해 주세요.");
      return;
    }

    try {
      if (navigator.canShare?.({ files: [item.file] }) && navigator.share) {
        await navigator.share({ files: [item.file], title: item.file.name });
        showToast("공유/저장 창을 열었습니다.");
        return;
      }
      window.open(item.url, "_blank", "noopener");
      showToast("새 탭에서 파일을 열었습니다. 브라우저 메뉴에서 저장하세요.");
    } catch (error) {
      showToast(`공유/저장 실패: ${error.message}`);
    }
  });

  $$("[data-view-link]").forEach((link) => {
    link.addEventListener("click", () => setView(link.dataset.viewLink));
  });

  $("#menuToggle").addEventListener("click", () => $(".sidebar").classList.toggle("open"));
  schoolLevel.addEventListener("change", populateGrades);
  grade.addEventListener("change", populateTopics);
  topic.addEventListener("change", updateCustomTopicPanel);
  topicSearch.addEventListener("input", renderTopicSuggestions);
  topicSuggestions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-topic-suggestion]");
    if (!button) return;
    customTopic.value = button.dataset.topicSuggestion;
  });
  aiProvider.addEventListener("change", () => {
    updateProviderStatus();
  });

  settingsProvider.addEventListener("change", loadSettingsForm);
  apiModel.addEventListener("change", updateCustomModelVisibility);
  fontSelect.addEventListener("change", () => {
    saveAppFont(fontSelect.value);
    applyAppFont();
    showToast(`${fontOptions[state.appFont].label} 글씨체를 적용했습니다.`);
  });

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

  $("#generatorForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = {
      schoolLevel: schoolLevel.value,
      grade: grade.value,
      topic: getTopicValue(),
      questionType: questionType.value,
      difficulty: difficulty.value,
      lessonPurpose: lessonPurpose.value,
      studentProfile: studentProfile.value,
      solutionDepth: solutionDepth.value,
      includeMistakes: includeMistakes.checked,
      includeRubric: includeRubric.checked,
      includeVisuals: includeVisuals.checked,
      count: clampCount(count.value),
      aiProvider: aiProvider.value,
      customPrompt: customPrompt.value
    };

    if (!formData.topic) {
      showToast("직접 입력 단원을 입력하세요.");
      return;
    }

    if (formData.aiProvider !== "demo") {
      if (!hasProviderConfig(formData.aiProvider)) {
        showToast("설정 메뉴에서 API Key를 저장하세요.");
        setView("settings");
        settingsProvider.value = formData.aiProvider;
        loadSettingsForm();
        return;
      }
    }

    const submitButton = event.submitter;
    submitButton.disabled = true;
    submitButton.textContent = formData.aiProvider === "demo" ? "생성 중..." : "AI 생성 중...";

    try {
      const generated = await generateProblemsForForm(formData);
      const generatedSet = createProblemSet(formData, generated);
      state.currentProblems = generated;
      state.currentSet = generatedSet;
      state.problemSets = [generatedSet, ...state.problemSets];
      saveProblems();
      renderProblems(problemList, generated, "아직 생성된 문제가 없습니다.", "왼쪽 조건을 설정하고 문제 생성을 눌러보세요.");
      renderDashboard();
      renderLibrarySets();
      showToast(`${generated.length}개 문제가 생성되었습니다.`);
    } catch (error) {
      const fallback = generateProblems(formData);
      const fallbackSet = createProblemSet({ ...formData, aiProvider: "demo" }, fallback);
      state.currentProblems = fallback;
      state.currentSet = fallbackSet;
      state.problemSets = [fallbackSet, ...state.problemSets];
      saveProblems();
      renderProblems(problemList, fallback, "아직 생성된 문제가 없습니다.", "왼쪽 조건을 설정하고 문제 생성을 눌러보세요.");
      renderDashboard();
      renderLibrarySets();
      showToast(`AI 생성 실패로 데모 문제를 생성했습니다: ${error.message}`);
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "문제 생성";
    }
  });

  $("#copyBtn").addEventListener("click", async () => {
    await copyProblems(state.currentProblems, state.currentSet?.title || "MathForge 생성 문제");
  });

  $("#pdfBtn").addEventListener("click", () => {
    exportProblemsAsPdf(state.currentProblems, state.currentSet?.title || "MathForge 생성 문제");
  });

  $("#excelBtn").addEventListener("click", () => {
    const title = state.currentSet?.title || "MathForge 생성 문제";
    exportProblemsAsExcel(state.currentProblems, `${sanitizeFileName(title)}.xlsx`, title);
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
    exportProblemsAsExcel(state.problems, "mathforge-library.xlsx", "MathForge 전체 보관함");
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
      exportProblemsAsExcel(problemSet.problems || [], `${sanitizeFileName(problemSet.title)}.xlsx`, problemSet.title);
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
    saveDefaultProvider(provider);
    saveApiSettings();
    renderApiStatus();
    syncDefaultProvider();
    $("#apiSaveStatus").textContent = "저장됨";
    showToast("API 설정을 저장하고 문제 생성 기본값으로 적용했습니다.");
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
    saveDefaultProvider("");
    saveApiSettings();
    loadSettingsForm();
    renderApiStatus();
    syncDefaultProvider();
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
  if (updatedAt) updatedAt.textContent = `최신 업데이트: ${APP_UPDATED_AT}`;
  applyAppFont();
  populateGrades();
  bindEvents();
  renderDashboard();
  renderLibrarySets();
  loadSettingsForm();
  renderApiStatus();
  syncDefaultProvider();
  const initialView = location.hash.replace("#", "") || "dashboard";
  setView(document.getElementById(initialView) ? initialView : "dashboard");
}

init();
