/* =============================================
   SCG CHEVIRI — Legal Translation Engine
   OpenAI → Gemini → Google → LibreTranslate Chain
   ============================================= */

// ==================== LANGUAGE DATABASE ====================
const LANG = {
  'af': { name: 'Afrikaanca', native: 'Afrikaans', deepl: false, google: true, libre: false },
  'sq': { name: 'Arnavutça', native: 'Shqip', deepl: false, google: true, libre: false },
  'am': { name: 'Amharca', native: 'አማርኛ', deepl: false, google: true, libre: false },
  'ar': { name: 'Arapça', native: 'العربية', deepl: false, google: true, libre: true },
  'hy': { name: 'Ermenice', native: 'Հայերեն', deepl: false, google: true, libre: false },
  'az': { name: 'Azerice', native: 'Azərbaycan', deepl: false, google: true, libre: false },
  'eu': { name: 'Baskça', native: 'Euskara', deepl: false, google: true, libre: false },
  'be': { name: 'Belarusça', native: 'Беларуская', deepl: false, google: true, libre: false },
  'bn': { name: 'Bengalce', native: 'বাংলা', deepl: false, google: true, libre: false },
  'bs': { name: 'Boşnakça', native: 'Bosanski', deepl: false, google: true, libre: false },
  'bg': { name: 'Bulgarca', native: 'Български', deepl: true, google: true, libre: true },
  'my': { name: 'Birmanca', native: 'မြန်မာ', deepl: false, google: true, libre: false },
  'ca': { name: 'Katalanca', native: 'Català', deepl: false, google: true, libre: false },
  'ceb': { name: 'Sebuanca', native: 'Cebuano', deepl: false, google: true, libre: false },
  'ny': { name: 'Çevaca', native: 'Chichewa', deepl: false, google: true, libre: false },
  'zh': { name: 'Çince (Basit)', native: '简体中文', deepl: true, google: true, libre: true },
  'zh-TW': { name: 'Çince (Geleneksel)', native: '繁體中文', deepl: false, google: true, libre: false },
  'co': { name: 'Korsikaca', native: 'Corsu', deepl: false, google: true, libre: false },
  'hr': { name: 'Hırvatça', native: 'Hrvatski', deepl: false, google: true, libre: false },
  'cs': { name: 'Çekçe', native: 'Čeština', deepl: true, google: true, libre: true },
  'da': { name: 'Danca', native: 'Dansk', deepl: true, google: true, libre: true },
  'nl': { name: 'Felemenkçe', native: 'Nederlands', deepl: true, google: true, libre: true },
  'en': { name: 'İngilizce', native: 'English', deepl: true, google: true, libre: true },
  'eo': { name: 'Esperanto', native: 'Esperanto', deepl: false, google: true, libre: false },
  'et': { name: 'Estonca', native: 'Eesti', deepl: true, google: true, libre: true },
  'fi': { name: 'Fince', native: 'Suomi', deepl: true, google: true, libre: true },
  'fr': { name: 'Fransızca', native: 'Français', deepl: true, google: true, libre: true },
  'fy': { name: 'Frizce', native: 'Frysk', deepl: false, google: true, libre: false },
  'gl': { name: 'Galiçyaca', native: 'Galego', deepl: false, google: true, libre: false },
  'ka': { name: 'Gürcüce', native: 'ქართული', deepl: false, google: true, libre: false },
  'de': { name: 'Almanca', native: 'Deutsch', deepl: true, google: true, libre: true },
  'el': { name: 'Yunanca', native: 'Ελληνικά', deepl: true, google: true, libre: true },
  'gu': { name: 'Gujaratça', native: 'ગુજરાતી', deepl: false, google: true, libre: false },
  'ht': { name: 'Haiti Kreyolu', native: 'Kreyòl Ayisyen', deepl: false, google: true, libre: false },
  'ha': { name: 'Hausaca', native: 'Hausa', deepl: false, google: true, libre: false },
  'haw': { name: 'Hawaii Dili', native: 'Hawaiʻi', deepl: false, google: true, libre: false },
  'iw': { name: 'İbranice', native: 'עברית', deepl: false, google: true, libre: false },
  'hi': { name: 'Hintçe', native: 'हिन्दी', deepl: false, google: true, libre: true },
  'hmn': { name: 'Hmong', native: 'Hmong', deepl: false, google: true, libre: false },
  'hu': { name: 'Macarca', native: 'Magyar', deepl: true, google: true, libre: true },
  'is': { name: 'İzlandaca', native: 'Íslenska', deepl: false, google: true, libre: false },
  'ig': { name: 'İgbo', native: 'Igbo', deepl: false, google: true, libre: false },
  'id': { name: 'Endonezce', native: 'Bahasa Indonesia', deepl: true, google: true, libre: true },
  'ga': { name: 'İrlandaca', native: 'Gaeilge', deepl: false, google: true, libre: true },
  'it': { name: 'İtalyanca', native: 'Italiano', deepl: true, google: true, libre: true },
  'ja': { name: 'Japonca', native: '日本語', deepl: true, google: true, libre: true },
  'jw': { name: 'Cavaca', native: 'Basa Jawa', deepl: false, google: true, libre: false },
  'kn': { name: 'Kannada', native: 'ಕನ್ನಡ', deepl: false, google: true, libre: false },
  'kk': { name: 'Kazakça', native: 'Қазақ', deepl: false, google: true, libre: false },
  'km': { name: 'Kmerce', native: 'ខ្មែរ', deepl: false, google: true, libre: false },
  'rw': { name: 'Kinyarvanda', native: 'Ikinyarwanda', deepl: false, google: true, libre: false },
  'ko': { name: 'Korece', native: '한국어', deepl: true, google: true, libre: true },
  'ku': { name: 'Kürtçe (Kurmanci)', native: 'Kurmancî', deepl: false, google: true, libre: false },
  'ky': { name: 'Kırgızca', native: 'Кыргызча', deepl: false, google: true, libre: false },
  'lo': { name: 'Laoca', native: 'ລາວ', deepl: false, google: true, libre: false },
  'la': { name: 'Latince', native: 'Latina', deepl: false, google: true, libre: false },
  'lv': { name: 'Letonca', native: 'Latviešu', deepl: true, google: true, libre: true },
  'lt': { name: 'Litvanca', native: 'Lietuvių', deepl: true, google: true, libre: true },
  'lb': { name: 'Lüksemburgca', native: 'Lëtzebuergesch', deepl: false, google: true, libre: false },
  'mk': { name: 'Makedonca', native: 'Македонски', deepl: false, google: true, libre: false },
  'mg': { name: 'Malgaşça', native: 'Malagasy', deepl: false, google: true, libre: false },
  'ms': { name: 'Malayca', native: 'Bahasa Melayu', deepl: false, google: true, libre: false },
  'ml': { name: 'Malayalam', native: 'മലയാളം', deepl: false, google: true, libre: false },
  'mt': { name: 'Maltaca', native: 'Malti', deepl: false, google: true, libre: false },
  'mi': { name: 'Maorice', native: 'Māori', deepl: false, google: true, libre: false },
  'mr': { name: 'Marathi', native: 'मराठी', deepl: false, google: true, libre: false },
  'mn': { name: 'Moğolca', native: 'Монгол', deepl: false, google: true, libre: false },
  'ne': { name: 'Nepalce', native: 'नेपाली', deepl: false, google: true, libre: false },
  'no': { name: 'Norveççe', native: 'Norsk', deepl: true, google: true, libre: true },
  'or': { name: 'Oriya', native: 'ଓଡ଼ିଆ', deepl: false, google: true, libre: false },
  'ps': { name: 'Peştuca', native: 'پښتو', deepl: false, google: true, libre: false },
  'fa': { name: 'Farsça', native: 'فارسی', deepl: false, google: true, libre: false },
  'pl': { name: 'Lehçe', native: 'Polski', deepl: true, google: true, libre: true },
  'pt': { name: 'Portekizce', native: 'Português', deepl: true, google: true, libre: true },
  'pa': { name: 'Pencapça', native: 'ਪੰਜਾਬੀ', deepl: false, google: true, libre: false },
  'ro': { name: 'Rumence', native: 'Română', deepl: true, google: true, libre: true },
  'ru': { name: 'Rusça', native: 'Русский', deepl: true, google: true, libre: true },
  'sm': { name: 'Samoa Dili', native: 'Gagana Samoa', deepl: false, google: true, libre: false },
  'gd': { name: 'İskoç Gaelcesi', native: 'Gàidhlig', deepl: false, google: true, libre: false },
  'sr': { name: 'Sırpça', native: 'Српски', deepl: false, google: true, libre: false },
  'st': { name: 'Sesotho', native: 'Sesotho', deepl: false, google: true, libre: false },
  'sn': { name: 'Şona', native: 'Shona', deepl: false, google: true, libre: false },
  'sd': { name: 'Sindhi', native: 'سنڌي', deepl: false, google: true, libre: false },
  'si': { name: 'Sinhala', native: 'සිංහල', deepl: false, google: true, libre: false },
  'sk': { name: 'Slovakça', native: 'Slovenčina', deepl: true, google: true, libre: true },
  'sl': { name: 'Slovence', native: 'Slovenščina', deepl: true, google: true, libre: true },
  'so': { name: 'Somalice', native: 'Soomaali', deepl: false, google: true, libre: false },
  'es': { name: 'İspanyolca', native: 'Español', deepl: true, google: true, libre: true },
  'su': { name: 'Sundaca', native: 'Basa Sunda', deepl: false, google: true, libre: false },
  'sw': { name: 'Svahili', native: 'Kiswahili', deepl: false, google: true, libre: false },
  'sv': { name: 'İsveççe', native: 'Svenska', deepl: true, google: true, libre: true },
  'tl': { name: 'Filipince', native: 'Filipino', deepl: false, google: true, libre: false },
  'tg': { name: 'Tacikçe', native: 'Тоҷикӣ', deepl: false, google: true, libre: false },
  'ta': { name: 'Tamilce', native: 'தமிழ்', deepl: false, google: true, libre: false },
  'tt': { name: 'Tatarca', native: 'Татар', deepl: false, google: true, libre: false },
  'te': { name: 'Teluguca', native: 'తెలుగు', deepl: false, google: true, libre: false },
  'th': { name: 'Tayca', native: 'ไทย', deepl: false, google: true, libre: false },
  'tr': { name: 'Türkçe', native: 'Türkçe', deepl: true, google: true, libre: true },
  'tk': { name: 'Türkmence', native: 'Türkmen', deepl: false, google: true, libre: false },
  'uk': { name: 'Ukraynaca', native: 'Українська', deepl: true, google: true, libre: true },
  'ur': { name: 'Urduca', native: 'اردو', deepl: false, google: true, libre: false },
  'ug': { name: 'Uygurca', native: 'ئۇيغۇرچە', deepl: false, google: true, libre: false },
  'uz': { name: 'Özbekçe', native: 'Oʻzbek', deepl: false, google: true, libre: false },
  'vi': { name: 'Vietnamca', native: 'Tiếng Việt', deepl: false, google: true, libre: true },
  'cy': { name: 'Galce', native: 'Cymraeg', deepl: false, google: true, libre: true },
  'xh': { name: 'Xhosa', native: 'isiXhosa', deepl: false, google: true, libre: false },
  'yi': { name: 'Yidiş', native: 'ייִדיש', deepl: false, google: true, libre: false },
  'yo': { name: 'Yoruba', native: 'Yorùbá', deepl: false, google: true, libre: false },
  'zu': { name: 'Zuluca', native: 'isiZulu', deepl: false, google: true, libre: false },
};

const LANG_CODES = Object.keys(LANG);
const AUTO_DETECT = 'auto';

// ==================== STORAGE ====================
const Storage = {
  get(key, def) {
    try { return JSON.parse(localStorage.getItem('scg_' + key)) ?? def; }
    catch { return def; }
  },
  set(key, val) {
    localStorage.setItem('scg_' + key, JSON.stringify(val));
  }
};

// ==================== API TRANSLATORS ====================

/** Google Translate */
const Google = {
  key: '',
  name: 'Google',
  badge: '<span class="badge google-badge">Google</span>',

  async translate(text, source, target) {
    if (!this.key) throw new Error('Google Translate API anahtarı gerekli');
    const src = source === AUTO_DETECT ? undefined : source;
    const params = new URLSearchParams({
      q: text,
      target: target,
      key: this.key,
      format: 'text'
    });
    if (src) params.set('source', src);

    const res = await fetch(`https://translation.googleapis.com/language/translate/v2?${params}`);
    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Google: ${res.status} — ${err}`);
    }
    const data = await res.json();
    const t = data.data.translations[0];
    return { text: t.translatedText, detected: t.detectedSourceLanguage, api: 'Google' };
  },

  supported(code) {
    return LANG[code] && LANG[code].google;
  }
};

/** LibreTranslate */
const Libre = {
  key: '',
  name: 'LibreTranslate',
  badge: '<span class="badge libre-badge">LibreTranslate</span>',

  async translate(text, source, target) {
    const src = source === AUTO_DETECT ? undefined : source;
    const body = { q: text, target: target, format: 'text' };
    if (src) body.source = src;

    const res = await fetch('https://libretranslate.com/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    if (!res.ok) {
      const err = await res.text();
      throw new Error(`LibreTranslate: ${res.status} — ${err}`);
    }
    const data = await res.json();
    return { text: data.translatedText, detected: null, api: 'LibreTranslate' };
  },

  supported(code) {
    return LANG[code] && LANG[code].libre;
  }
};

/** OpenAI (GPT) */
const OpenAI = {
  key: '',
  name: 'OpenAI',
  badge: '<span class="badge openai-badge">OpenAI</span>',

  async translate(text, source, target) {
    if (!this.key) throw new Error('OpenAI API anahtarı gerekli');
    const langName = LANG[target]?.name || target;
    const srcLang = source === AUTO_DETECT ? '' : ` from ${LANG[source]?.name || source}`;

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.key}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: `You are a professional legal translator. Translate the following text to ${langName}${srcLang}. Return ONLY the translation, no explanations, no quotes, no notes. Preserve legal terminology accuracy.` },
          { role: 'user', content: text }
        ],
        temperature: 0.1
      })
    });
    if (!res.ok) {
      const err = await res.text();
      throw new Error(`OpenAI: ${res.status} — ${err}`);
    }
    const data = await res.json();
    return { text: data.choices[0].message.content.trim(), detected: null, api: 'OpenAI' };
  },

  supported(code) {
    // OpenAI supports all languages
    return true;
  }
};

/** Google Gemini */
const Gemini = {
  key: '',
  name: 'Gemini',
  badge: '<span class="badge gemini-badge">Gemini</span>',

  async translate(text, source, target) {
    if (!this.key) throw new Error('Gemini API anahtarı gerekli');
    const langName = LANG[target]?.name || target;
    const srcHint = source === AUTO_DETECT ? '' : ` from ${LANG[source]?.name || source}`;

    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.key}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are a legal translator. Translate the following text to ${langName}${srcHint}. Return ONLY the translation, no explanations, no quotes.\n\n${text}`
          }]
        }],
        generationConfig: { temperature: 0.1 }
      })
    });
    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Gemini: ${res.status} — ${err}`);
    }
    const data = await res.json();
    const result = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || '';
    if (!result) throw new Error('Gemini: Boş yanıt');
    return { text: result, detected: null, api: 'Gemini' };
  },

  supported(code) {
    // Gemini supports all languages
    return true;
  }
};

// ==================== TRANSLATION ENGINE ====================

const Engine = {
  method: 'auto', // 'auto' | 'openai' | 'gemini' | 'google' | 'libre'

  getActiveApis() {
    const apis = [];
    if (this.method === 'auto') {
      if (OpenAI.key) apis.push(OpenAI);
      if (Gemini.key) apis.push(Gemini);
      if (Google.key) apis.push(Google);
      apis.push(Libre); // Libre always available
    } else if (this.method === 'openai') apis.push(OpenAI);
    else if (this.method === 'gemini') apis.push(Gemini);
    else if (this.method === 'google') apis.push(Google);
    else if (this.method === 'libre') apis.push(Libre);
    return apis;
  },

  async translate(text, source, target) {
    const apis = this.getActiveApis();
    if (apis.length === 0) throw new Error('Hiçbir çeviri API\'si yapılandırılmamış. Ayarlardan API anahtarlarınızı girin veya yöntemi değiştirin.');
    if (!text.trim()) throw new Error('Çevrilecek metin girin.');

    let lastError;
    for (const api of apis) {
      if (!api.supported(target)) {
        lastError = new Error(`${api.name}: Bu dil desteklenmiyor`);
        continue;
      }
      try {
        return await api.translate(text, source, target);
      } catch (e) {
        lastError = e;
        continue;
      }
    }
    throw lastError || new Error('Çeviri yapılamadı. Tüm API\'ler başarısız oldu.');
  },

  isLangSupported(code) {
    if (code === AUTO_DETECT) return true;
    const apis = this.getActiveApis();
    return apis.some(a => a.supported(code));
  }
};

// ==================== APP ====================

const App = {
  $: (id) => document.getElementById(id),
  history: [],

  init() {
    this.loadSettings();
    this.populateLanguages();
    this.loadHistory();
    this.bindEvents();
    this.updateUI();
  },

  // --- Settings ---
  loadSettings() {
    const s = Storage.get('settings', {});
    OpenAI.key = s.openaiKey || '';
    Gemini.key = s.geminiKey || '';
    Google.key = s.googleKey || '';
    Engine.method = s.method || 'auto';
  },

  saveSettings() {
    Storage.set('settings', {
      openaiKey: OpenAI.key,
      geminiKey: Gemini.key,
      googleKey: Google.key,
      method: Engine.method
    });
  },

  // --- Language Dropdowns ---
  populateLanguages() {
    const src = this.$('sourceLang');
    const tgt = this.$('targetLang');
    src.innerHTML = '<option value="auto">🔍 Otomatik Algıla</option>';
    tgt.innerHTML = '';

    const sorted = LANG_CODES
      .map(c => ({ code: c, ...LANG[c] }))
      .sort((a, b) => a.name.localeCompare(b.name, 'tr'));

    for (const l of sorted) {
      const o1 = document.createElement('option');
      o1.value = l.code;
      o1.textContent = `${l.name} (${l.native})`;
      src.appendChild(o1);

      const o2 = document.createElement('option');
      o2.value = l.code;
      o2.textContent = `${l.name} (${l.native})`;
      tgt.appendChild(o2);
    }
    tgt.value = 'en';
  },

  // --- History ---
  loadHistory() {
    this.history = Storage.get('history', []);
    this.renderHistory();
  },

  saveHistory() {
    Storage.set('history', this.history.slice(0, 50));
    this.renderHistory();
  },

  addHistory(source, target, sourceText, targetText, sourceLang, targetLang, api) {
    this.history.unshift({
      id: Date.now(),
      sourceText: sourceText.slice(0, 500),
      targetText: targetText.slice(0, 500),
      sourceLang,
      targetLang,
      sourceLangName: sourceLang === AUTO_DETECT ? 'Algılanan' : (LANG[sourceLang]?.name || sourceLang),
      targetLangName: LANG[targetLang]?.name || targetLang,
      api,
      time: new Date().toLocaleString('tr-TR')
    });
    this.saveHistory();
  },

  renderHistory() {
    const list = this.$('historyList');
    const empty = this.$('historySection').querySelector('.history-empty');
    if (this.history.length === 0) {
      list.innerHTML = `
        <div class="history-empty">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
          </svg>
          <span>Henüz çeviri yapılmadı</span>
        </div>`;
      return;
    }
    list.innerHTML = this.history.map(h => `
      <div class="history-item" data-id="${h.id}">
        <div class="history-item-header">
          <div class="history-langs">
            <span>${h.sourceLangName}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            <span>${h.targetLangName}</span>
          </div>
          <div class="history-time">${h.time}</div>
        </div>
        <div class="history-texts">
          <div class="history-source">${this.escapeHtml(h.sourceText)}</div>
          <div class="history-target">${this.escapeHtml(h.targetText)}</div>
        </div>
      </div>
    `).join('');
  },

  // --- Translation ---
  async translate() {
    const sourceText = this.$('sourceText').value.trim();
    if (!sourceText) { this.showToast('Lütfen çevrilecek metni girin.', 'error'); return; }

    const source = this.$('sourceLang').value;
    const target = this.$('targetLang').value;

    if (source !== AUTO_DETECT && source === target) {
      this.showToast('Kaynak ve hedef dil aynı olamaz.', 'error');
      return;
    }

    const translateBtn = this.$('translateBtn');
    const spinner = this.$('spinner');
    const outputText = this.$('outputText');
    const placeholder = this.$('outputPlaceholder');
    const apiSource = this.$('apiSource');

    translateBtn.disabled = true;
    spinner.classList.add('active');
    placeholder.style.display = 'none';
    outputText.classList.remove('visible');
    outputText.textContent = '';
    apiSource.textContent = '';

    try {
      const result = await Engine.translate(sourceText, source, target);
      outputText.textContent = result.text;
      outputText.classList.add('visible');
      const apiBadgeMap = { OpenAI: OpenAI.badge, Gemini: Gemini.badge, Google: Google.badge, 'LibreTranslate': Libre.badge };
apiSource.innerHTML = `Çeviri: ${apiBadgeMap[result.api] || result.api}`;

      if (result.detected && source === AUTO_DETECT) {
        const dn = LANG[result.detected.toLowerCase()]?.name || result.detected;
        this.$('detectedLang').textContent = `Algılanan: ${dn}`;
      }

      this.addHistory(source, target, sourceText, result.text, source, target, result.api);
    } catch (e) {
      placeholder.style.display = 'flex';
      this.showToast(e.message, 'error');
    } finally {
      translateBtn.disabled = false;
      spinner.classList.remove('active');
    }
  },

  // --- UI ---
  updateUI() {
    // Update settings modal inputs
    this.$('openaiKey').value = OpenAI.key;
    this.$('geminiKey').value = Gemini.key;
    this.$('googleKey').value = Google.key;

    const method = Engine.method;
    const radio = document.querySelector(`input[name="method"][value="${method}"]`);
    if (radio) radio.checked = true;

    // Update method descriptions
    this.updateMethodDescriptions();
  },

  updateMethodDescriptions() {
    const setStatus = (id, key) => {
      const el = this.$(id);
      if (el) {
        el.textContent = key ? '✅ Anahtar eklendi' : '⚠️ Anahtar eklenmemiş';
        el.style.color = key ? 'var(--color-success)' : 'var(--color-text-muted)';
      }
    };
    setStatus('openaiStatus', OpenAI.key);
    setStatus('geminiStatus', Gemini.key);
    setStatus('googleStatus', Google.key);
  },

  // --- Events ---
  bindEvents() {
    // Translate
    this.$('translateBtn').addEventListener('click', () => this.translate());

    // Enter (Ctrl+Enter) to translate
    this.$('sourceText').addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        this.translate();
      }
    });

    // Character count
    this.$('sourceText').addEventListener('input', () => {
      const len = this.$('sourceText').value.length;
      const max = 10000;
      this.$('charCount').textContent = `${len.toLocaleString('tr-TR')} / ${max.toLocaleString('tr-TR')}`;
      // Auto-clear detected when text changes
      this.$('detectedLang').textContent = '';
    });

    // Swap languages
    this.$('swapBtn').addEventListener('click', () => {
      const src = this.$('sourceLang');
      const tgt = this.$('targetLang');
      if (src.value === AUTO_DETECT) return;
      [src.value, tgt.value] = [tgt.value, src.value];
    });

    // Clear source
    this.$('clearBtn').addEventListener('click', () => {
      this.$('sourceText').value = '';
      this.$('sourceText').dispatchEvent(new Event('input'));
      this.$('sourceText').focus();
    });

    // Copy output
    this.$('copyBtn').addEventListener('click', async () => {
      const text = this.$('outputText').textContent;
      if (!text) { this.showToast('Kopyalanacak çeviri yok.', 'error'); return; }
      try {
        await navigator.clipboard.writeText(text);
        this.showToast('Çeviri kopyalandı!', 'success');
      } catch {
        this.showToast('Kopyalama başarısız.', 'error');
      }
    });

    // History click to reload
    this.$('historyList').addEventListener('click', (e) => {
      const item = e.target.closest('.history-item');
      if (!item) return;
      const id = parseInt(item.dataset.id);
      const h = this.history.find(x => x.id === id);
      if (!h) return;
      this.$('sourceText').value = h.sourceText;
      if (h.sourceLang !== AUTO_DETECT) this.$('sourceLang').value = h.sourceLang;
      this.$('targetLang').value = h.targetLang;
      this.$('sourceText').dispatchEvent(new Event('input'));
      this.$('sourceText').focus();
    });

    // Clear history
    this.$('clearHistoryBtn').addEventListener('click', () => {
      if (this.history.length === 0) return;
      this.history = [];
      this.saveHistory();
      this.showToast('Geçmiş temizlendi.', 'info');
    });

    // --- Settings Modal ---
    this.$('settingsBtn').addEventListener('click', () => {
      this.$('openaiKey').value = OpenAI.key;
      this.$('geminiKey').value = Gemini.key;
      this.$('googleKey').value = Google.key;
      document.querySelector(`input[name="method"][value="${Engine.method}"]`).checked = true;
      this.updateMethodDescriptions();
      this.$('settingsModal').classList.add('active');
    });

    const closeModal = () => this.$('settingsModal').classList.remove('active');

    this.$('modalClose').addEventListener('click', closeModal);
    this.$('modalCancel').addEventListener('click', closeModal);
    this.$('settingsModal').addEventListener('click', (e) => {
      if (e.target === this.$('settingsModal')) closeModal();
    });

    // Close with Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    // Save settings
    this.$('settingsSave').addEventListener('click', () => {
      OpenAI.key = this.$('openaiKey').value.trim();
      Gemini.key = this.$('geminiKey').value.trim();
      Google.key = this.$('googleKey').value.trim();

      const method = document.querySelector('input[name="method"]:checked').value;
      Engine.method = method;

      this.saveSettings();
      this.updateMethodDescriptions();
      closeModal();

      this.showToast('Ayarlar kaydedildi.', 'success');
    });

    // Real-time API key validation hints
    this.$('openaiKey').addEventListener('input', () => this.updateMethodDescriptions());
    this.$('geminiKey').addEventListener('input', () => this.updateMethodDescriptions());
    this.$('googleKey').addEventListener('input', () => this.updateMethodDescriptions());
  },

  // --- Toast ---
  showToast(message, type = 'info') {
    const container = this.$('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('removing');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  },

  // --- Helpers ---
  escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  },

  // ==================== TAB SYSTEM ====================

  currentTab: 'translate',

  switchTab(tab) {
    document.querySelectorAll('.feature-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelector(`.feature-tab[data-tab="${tab}"]`).classList.add('active');
    this.$(`${tab === 'translate' ? 'tab-translate' : 'tab-' + tab}`).classList.add('active');
    this.currentTab = tab;
    if (tab === 'dictionary') this.renderDictionary();
    if (tab === 'favorites') this.renderFavorites();
  },

  // ==================== DICTIONARY ====================

  dictSearchTerm: '',
  dictCategory: 'all',

  renderDictionary() {
    const results = this.$('dictResults');
    const stats = this.$('dictStats');
    const search = this.dictSearchTerm.toLowerCase().trim();

    let filtered = getAllLegalTerms();

    // Category filter
    if (this.dictCategory !== 'all') {
      filtered = filtered.filter(t => t.category === this.dictCategory);
    }

    // Text search
    if (search) {
      filtered = filtered.filter(t =>
        t.tr.toLowerCase().includes(search) ||
        t.en.toLowerCase().includes(search) ||
        t.desc.toLowerCase().includes(search)
      );
    }

    // Stats
    const total = getAllLegalTerms().length;
    stats.textContent = `Toplam ${total} terim · ${filtered.length} gösteriliyor`;

    if (filtered.length === 0) {
      results.innerHTML = `
        <div class="dict-not-found">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <strong>Aramanızla eşleşen terim bulunamadı</strong>
          <span>Farklı bir arama deneyin veya kategori filtresini değiştirin</span>
        </div>`;
      return;
    }

    const favs = this.getFavorites();
    results.innerHTML = filtered.map(t => {
      const isFav = favs.some(f => f.tr === t.tr && f.category === t.category);
      return `
        <div class="dict-term">
          <div class="dict-term-tr">
            <span class="dict-cat-icon">${t.icon || '📚'}</span>
            ${this.escapeHtml(t.tr)}
          </div>
          <div class="dict-term-en">${this.escapeHtml(t.en)}</div>
          <button class="dict-term-fav ${isFav ? 'active' : ''}" data-tr="${this.escapeHtml(t.tr)}" data-en="${this.escapeHtml(t.en)}" data-cat="${t.category}" data-icon="${t.icon || '📚'}" data-desc="${this.escapeHtml(t.desc)}" title="${isFav ? 'Favorilerden çıkar' : 'Favorilere ekle'}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </button>
          <div class="dict-term-desc">
            ${this.escapeHtml(t.desc)}
            <span class="dict-category-label" style="margin-left:8px;">${t.category}</span>
          </div>
        </div>`;
    }).join('');
  },

  filterDictionary() {
    this.renderDictionary();
  },

  // ==================== FAVORITES ====================

  getFavorites() {
    return Storage.get('favorites', []);
  },

  saveFavorites(favs) {
    Storage.set('favorites', favs);
    this.updateFavCount();
    if (this.currentTab === 'favorites') this.renderFavorites();
    // Re-render dictionary if visible to update star states
    if (this.currentTab === 'dictionary') this.renderDictionary();
  },

  toggleFavorite(tr, en, category, icon, desc) {
    let favs = this.getFavorites();
    const idx = favs.findIndex(f => f.tr === tr && f.category === category);
    if (idx > -1) {
      favs.splice(idx, 1);
      this.showToast(`"${tr}" favorilerden çıkarıldı`, 'info');
    } else {
      favs.unshift({ tr, en, category, icon, desc, added: Date.now() });
      this.showToast(`"${tr}" favorilere eklendi ⭐`, 'success');
    }
    this.saveFavorites(favs);
  },

  updateFavCount() {
    const favs = this.getFavorites();
    const count = favs.length;
    const badge = this.$('favCount');
    const tabCount = this.$('favTabCount');
    if (count > 0) {
      badge.textContent = count;
      badge.classList.add('visible');
      tabCount.textContent = count;
      tabCount.classList.add('visible');
    } else {
      badge.classList.remove('visible');
      tabCount.classList.remove('visible');
    }
  },

  renderFavorites() {
    const list = this.$('favoritesList');
    const empty = this.$('favEmpty');
    const favs = this.getFavorites();

    if (favs.length === 0) {
      list.innerHTML = `
        <div class="history-empty" id="favEmpty">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          <span>Henüz favori teriminiz yok</span>
          <span class="fav-hint">Sözlükten terimlerin yanındaki ⭐ ikonuna tıklayarak ekleyebilirsiniz.</span>
        </div>`;
      return;
    }

    list.innerHTML = favs.map(f => `
      <div class="fav-item">
        <div class="fav-item-tr">${f.icon || '📚'} ${this.escapeHtml(f.tr)}</div>
        <div class="fav-item-en">${this.escapeHtml(f.en)}</div>
        <button class="fav-item-remove" data-tr="${this.escapeHtml(f.tr)}" data-cat="${f.category}" title="Favorilerden çıkar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div class="fav-item-cat">${f.category} · ${f.desc || ''}</div>
      </div>
    `).join('');
  },

  // ==================== FILE UPLOAD ====================

  handleFileUpload(file) {
    const validTypes = ['.txt', '.pdf'];
    const ext = '.' + file.name.split('.').pop().toLowerCase();

    if (!validTypes.includes(ext)) {
      this.showToast('Sadece .txt ve .pdf dosyaları destekleniyor.', 'error');
      return;
    }

    const badge = this.$('fileBadge');
    badge.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> ${file.name}`;

    if (ext === '.txt') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        this.$('sourceText').value = content.slice(0, 10000);
        this.$('sourceText').dispatchEvent(new Event('input'));
        this.showToast(`"${file.name}" yüklendi (${content.length} karakter)`, 'success');
      };
      reader.onerror = () => this.showToast('Dosya okunamadı.', 'error');
      reader.readAsText(file, 'UTF-8');
    } else if (ext === '.pdf') {
      const reader = new FileReader();
      reader.onload = (e) => {
        // For PDF, we extract text using a simple approach
        // We embed PDF.js for better extraction
        this.extractPDFText(e.target.result).then(text => {
          this.$('sourceText').value = text.slice(0, 10000);
          this.$('sourceText').dispatchEvent(new Event('input'));
          this.showToast(`"${file.name}" yüklendi (${text.length} karakter)`, 'success');
        }).catch(() => {
          this.showToast('PDF okunurken hata oluştu. Lütfen metni kopyalayıp yapıştırın.', 'error');
        });
      };
      reader.readAsArrayBuffer(file);
    }
  },

  async extractPDFText(arrayBuffer) {
    // Try using PDF.js if available, otherwise fallback to basic extraction
    if (typeof pdfjsLib !== 'undefined') {
      try {
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        let text = '';
        for (let i = 1; i <= Math.min(pdf.numPages, 10); i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          text += content.items.map(item => item.str).join(' ') + '\n';
        }
        return text;
      } catch (e) {
        throw e;
      }
    }
    // Fallback: basic text extraction from raw PDF bytes
    try {
      const bytes = new Uint8Array(arrayBuffer);
      const decoder = new TextDecoder('utf-8');
      let content = decoder.decode(bytes);
      // Extract text between parentheses (PDF text objects)
      const matches = content.match(/\(([^)]*)\)/g) || [];
      return matches.map(m => m.slice(1, -1)).join(' ').slice(0, 10000);
    } catch {
      throw new Error('PDF okunamadı');
    }
  },

  // ==================== INIT ====================
  extendedInit() {
    // Tab switching
    document.querySelectorAll('.feature-tab').forEach(tab => {
      tab.addEventListener('click', () => this.switchTab(tab.dataset.tab));
    });

    // Header favorites button
    this.$('favoritesHeaderBtn').addEventListener('click', () => {
      this.switchTab('favorites');
    });

    // Dictionary search
    this.$('dictSearch').addEventListener('input', (e) => {
      this.dictSearchTerm = e.target.value;
      document.querySelector('.dict-clear').classList.toggle('visible', e.target.value.length > 0);
      this.filterDictionary();
    });

    // Dictionary clear
    this.$('dictClear').addEventListener('click', () => {
      this.$('dictSearch').value = '';
      this.dictSearchTerm = '';
      this.$('dictClear').classList.remove('visible');
      this.filterDictionary();
      this.$('dictSearch').focus();
    });

    // Dictionary category filters (delegated)
    this.$('categoryFilters').addEventListener('click', (e) => {
      const btn = e.target.closest('.cat-filter');
      if (!btn) return;
      document.querySelectorAll('.cat-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      this.dictCategory = btn.dataset.cat;
      this.filterDictionary();
    });

    // Dictionary favorite toggle (delegated)
    this.$('dictResults').addEventListener('click', (e) => {
      const btn = e.target.closest('.dict-term-fav');
      if (!btn) return;
      const tr = btn.dataset.tr;
      const en = btn.dataset.en;
      const cat = btn.dataset.cat;
      const icon = btn.dataset.icon;
      const desc = btn.dataset.desc;
      this.toggleFavorite(tr, en, cat, icon, desc);
    });

    // Favorites list remove (delegated)
    this.$('favoritesList').addEventListener('click', (e) => {
      const btn = e.target.closest('.fav-item-remove');
      if (!btn) return;
      const tr = btn.dataset.tr;
      const cat = btn.dataset.cat;
      let favs = this.getFavorites();
      favs = favs.filter(f => !(f.tr === tr && f.category === cat));
      this.saveFavorites(favs);
      this.showToast(`"${tr}" favorilerden çıkarıldı`, 'info');
    });

    // Clear all favorites
    this.$('clearFavBtn').addEventListener('click', () => {
      const favs = this.getFavorites();
      if (favs.length === 0) return;
      this.saveFavorites([]);
      this.showToast('Tüm favoriler temizlendi.', 'info');
    });

    // File upload
    this.$('uploadBtn').addEventListener('click', () => this.$('fileInput').click());
    this.$('fileInput').addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        this.handleFileUpload(e.target.files[0]);
        e.target.value = '';
      }
    });

    // Drag and drop for source text
    this.$('sourceText').addEventListener('dragover', (e) => {
      e.preventDefault();
      e.currentTarget.style.borderColor = 'var(--color-gold)';
    });
    this.$('sourceText').addEventListener('dragleave', (e) => {
      e.preventDefault();
      e.currentTarget.style.borderColor = '';
    });
    this.$('sourceText').addEventListener('drop', (e) => {
      e.preventDefault();
      e.currentTarget.style.borderColor = '';
      if (e.dataTransfer.files.length > 0) {
        this.handleFileUpload(e.dataTransfer.files[0]);
      }
    });

    // Load PDF.js from CDN if needed
    if (typeof pdfjsLib === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
      script.onload = () => { pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'; };
      document.head.appendChild(script);
    }
  }
};

// ==================== START ====================
document.addEventListener('DOMContentLoaded', () => {
  // First DOM setup
  App.init();

  // Populate category filters
  const catContainer = document.getElementById('categoryFilters');
  if (catContainer) {
    catContainer.innerHTML = '<button class="cat-filter active" data-cat="all">📋 Tümü</button>';
    for (const cat of LEGAL_CATEGORIES) {
      const icon = LEGAL_DICTIONARY[cat].icon || '📚';
      catContainer.innerHTML += `<button class="cat-filter" data-cat="${cat}">${icon} ${cat}</button>`;
    }
  }

  // Extended features init
  App.extendedInit();
  App.updateFavCount();

  // Set Turkish as default source
  const srcSelect = document.getElementById('sourceLang');
  if (srcSelect) srcSelect.value = 'tr';
});
