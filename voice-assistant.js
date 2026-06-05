/**
 * ============================================================
 * JUSTDOWOW – AI Voice Assistant
 * Version: 1.0  |  Pure Vanilla JS  |  No dependencies
 * ============================================================
 * Uses: Web Speech API (SpeechRecognition + SpeechSynthesis)
 * Lead submission: Web3Forms (same key as existing site forms)
 * ============================================================
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────────────────
   * 1. COMPANY KNOWLEDGE BASE
   *    All information sourced exclusively from existing site.
   * ─────────────────────────────────────────────────────────*/
  const KB = {
    company: {
      name: 'JUSTDOWOW',
      tagline: "India's Most Creative Growth Agency",
      description: 'A premium digital marketing agency delivering data-driven SEO, performance ads, brand identity, social media, and web development.',
      office: 'Tronica City, Ghaziabad, NCR',
      serving: 'Tronica City, Noida, Delhi, and all of NCR',
      whatsapp: 'https://wa.me/919990066953',
      whatsappNum: '+91 99900 66953',
      email: 'justdowowinfo@gmail.com',
      instagram: 'https://www.instagram.com/justdowow/',
      web3formsKey: 'f2a9eff7-9aec-47ae-92f0-27fd7f497bed',
    },
    services: [
      {
        name: 'SEO & Organic Growth',
        desc: 'Data-driven SEO combining technical precision, content authority, and link intelligence to rank on page 1.',
        locations: ['Delhi', 'Noida', 'Tronica City'],
      },
      {
        name: 'Performance Marketing',
        desc: 'Meta, Google, YouTube ad campaigns that turn budgets into revenue with laser-targeted, profitable scaling.',
      },
      {
        name: 'Brand Identity Design',
        desc: 'Premium logos, brand kits, and visual systems that communicate authority and make brands unforgettable.',
      },
      {
        name: 'Social Media Marketing',
        desc: 'Instagram, Facebook, LinkedIn — community building, content, and influencer strategies that convert.',
      },
      {
        name: 'Web Design & Development',
        desc: 'Fast, mobile-first, conversion-obsessed websites built on UX psychology and premium aesthetics.',
      },
      {
        name: 'Funnel & CRO Strategy',
        desc: 'Multi-touch funnels with A/B testing that maximise every rupee of ad spend from awareness to purchase.',
      },
    ],
    why: [
      'Strategy-first approach — deep brand audit and custom roadmap before any execution.',
      'Full-funnel expertise covering awareness, conversion, and retention.',
      'Radical transparency with real-time dashboards and weekly reports.',
      'Creative that converts — design meets performance obsession.',
    ],
    locations: {
      'tronica city': 'JUSTDOWOW is headquartered in Tronica City, Ghaziabad, and serves all businesses in the NCR region.',
      noida: 'We serve Noida businesses across Sector 18, 62, 125, 137, and Greater Noida with full-service digital marketing.',
      delhi: 'Delhi clients get premium positioning, bilingual content (Hindi + English), and campaigns covering South, North, East & West Delhi.',
    },
    process: [
      'Discovery — we understand your business and goals.',
      'Strategy — custom growth roadmap based on market research.',
      'Planning — detailed execution calendar.',
      'Creative Development — design, copy, and creatives.',
      'Implementation — live campaign launch.',
      'Optimization — continuous A/B testing and improvement.',
      'Growth — scaling what works for long-term brand dominance.',
    ],
    contact: {
      response: 'We reply within 24 hours. You can reach us on WhatsApp at +91 99900 66953, email justdowowinfo@gmail.com, or fill the form on our website.',
    },
  };

  /* ─────────────────────────────────────────────────────────
   * 2. MULTILINGUAL STRINGS
   * ─────────────────────────────────────────────────────────*/
  const STRINGS = {
    en: {
      greeting: `Hi there! I'm Wowy, the JUSTDOWOW AI assistant. I can tell you all about our digital marketing services — SEO, ads, branding, social media, web development — and how we help brands grow. What can I help you with today?`,
      chipGreeting: ['Our Services', 'About JUSTDOWOW', 'How We Work', 'Get a Free Consultation', 'WhatsApp Us'],
      listenLabel: 'Listening…',
      speakLabel: 'Speaking…',
      thinkLabel: 'Thinking…',
      idleLabel: 'Tap mic to speak',
      noSupport: "Your browser doesn't support voice input. Please type your question below.",
      notHeard: "Sorry, I didn't catch that. Could you repeat or type your question?",
      leadPrompt: "I'd love to get you a free consultation! Please share your details and our team will be in touch within 24 hours.",
      leadSuccess: "Thank you! Your details have been shared with our team. We'll reach out within 24 hours. Meanwhile, you can also WhatsApp us at +91 99900 66953.",
      leadError: "Couldn't submit right now. Please WhatsApp us directly at +91 99900 66953 or email justdowowinfo@gmail.com.",
      micTooltip: 'Talk to Wowy',
      langBtn: 'हिंदी',
    },
    hi: {
      greeting: `नमस्ते! मैं Wowy हूँ, JUSTDOWOW का AI असिस्टेंट। मैं आपको हमारी डिजिटल मार्केटिंग सेवाओं — SEO, Ads, Branding, Social Media, Web Development — के बारे में बता सकता हूँ। आज मैं आपकी कैसे मदद कर सकता हूँ?`,
      chipGreeting: ['हमारी सेवाएं', 'JUSTDOWOW के बारे में', 'हम कैसे काम करते हैं', 'Free Consultation लें', 'WhatsApp करें'],
      listenLabel: 'सुन रहा हूँ…',
      speakLabel: 'बोल रहा हूँ…',
      thinkLabel: 'सोच रहा हूँ…',
      idleLabel: 'बोलने के लिए mic दबाएं',
      noSupport: 'आपका ब्राउज़र voice input support नहीं करता। कृपया नीचे type करें।',
      notHeard: 'माफ़ करें, मैं सुन नहीं पाया। कृपया दोबारा बोलें या type करें।',
      leadPrompt: 'बढ़िया! Free consultation के लिए आपकी details लेना चाहूँगा। हमारी team 24 घंटे में संपर्क करेगी।',
      leadSuccess: 'धन्यवाद! आपकी details हमारी team को मिल गई है। हम 24 घंटे में संपर्क करेंगे। आप अभी WhatsApp भी कर सकते हैं: +91 99900 66953',
      leadError: 'अभी submit नहीं हो पाया। कृपया +91 99900 66953 पर WhatsApp करें या justdowowinfo@gmail.com पर email करें।',
      micTooltip: 'Wowy से बात करें',
      langBtn: 'English',
    },
  };

  /* ─────────────────────────────────────────────────────────
   * 3. INTENT ENGINE
   *    Keyword matching for both Hindi and English queries.
   * ─────────────────────────────────────────────────────────*/
  function getResponse(text, lang) {
    const t = text.toLowerCase();
    const isHi = lang === 'hi';

    // Greeting
    if (/^(hi|hello|hey|namaste|namaskar|helo|hii|good|kaise|kya haal|salam|sat sri)/.test(t)) {
      return isHi
        ? 'नमस्ते! JUSTDOWOW में आपका स्वागत है। आप हमारी किस सेवा के बारे में जानना चाहते हैं?'
        : 'Hello! Welcome to JUSTDOWOW. What would you like to know about our digital marketing services?';
    }

    // SEO
    if (/\bseo\b|search engine|organic|rank|google|keyword|backlink/.test(t) ||
        /सर्च|ऑर्गेनिक|रैंकिंग/.test(t)) {
      const s = KB.services[0];
      return isHi
        ? `हमारी SEO service बहुत powerful है। ${s.desc} हम Delhi, Noida और Tronica City में SEO करते हैं। क्या आप अपने business के लिए SEO consultation चाहते हैं?`
        : `${s.desc} We serve clients in Delhi, Noida, and Tronica City. Would you like a free SEO audit for your website?`;
    }

    // PPC / Ads / Performance
    if (/\b(ppc|ads|paid|google ads|meta ads|facebook ads|youtube ads|performance|advertising|campaign)\b/.test(t) ||
        /एड्स|paid campaign|विज्ञापन/.test(t)) {
      const s = KB.services[1];
      return isHi
        ? `Performance Marketing में हम Google Ads, Meta Ads और YouTube पर campaigns run करते हैं। ${s.desc} क्या आप अपने budget और requirement बताएंगे?`
        : `${s.desc} We manage Google, Meta & YouTube ads. What's your budget and business type? We'll suggest the best channel.`;
    }

    // Branding / Logo / Design
    if (/\b(brand|logo|design|identity|visual|rebrand|creative)\b/.test(t) ||
        /ब्रांड|लोगो|डिज़ाइन/.test(t)) {
      return isHi
        ? 'हमारी Branding service में premium logo, brand kit, और complete visual identity शामिल है। हम एक ऐसी identity बनाते हैं जो trust और authority communicate करे। अपने project के बारे में बताएं?'
        : 'Our brand identity service covers premium logos, brand kits, and visual systems that make your business unforgettable. Tell me about your project and we can tailor a package for you.';
    }

    // Social Media
    if (/\b(social|instagram|facebook|linkedin|reel|content|post|influencer|community)\b/.test(t) ||
        /सोशल मीडिया|इंस्टाग्राम|फेसबुक/.test(t)) {
      return isHi
        ? 'Social Media Marketing में हम Instagram, Facebook, LinkedIn पर content strategy, community management और influencer partnerships handle करते हैं। आपके business को किस platform पर focus करना चाहिए?'
        : 'Our social media service covers content strategy, community management, and influencer collaborations across Instagram, Facebook & LinkedIn. Which platform matters most to your business?';
    }

    // Website / Web Development
    if (/\b(web|website|landing page|ecommerce|shopify|wordpress|development|speed|ux|ui|mobile site)\b/.test(t) ||
        /वेबसाइट|वेब/.test(t)) {
      return isHi
        ? 'हम fast, mobile-first और conversion-focused websites बनाते हैं। हमारी websites UX psychology और premium design पर based होती हैं जो visitors को customers में convert करती हैं। आपको किस type की website चाहिए?'
        : 'We build fast, mobile-first, conversion-obsessed websites with premium UX and design. What kind of website does your business need?';
    }

    // Funnel / CRO
    if (/\b(funnel|cro|conversion|a\/b test|landing page optimiz|roas|roi)\b/.test(t)) {
      return isHi
        ? 'Funnel & CRO Strategy में हम awareness से purchase तक के पूरे customer journey को optimize करते हैं। A/B testing से आपके ads का हर rupee maximize होता है।'
        : 'Our funnel & CRO strategy architects multi-touch journeys and uses A/B testing to maximise every rupee of ad spend from awareness to purchase.';
    }

    // Services list
    if (/\b(service|services|offer|what do you do|what can you do|kya karte|kya dete)\b/.test(t) ||
        /सेवाएं|सर्विस/.test(t)) {
      const names = KB.services.map(s => s.name).join(', ');
      return isHi
        ? `JUSTDOWOW ये services provide करती है: ${names}। इनमें से किसी के बारे में details चाहिए?`
        : `JUSTDOWOW offers: ${names}. Which of these would you like to know more about?`;
    }

    // About company / who are you
    if (/\b(about|who are you|who is|justdowow|company|agency|tell me about|what is)\b/.test(t) ||
        /कौन हो|बारे में|कंपनी/.test(t)) {
      return isHi
        ? `JUSTDOWOW India की most creative growth agency है। हम ${KB.company.serving} में businesses को digital dominance दिलाते हैं — SEO से लेकर brand building तक। हमारा approach strategy-first है: पहले आपके business को समझते हैं, फिर execute करते हैं।`
        : `JUSTDOWOW is ${KB.company.tagline}. We help businesses across ${KB.company.serving} achieve digital dominance through SEO, performance ads, branding, social media, and web development. Our approach is strategy-first — understand, then execute.`;
    }

    // Process / How you work
    if (/\b(process|how do you work|how it works|steps|methodology|approach|kaise karte)\b/.test(t) ||
        /प्रोसेस|कैसे काम/.test(t)) {
      const steps = KB.process.join(' → ');
      return isHi
        ? `हमारा process इस तरह है: ${steps}। हम हर step पर आपको update करते हैं।`
        : `Our process: ${steps}. We keep you informed at every step.`;
    }

    // Tronica City
    if (/tronica/.test(t)) {
      return isHi
        ? 'JUSTDOWOW का headquarter Tronica City, Ghaziabad में है। हम यहाँ के local businesses को national-level digital marketing से grow करते हैं। क्या आप Tronica City में हैं?'
        : KB.locations['tronica city'] + ' As a local agency, we understand the Ghaziabad market inside out.';
    }

    // Noida
    if (/noida|greater noida/.test(t)) {
      return isHi
        ? 'Noida में हम Sector 18, 62, 125, 137 और Greater Noida के businesses के लिए full-service digital marketing करते हैं।'
        : KB.locations.noida;
    }

    // Delhi
    if (/\b(delhi|new delhi|south delhi|north delhi|east delhi|west delhi)\b/.test(t)) {
      return isHi
        ? 'Delhi के लिए हमारे पास premium positioning, Hindi + English bilingual content, और complete city coverage है।'
        : KB.locations.delhi;
    }

    // Price / Cost / Budget / Pricing
    if (/\b(price|cost|pricing|budget|package|rate|charge|fees|kitna|kitne|kitna hai)\b/.test(t) ||
        /कीमत|बजट|पैसे|पैकेज/.test(t)) {
      return isHi
        ? 'हमारी pricing हर client के लिए customized होती है — यह depend करती है आपकी requirement, market, और goals पर। एक free consultation book करें और हम आपके लिए best package suggest करेंगे।'
        : "Our pricing is fully customised based on your requirements, market, and goals. Book a free consultation and we'll suggest the best package — no obligations.";
    }

    // Contact / Get in touch / Consultation / Meet
    if (/\b(contact|reach|call|whatsapp|email|meet|consultation|free audit|get in touch|enquiry|inquiry|book)\b/.test(t) ||
        /संपर्क|बात करें|मिलना|फ्री/.test(t)) {
      return null; // signal: show lead form
    }

    // Result / ROI / growth / success
    if (/\b(result|roi|growth|success|outcome|performance)\b/.test(t) ||
        /रिज़ल्ट|ग्रोथ|सक्सेस/.test(t)) {
      return isHi
        ? 'हम data-driven approach follow करते हैं — Transparent reporting, weekly updates, और real-time dashboards से आप exactly जानते हैं आपका पैसा कहाँ जा रहा है। हम fake numbers में believe नहीं करते; हम real, long-term growth build करते हैं।'
        : 'We follow a data-driven, transparent approach — real-time dashboards, weekly reporting, and honest communication. We focus on real long-term growth, not inflated vanity metrics.';
    }

    // Why choose / why justdowow
    if (/\b(why|why choose|why justdowow|best|better|different|unique)\b/.test(t) ||
        /क्यों चुनें|क्यों choose/.test(t)) {
      return isHi
        ? `JUSTDOWOW को choose करने के ${KB.why.length} strong reasons हैं: ${KB.why.join(' — ')}। हम आपके business को genuinely grow करना चाहते हैं।`
        : `Here's why brands choose JUSTDOWOW: ${KB.why.join(' — ')}. We genuinely care about your growth.`;
    }

    // Thank you / bye
    if (/\b(thanks|thank you|bye|goodbye|take care|great|awesome|perfect|shukriya|dhanyawad)\b/.test(t) ||
        /शुक्रिया|धन्यवाद/.test(t)) {
      return isHi
        ? 'धन्यवाद! आपसे बात करके अच्छा लगा। कोई भी digital marketing सवाल हो तो बेझिझक पूछें। JUSTDOWOW हमेशा available है!'
        : 'Thank you for chatting with JUSTDOWOW! Feel free to come back anytime. Wishing you and your business great success!';
    }

    // Fallback
    return null; // signal: offer lead form + WhatsApp
  }

  /* ─────────────────────────────────────────────────────────
   * 4. STATE
   * ─────────────────────────────────────────────────────────*/
  let isOpen     = false;
  let lang       = 'en';        // 'en' | 'hi'
  let vaState    = 'idle';      // 'idle' | 'listening' | 'thinking' | 'speaking'
  let recognition = null;
  let synthesis   = window.speechSynthesis;
  let isSpeaking  = false;
  let isListening = false;
  let leadPending = false;      // whether we're collecting lead
  let conversationHistory = []; // [{role, text}]

  /* ─────────────────────────────────────────────────────────
   * 5. DOM CONSTRUCTION
   *    Injects all HTML into the page; nothing touches existing HTML.
   * ─────────────────────────────────────────────────────────*/
  function buildDOM() {
    const container = document.createElement('div');
    container.id = 'va-container';
    container.innerHTML = `
      <!-- Floating Trigger -->
      <button id="va-trigger" aria-label="Open JUSTDOWOW Voice Assistant" title="Talk to Wowy">
        <svg id="va-trigger-icon-mic" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zm-1 3a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0V4zm6 8a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.93V21H9v2h6v-2h-2v-2.07A7 7 0 0 0 19 12h-2z"/></svg>
        <svg id="va-trigger-icon-close" viewBox="0 0 24 24" style="display:none" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
      </button>
      <div id="va-trigger-label">Talk to Wowy</div>

      <!-- Main Panel -->
      <div id="va-panel" role="dialog" aria-label="JUSTDOWOW Voice Assistant">

        <!-- Header -->
        <div id="va-header">
          <div id="va-avatar">
            WW
            <span class="va-status-dot"></span>
          </div>
          <div id="va-header-text">
            <div id="va-name">Wowy · <span class="va-wow-badge">JUSTDOWOW</span></div>
            <div id="va-status-text">Digital Marketing Expert · Online</div>
          </div>
          <button id="va-lang-toggle" title="Switch language">हिंदी</button>
          <button id="va-close-btn" aria-label="Close assistant">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>

        <!-- Chat -->
        <div id="va-chat" aria-live="polite" aria-atomic="false"></div>

        <!-- Visualiser -->
        <div id="va-visualiser" class="va-idle">
          ${Array.from({length: 9}, () => '<span class="va-bar"></span>').join('')}
        </div>
        <div id="va-state-label">Tap mic to speak</div>

        <!-- Controls -->
        <div id="va-controls">
          <input id="va-text-input" type="text" placeholder="Type a message…" autocomplete="off" maxlength="300" aria-label="Type a message">
          <button id="va-send-btn" aria-label="Send message">
            <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </button>
          <button id="va-mic-btn" aria-label="Voice input">
            <svg viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zm-1 3a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0V4zM19 12a7 7 0 0 1-14 0H3a9 9 0 0 0 8 8.94V23h2v-2.06A9 9 0 0 0 21 12h-2z"/></svg>
          </button>
        </div>

      </div>
    `;
    document.body.appendChild(container);
  }

  /* ─────────────────────────────────────────────────────────
   * 6. CHAT HELPERS
   * ─────────────────────────────────────────────────────────*/
  function addMessage(role, text, extra) {
    const chat = document.getElementById('va-chat');
    const msg = document.createElement('div');
    msg.className = `va-msg va-${role}`;
    const avatarText = role === 'bot' ? 'WW' : 'You';
    msg.innerHTML = `
      <div class="va-msg-avatar">${avatarText}</div>
      <div class="va-bubble">${escapeHtml(text)}</div>
    `;
    if (extra) {
      const extraEl = document.createElement('div');
      extraEl.className = 'va-msg va-bot';
      extraEl.innerHTML = `<div class="va-msg-avatar">WW</div><div>${extra}</div>`;
      chat.appendChild(msg);
      chat.appendChild(extraEl);
    } else {
      chat.appendChild(msg);
    }
    conversationHistory.push({ role, text });
    scrollChat();
    return msg;
  }

  function addTypingIndicator() {
    const chat = document.getElementById('va-chat');
    const div = document.createElement('div');
    div.className = 'va-msg va-bot';
    div.id = 'va-typing';
    div.innerHTML = `
      <div class="va-msg-avatar">WW</div>
      <div class="va-bubble va-typing-dots">
        <span></span><span></span><span></span>
      </div>
    `;
    chat.appendChild(div);
    scrollChat();
    return div;
  }

  function removeTypingIndicator() {
    const el = document.getElementById('va-typing');
    if (el) el.remove();
  }

  function addChips(chips) {
    const chat = document.getElementById('va-chat');
    const row = document.createElement('div');
    row.className = 'va-chips';
    row.id = 'va-chips-row';
    chips.forEach(label => {
      const btn = document.createElement('button');
      btn.className = 'va-chip';
      btn.textContent = label;
      btn.onclick = () => {
        row.remove();
        handleInput(label);
      };
      row.appendChild(btn);
    });
    chat.appendChild(row);
    scrollChat();
  }

  function removeChips() {
    const el = document.getElementById('va-chips-row');
    if (el) el.remove();
  }

  function scrollChat() {
    const chat = document.getElementById('va-chat');
    setTimeout(() => chat.scrollTop = chat.scrollHeight, 50);
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function setStateLabel(state) {
    vaState = state;
    const el = document.getElementById('va-state-label');
    const viz = document.getElementById('va-visualiser');
    if (!el) return;
    const S = STRINGS[lang];
    el.className = '';
    viz.className = '';
    if (state === 'listening') {
      el.textContent = S.listenLabel;
      el.className = 'va-state-listening';
      viz.className = 'va-listening';
    } else if (state === 'speaking') {
      el.textContent = S.speakLabel;
      el.className = 'va-state-speaking';
    } else if (state === 'thinking') {
      el.textContent = S.thinkLabel;
      el.className = 'va-state-thinking';
      viz.className = 'va-idle';
    } else {
      el.textContent = S.idleLabel;
      viz.className = 'va-idle';
    }
  }

  /* ─────────────────────────────────────────────────────────
   * 7. TEXT-TO-SPEECH
   * ─────────────────────────────────────────────────────────*/
  function speak(text, onEnd) {
    if (!synthesis) { onEnd && onEnd(); return; }
    synthesis.cancel();
    // Strip HTML tags for TTS
    const plain = text.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const utt = new SpeechSynthesisUtterance(plain);
    utt.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
    utt.rate = 0.95;
    utt.pitch = 1.05;

    // Pick best available voice
    const voices = synthesis.getVoices();
    const target = lang === 'hi' ? 'hi' : 'en';
    const preferred = voices.find(v =>
      v.lang.startsWith(target) && (v.name.toLowerCase().includes('india') || v.lang.includes('IN'))
    ) || voices.find(v => v.lang.startsWith(target));
    if (preferred) utt.voice = preferred;

    utt.onstart = () => { isSpeaking = true; setStateLabel('speaking'); };
    utt.onend   = () => { isSpeaking = false; setStateLabel('idle'); onEnd && onEnd(); };
    utt.onerror = () => { isSpeaking = false; setStateLabel('idle'); onEnd && onEnd(); };
    synthesis.speak(utt);
  }

  /* ─────────────────────────────────────────────────────────
   * 8. SPEECH RECOGNITION
   * ─────────────────────────────────────────────────────────*/
  function initRecognition() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return null;
    const r = new SR();
    r.continuous = false;
    r.interimResults = false;
    r.maxAlternatives = 1;

    r.onstart  = () => { isListening = true; setStateLabel('listening'); updateMicBtn(true); };
    r.onresult = (e) => {
      const transcript = e.results[0][0].transcript.trim();
      isListening = false;
      updateMicBtn(false);
      setStateLabel('thinking');
      if (transcript) {
        addMessage('user', transcript);
        processInput(transcript);
      }
    };
    r.onerror = (e) => {
      isListening = false;
      updateMicBtn(false);
      setStateLabel('idle');
      if (e.error === 'no-speech') return;
      addMessage('bot', STRINGS[lang].notHeard);
    };
    r.onend = () => {
      isListening = false;
      updateMicBtn(false);
      if (vaState === 'listening') setStateLabel('idle');
    };
    return r;
  }

  function startListening() {
    if (isSpeaking) synthesis.cancel();
    if (!recognition) {
      // No voice support fallback
      addMessage('bot', STRINGS[lang].noSupport);
      return;
    }
    try {
      recognition.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
      recognition.start();
    } catch(e) {
      // already started; ignore
    }
  }

  function stopListening() {
    if (recognition && isListening) {
      try { recognition.stop(); } catch(e) {}
    }
  }

  function updateMicBtn(active) {
    const btn = document.getElementById('va-mic-btn');
    if (!btn) return;
    if (active) btn.classList.add('va-mic-active');
    else btn.classList.remove('va-mic-active');
  }

  /* ─────────────────────────────────────────────────────────
   * 9. RESPONSE PROCESSING
   * ─────────────────────────────────────────────────────────*/
  function handleInput(text) {
    removeChips();
    addMessage('user', text);
    processInput(text);
  }

  function processInput(text) {
    setStateLabel('thinking');
    // Small simulated "thinking" delay for realism
    const delay = 600 + Math.random() * 500;
    const typing = addTypingIndicator();

    setTimeout(() => {
      removeTypingIndicator();
      // Detect language from text
      const hasHindi = /[\u0900-\u097F]/.test(text) ||
        /\b(kya|hai|hain|aap|main|mujhe|karo|kaise|bata|chahiye|nahi|mera|tumhara|dijiye|bataiye|chahte|chahti)\b/i.test(text);
      if (hasHindi) { lang = 'hi'; updateLangToggle(); }

      const response = getResponse(text, lang);

      if (response === null || leadPending) {
        // Show lead form
        if (!leadPending) {
          leadPending = true;
          const msg = STRINGS[lang].leadPrompt;
          addMessage('bot', msg);
          speak(msg);
        }
        renderLeadForm();
      } else {
        addMessage('bot', response);
        speak(response);
        // Show follow-up chips after bot speaks
        setTimeout(() => {
          const S = STRINGS[lang];
          addChips([
            lang === 'hi' ? 'और सेवाएं' : 'More Services',
            lang === 'hi' ? 'Free Consultation' : 'Free Consultation',
            lang === 'hi' ? 'WhatsApp करें' : 'WhatsApp Us',
          ]);
        }, 400);
      }
    }, delay);
  }

  /* ─────────────────────────────────────────────────────────
   * 10. LEAD FORM
   * ─────────────────────────────────────────────────────────*/
  function renderLeadForm() {
    const chat = document.getElementById('va-chat');
    // Remove existing form if present
    const existing = document.getElementById('va-lead-form-el');
    if (existing) existing.remove();

    const formEl = document.createElement('div');
    formEl.className = 'va-msg va-bot';
    formEl.innerHTML = `
      <div class="va-msg-avatar">WW</div>
      <div class="va-lead-form" id="va-lead-form-el">
        <input id="va-l-name"    type="text"  placeholder="${lang === 'hi' ? 'आपका नाम' : 'Your Name'}"     maxlength="80">
        <input id="va-l-phone"   type="tel"   placeholder="${lang === 'hi' ? 'मोबाइल नंबर' : 'Mobile Number'}" maxlength="15">
        <input id="va-l-email"   type="email" placeholder="${lang === 'hi' ? 'Email (optional)' : 'Email (optional)'}" maxlength="120">
        <select id="va-l-service">
          <option value="">${lang === 'hi' ? 'सेवा चुनें' : 'Select Service'}</option>
          <option value="SEO & Organic Growth">SEO & Organic Growth</option>
          <option value="Performance Marketing">Performance Marketing (PPC / Ads)</option>
          <option value="Brand Identity Design">Brand Identity Design</option>
          <option value="Social Media Marketing">Social Media Marketing</option>
          <option value="Web Design & Development">Web Design & Development</option>
          <option value="Funnel & CRO Strategy">Funnel & CRO Strategy</option>
          <option value="Full-Service Package">Full-Service Package</option>
          <option value="General Inquiry">General Inquiry</option>
        </select>
        <input id="va-l-budget"  type="text"  placeholder="${lang === 'hi' ? 'Monthly Budget (e.g. ₹15,000)' : 'Monthly Budget (e.g. ₹15,000)'}" maxlength="60">
        <button class="va-lead-submit" id="va-l-submit">${lang === 'hi' ? 'Submit करें' : 'Get Free Consultation'}</button>
      </div>
    `;
    chat.appendChild(formEl);
    scrollChat();

    document.getElementById('va-l-submit').addEventListener('click', submitLead);

    // Also allow pressing enter on last field
    document.getElementById('va-l-budget').addEventListener('keypress', e => {
      if (e.key === 'Enter') submitLead();
    });
  }

  async function submitLead() {
    const name    = (document.getElementById('va-l-name')?.value  || '').trim();
    const phone   = (document.getElementById('va-l-phone')?.value || '').trim();
    const email   = (document.getElementById('va-l-email')?.value || '').trim();
    const service = (document.getElementById('va-l-service')?.value || '');
    const budget  = (document.getElementById('va-l-budget')?.value || '').trim();

    if (!name || !phone) {
      const warn = lang === 'hi' ? 'कृपया नाम और मोबाइल नंबर जरूर भरें।' : 'Please enter your name and mobile number.';
      addMessage('bot', warn);
      return;
    }
    if (!/^[\d\+\s\-]{7,15}$/.test(phone)) {
      const warn = lang === 'hi' ? 'कृपया valid mobile number डालें।' : 'Please enter a valid mobile number.';
      addMessage('bot', warn);
      return;
    }

    // Disable submit button
    const btn = document.getElementById('va-l-submit');
    if (btn) { btn.disabled = true; btn.textContent = lang === 'hi' ? 'भेज रहे हैं…' : 'Sending…'; }

    // Remove form from DOM
    const formDiv = document.getElementById('va-lead-form-el');
    if (formDiv) formDiv.closest('.va-msg').remove();
    leadPending = false;

    const message = [
      `Source: Voice Assistant (Wowy)`,
      `Service Interest: ${service || 'Not specified'}`,
      `Budget: ${budget || 'Not specified'}`,
      `Language: ${lang === 'hi' ? 'Hindi' : 'English'}`,
      `Page: ${window.location.href}`,
    ].join('\n');

    try {
      const body = new FormData();
      body.append('access_key', KB.company.web3formsKey);
      body.append('name', name);
      body.append('phone', phone);
      body.append('email', email || 'not-provided@voice-assistant.com');
      body.append('message', message);
      body.append('subject', `[JUSTDOWOW Voice Lead] ${name} – ${service || 'General'}`);

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body,
      });
      const json = await res.json();

      const successMsg = STRINGS[lang].leadSuccess;
      addMessage('bot', successMsg);
      speak(successMsg);

      // Show WhatsApp quick-action
      setTimeout(() => {
        const wa = `https://wa.me/919990066953?text=${encodeURIComponent(`Hi! I'm ${name}. I enquired via the JUSTDOWOW website about ${service || 'your services'}.`)}`;
        const chat = document.getElementById('va-chat');
        const waBubble = document.createElement('div');
        waBubble.className = 'va-msg va-bot';
        waBubble.innerHTML = `
          <div class="va-msg-avatar">WW</div>
          <div class="va-bubble">
            <a href="${wa}" target="_blank" rel="noopener"
               style="color:var(--va-neon);text-decoration:none;font-weight:700;font-family:var(--va-font-h);">
              &#128172; Chat on WhatsApp now &rarr;
            </a>
          </div>
        `;
        chat.appendChild(waBubble);
        scrollChat();
      }, 1500);

    } catch (err) {
      const errMsg = STRINGS[lang].leadError;
      addMessage('bot', errMsg);
      speak(errMsg);
    }
  }

  /* ─────────────────────────────────────────────────────────
   * 11. OPEN / CLOSE
   * ─────────────────────────────────────────────────────────*/
  function openPanel() {
    isOpen = true;
    const panel = document.getElementById('va-panel');
    const trigger = document.getElementById('va-trigger');
    const mic = document.getElementById('va-trigger-icon-mic');
    const close = document.getElementById('va-trigger-icon-close');
    panel.classList.add('va-visible');
    trigger.classList.add('va-open');
    trigger.setAttribute('aria-label', 'Close Voice Assistant');
    mic.style.display = 'none';
    close.style.display = '';

    // First-time greeting
    if (conversationHistory.length === 0) {
      setTimeout(() => {
        const S = STRINGS[lang];
        const typing = addTypingIndicator();
        setTimeout(() => {
          removeTypingIndicator();
          addMessage('bot', S.greeting);
          speak(S.greeting);
          setTimeout(() => addChips(S.chipGreeting), 300);
        }, 1000);
      }, 200);
    }
  }

  function closePanel() {
    isOpen = false;
    synthesis.cancel();
    stopListening();
    setStateLabel('idle');
    const panel = document.getElementById('va-panel');
    const trigger = document.getElementById('va-trigger');
    const mic = document.getElementById('va-trigger-icon-mic');
    const close = document.getElementById('va-trigger-icon-close');
    panel.classList.remove('va-visible');
    trigger.classList.remove('va-open');
    trigger.setAttribute('aria-label', 'Open Voice Assistant');
    mic.style.display = '';
    close.style.display = 'none';
  }

  /* ─────────────────────────────────────────────────────────
   * 12. LANGUAGE TOGGLE
   * ─────────────────────────────────────────────────────────*/
  function updateLangToggle() {
    const btn = document.getElementById('va-lang-toggle');
    if (btn) btn.textContent = STRINGS[lang].langBtn;
    const input = document.getElementById('va-text-input');
    if (input) input.placeholder = lang === 'hi' ? 'यहाँ type करें…' : 'Type a message…';
    document.getElementById('va-state-label').textContent = STRINGS[lang].idleLabel;
    document.getElementById('va-trigger-label').textContent = STRINGS[lang].micTooltip;
  }

  /* ─────────────────────────────────────────────────────────
   * 13. EVENT WIRING
   * ─────────────────────────────────────────────────────────*/
  function wireEvents() {
    // Trigger button
    document.getElementById('va-trigger').addEventListener('click', () => {
      if (isOpen) closePanel(); else openPanel();
    });

    // Close button
    document.getElementById('va-close-btn').addEventListener('click', closePanel);

    // Mic button (toggle)
    document.getElementById('va-mic-btn').addEventListener('click', () => {
      if (isListening) {
        stopListening();
      } else if (!isSpeaking) {
        startListening();
      }
    });

    // Send button
    document.getElementById('va-send-btn').addEventListener('click', sendText);

    // Enter key in text input
    document.getElementById('va-text-input').addEventListener('keypress', e => {
      if (e.key === 'Enter') sendText();
    });

    // Language toggle
    document.getElementById('va-lang-toggle').addEventListener('click', () => {
      lang = lang === 'en' ? 'hi' : 'en';
      updateLangToggle();
      recognition && (recognition.lang = lang === 'hi' ? 'hi-IN' : 'en-IN');
      // Announce language switch in chat
      const msg = lang === 'hi'
        ? 'भाषा Hindi में switch हो गई। मैं अब Hindi में जवाब दूँगा।'
        : 'Switched to English. I will now respond in English.';
      addMessage('bot', msg);
    });

    // Escape key closes panel
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && isOpen) closePanel();
    });

    // Voices may load async
    if (synthesis) {
      synthesis.addEventListener('voiceschanged', () => {});
    }
  }

  function sendText() {
    const input = document.getElementById('va-text-input');
    const text = (input.value || '').trim();
    if (!text) return;
    input.value = '';
    removeChips();
    addMessage('user', text);
    processInput(text);
  }

  /* ─────────────────────────────────────────────────────────
   * 14. INIT
   * ─────────────────────────────────────────────────────────*/
  function init() {
    buildDOM();
    recognition = initRecognition();
    wireEvents();
    setStateLabel('idle');

    // Show tooltip briefly after 3s to attract attention
    setTimeout(() => {
      const label = document.getElementById('va-trigger-label');
      if (label && !isOpen) {
        label.classList.add('va-show');
        setTimeout(() => label.classList.remove('va-show'), 4000);
      }
    }, 3000);

    // Update cursor tracking so existing site cursor doesn't interfere
    // The voice assistant uses pointer-events carefully so it won't
    // conflict with the site's custom cursor logic.
  }

  // Boot when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
