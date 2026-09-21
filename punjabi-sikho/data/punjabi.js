/*
  Punjabi course content, built for SPEAKING: listening, understanding and answering.
  Learners see transliteration (English-style spelling) and hear audio. Gurmukhi script is only
  shown if the learner turns it on in Testing tools. The script is still needed here because it
  is what the audio generator reads aloud.

  P(nat, said as, meaning, needsCheck, note)   a phrase or word ("nat" = the Gurmukhi text)
  N(nat, said as, meaning, digit)              a number

  pairs: [[a, b], ...] are small conversations inside a lesson: item a is heard, item b is the reply.
  needsCheck = true flags items a native speaker should double-check first.
  Audio file names come from the "said as" text, e.g. "ki haal hai?" -> audio/ki-haal-hai.mp3
  and audio/ki-haal-hai-slow.mp3

  Spelling guide for "said as": aa = long a (as in "father"), ee/i = long/short i, oo/u = long/short u,
  doubled consonants (tt, dd, kk) are held a little longer, as in Punjabi.
*/
(function () {
  const P = (nat, rom, en, check, note) => ({ nat, rom, en, extra: '', note: note || '', check: !!check });
  const N = (nat, rom, en, digit) => ({ nat, rom, en, extra: digit, note: '', check: false });

  window.COURSE = {
    name: 'Punjabi',
    nativeName: 'ਪੰਜਾਬੀ',
    voiceLang: 'pa',
    levels: [
      { id: 1, title: 'First conversations', sub: 'Greetings, names and asking for help' },
      { id: 2, title: 'Family', sub: 'Talk about the people in your life' },
      { id: 3, title: 'Daily life', sub: 'Numbers, food, shopping and getting around' },
      { id: 4, title: 'Festivals, food and fun', sub: 'Wishes, Lohri, bhangra and langar' }
    ],
    lessons: [
      /* ---------------- Level 1: first conversations ---------------- */
      {
        id: 'a1', level: 1, kind: 'phrase', icon: '👋', title: 'Hello and goodbye',
        tip: "'Sat shri akaal' is the classic Punjabi greeting. Say 'aa' like the a in 'father'. Double letters like 'tt' are held a little longer.",
        items: [
          P('ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ', 'sat shri akaal', 'hello (traditional greeting)', true),
          P('ਕੀ ਹਾਲ ਹੈ?', 'ki haal hai?', 'how are you?'),
          P('ਮੈਂ ਠੀਕ ਹਾਂ', 'main theek haan', "I'm doing well"),
          P('ਸ਼ੁਕਰੀਆ', 'shukriyaa', 'thank you'),
          P('ਫੇਰ ਮਿਲਾਂਗੇ', 'pher milaange', 'see you again')
        ],
        pairs: [[1, 2]]
      },
      {
        id: 'a2', level: 1, kind: 'phrase', icon: '🙏', title: 'Polite words',
        tip: 'Adding ਜੀ (jee) after a name, or after "yes", shows respect. Punjabis use it all the time.',
        items: [
          P('ਨਮਸਤੇ', 'namaste', 'hello'),
          P('ਸ਼ੁਭ ਸਵੇਰ', 'shubh savere', 'good morning'),
          P('ਸ਼ੁਭ ਰਾਤਰੀ', 'shubh raatri', 'good night'),
          P('ਮਾਫ਼ ਕਰਨਾ', 'maaf karnaa', 'sorry / excuse me'),
          P('ਕੋਈ ਗੱਲ ਨਹੀਂ', 'koi gall nahin', 'no problem')
        ],
        pairs: [[3, 4]]
      },
      {
        id: 'a3', level: 1, kind: 'phrase', icon: '✅', title: 'Yes, no and maybe',
        items: [
          P('ਹਾਂ', 'haan', 'yes'),
          P('ਹਾਂ ਜੀ', 'haan jee', 'yes (politely)'),
          P('ਨਹੀਂ', 'nahin', 'no'),
          P('ਸ਼ਾਇਦ', 'shaayad', 'maybe'),
          P('ਪਤਾ ਨਹੀਂ', 'pataa nahin', "I don't know"),
          P('ਠੀਕ ਹੈ', 'theek hai', "it's okay")
        ]
      },
      {
        id: 'a4', level: 1, kind: 'phrase', icon: '💬', title: 'Your name and where you live',
        tip: 'Punjabi verbs change for a man or a woman. A man says ਰਹਿੰਦਾ (rehndaa), a woman says ਰਹਿੰਦੀ (rehndi). These lessons use the man\'s form; a woman just swaps the ending.',
        items: [
          P('ਤੁਹਾਡਾ ਨਾਮ ਕੀ ਹੈ?', 'tuhaadaa naam ki hai?', 'what is your name?'),
          P('ਮੇਰਾ ਨਾਮ ਰਾਜ ਹੈ', 'meraa naam raaj hai', 'my name is Raj'),
          P('ਤੁਸੀਂ ਕਿੱਥੇ ਰਹਿੰਦੇ ਹੋ?', 'tusi kitthe rehnde ho?', 'where do you live?'),
          P('ਮੈਂ ਅਮਰੀਕਾ ਵਿੱਚ ਰਹਿੰਦਾ ਹਾਂ', 'main amreekaa vich rehndaa haan', 'I live in America', false, 'A woman says ਰਹਿੰਦੀ ਹਾਂ (rehndi haan).'),
          P('ਤੁਹਾਨੂੰ ਮਿਲ ਕੇ ਖੁਸ਼ੀ ਹੋਈ', 'tuhaanu mil ke khushi hoi', 'nice to meet you')
        ],
        pairs: [[0, 1], [2, 3]]
      },
      {
        id: 'a5', level: 1, kind: 'phrase', icon: '🤔', title: "When you don't understand",
        tip: 'These are your safety net. Using them early in a real conversation makes people slow down and help you.',
        items: [
          P('ਮੈਨੂੰ ਸਮਝ ਨਹੀਂ ਆਈ', 'mainu samajh nahin aayi', "I don't understand"),
          P('ਦੁਬਾਰਾ ਬੋਲੋ', 'dubaaraa bolo', 'please say it again'),
          P('ਹੌਲੀ ਬੋਲੋ', 'hauli bolo', 'please speak slowly'),
          P('ਪੰਜਾਬੀ ਵਿੱਚ ਇਹਨੂੰ ਕੀ ਕਹਿੰਦੇ ਹਨ?', 'punjaabi vich ehnu ki kehnde han?', 'how do you say this in Punjabi?', true),
          P('ਮੈਨੂੰ ਥੋੜ੍ਹੀ ਪੰਜਾਬੀ ਆਉਂਦੀ ਹੈ', 'mainu thodi punjaabi aundi hai', 'I know a little Punjabi'),
          P('ਤੁਹਾਨੂੰ ਪੰਜਾਬੀ ਆਉਂਦੀ ਹੈ?', 'tuhaanu punjaabi aundi hai?', 'do you know Punjabi?')
        ],
        pairs: [[5, 4]]
      },
      {
        id: 'cp1', level: 1, kind: 'checkpoint', icon: '✓', title: 'First conversations checkpoint',
        from: ['a1', 'a2', 'a3', 'a4', 'a5'], count: 10
      },

      /* ---------------- Level 2: family ---------------- */
      {
        id: 'f1', level: 2, kind: 'word', icon: '👪', title: 'Immediate family',
        items: [
          P('ਮੰਮੀ', 'mummy', 'mother'),
          P('ਪਾਪਾ', 'paapaa', 'father'),
          P('ਭਰਾ', 'bharaa', 'brother'),
          P('ਭੈਣ', 'bhain', 'sister'),
          P('ਪਰਿਵਾਰ', 'parivaar', 'family')
        ]
      },
      {
        id: 'f2', level: 2, kind: 'word', icon: '👵', title: 'Grandparents',
        tip: "Punjabi has different words for your father's side (ਦਾਦਾ, ਦਾਦੀ) and your mother's side (ਨਾਨਾ, ਨਾਨੀ).",
        items: [
          P('ਦਾਦਾ', 'daadaa', "grandfather (father's side)"),
          P('ਦਾਦੀ', 'daadi', "grandmother (father's side)"),
          P('ਨਾਨਾ', 'naanaa', "grandfather (mother's side)"),
          P('ਨਾਨੀ', 'naani', "grandmother (mother's side)")
        ]
      },
      {
        id: 'f3', level: 2, kind: 'word', icon: '🧑‍🤝‍🧑', title: "Your father's side",
        tip: "Punjabi separates your father's elder brother, ਤਾਇਆ (taaiyaa), from his younger brother, ਚਾਚਾ (chaachaa). Their wives are ਤਾਈ (taai) and ਚਾਚੀ (chaachi).",
        items: [
          P('ਤਾਇਆ', 'taaiyaa', "father's elder brother"),
          P('ਤਾਈ', 'taai', "father's elder brother's wife"),
          P('ਚਾਚਾ', 'chaachaa', "father's younger brother"),
          P('ਚਾਚੀ', 'chaachi', "father's younger brother's wife"),
          P('ਭੂਆ', 'bhooaa', "father's sister"),
          P('ਫੁੱਫੜ', 'phupphad', "father's sister's husband", true)
        ]
      },
      {
        id: 'f4', level: 2, kind: 'word', icon: '👨‍👩‍👧', title: "Your mother's side",
        items: [
          P('ਮਾਮਾ', 'maamaa', "mother's brother"),
          P('ਮਾਮੀ', 'maami', "mother's brother's wife"),
          P('ਮਾਸੀ', 'maasi', "mother's sister"),
          P('ਮਾਸੜ', 'maasad', "mother's sister's husband", true)
        ]
      },
      {
        id: 'f5', level: 2, kind: 'phrase', icon: '🏠', title: 'Introduce your family',
        tip: 'Notice ਮੇਰਾ (meraa) with a brother, ਮੇਰੀ (meri) with a sister or mother. The word for "my" changes to match.',
        items: [
          P('ਇਹ ਮੇਰਾ ਭਰਾ ਹੈ', 'eh meraa bharaa hai', 'this is my brother'),
          P('ਇਹ ਮੇਰੀ ਭੈਣ ਹੈ', 'eh meri bhain hai', 'this is my sister'),
          P('ਇਹ ਮੇਰੀ ਮੰਮੀ ਹੈ', 'eh meri mummy hai', 'this is my mother'),
          P('ਇਹ ਮੇਰੇ ਪਾਪਾ ਹਨ', 'eh mere paapaa han', 'this is my father', false, 'For a parent or elder, Punjabi uses ਹਨ (han) instead of ਹੈ (hai) to show respect.'),
          P('ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਵਿੱਚ ਕੌਣ ਕੌਣ ਹੈ?', 'tuhaade parivaar vich kaun kaun hai?', 'who is in your family?', true),
          P('ਮੇਰੇ ਪਰਿਵਾਰ ਵਿੱਚ ਚਾਰ ਲੋਕ ਹਨ', 'mere parivaar vich chaar lok han', 'there are four people in my family', true)
        ],
        pairs: [[4, 5]]
      },
      {
        id: 'cp2', level: 2, kind: 'checkpoint', icon: '✓', title: 'Family checkpoint',
        from: ['f1', 'f2', 'f3', 'f4', 'f5'], count: 10
      },

      /* ---------------- Level 3: daily life ---------------- */
      {
        id: 'd1', level: 3, kind: 'word', icon: '🔢', title: 'Numbers 1 to 5',
        items: [
          N('ਇੱਕ', 'ikk', 'one', '1'),
          N('ਦੋ', 'do', 'two', '2'),
          N('ਤਿੰਨ', 'tinn', 'three', '3'),
          N('ਚਾਰ', 'chaar', 'four', '4'),
          N('ਪੰਜ', 'panj', 'five', '5')
        ]
      },
      {
        id: 'd2', level: 3, kind: 'word', icon: '🔟', title: 'Numbers 6 to 10',
        items: [
          N('ਛੇ', 'chhe', 'six', '6'),
          N('ਸੱਤ', 'satt', 'seven', '7'),
          N('ਅੱਠ', 'atth', 'eight', '8'),
          N('ਨੌਂ', 'nau', 'nine', '9'),
          N('ਦਸ', 'das', 'ten', '10')
        ]
      },
      {
        id: 'd3', level: 3, kind: 'word', icon: '📅', title: 'Days of the week',
        items: [
          P('ਸੋਮਵਾਰ', 'somvaar', 'Monday'),
          P('ਮੰਗਲਵਾਰ', 'mangalvaar', 'Tuesday'),
          P('ਬੁੱਧਵਾਰ', 'buddhvaar', 'Wednesday'),
          P('ਵੀਰਵਾਰ', 'veervaar', 'Thursday'),
          P('ਸ਼ੁੱਕਰਵਾਰ', 'shukkarvaar', 'Friday'),
          P('ਸ਼ਨੀਵਾਰ', 'shanivaar', 'Saturday'),
          P('ਐਤਵਾਰ', 'aitvaar', 'Sunday')
        ]
      },
      {
        id: 'd4', level: 3, kind: 'word', icon: '🥛', title: 'Food and drink words',
        items: [
          P('ਪਾਣੀ', 'paani', 'water'),
          P('ਚਾਹ', 'chaa', 'tea'),
          P('ਦੁੱਧ', 'duddh', 'milk'),
          P('ਚੌਲ', 'chaul', 'rice'),
          P('ਦਾਲ', 'daal', 'lentil soup'),
          P('ਰੋਟੀ', 'roti', 'flatbread')
        ]
      },
      {
        id: 'd5', level: 3, kind: 'phrase', icon: '🍽️', title: 'Hungry and thirsty',
        items: [
          P('ਮੈਨੂੰ ਭੁੱਖ ਲੱਗੀ ਹੈ', 'mainu bhukh laggi hai', 'I am hungry'),
          P('ਮੈਨੂੰ ਪਿਆਸ ਲੱਗੀ ਹੈ', 'mainu pyaas laggi hai', 'I am thirsty'),
          P('ਖਾਣਾ ਤਿਆਰ ਹੈ', 'khaanaa tayyaar hai', 'food is ready'),
          P('ਮੈਂ ਆ ਰਿਹਾ ਹਾਂ', 'main aa rihaa haan', "I'm coming", false, 'A woman says ਆ ਰਹੀ ਹਾਂ (aa rahi haan).'),
          P('ਚੱਲੋ ਖਾਈਏ', 'challo khaaiye', "let's eat"),
          P('ਮੈਨੂੰ ਪਾਣੀ ਚਾਹੀਦਾ ਹੈ', 'mainu paani chaahidaa hai', 'I would like some water')
        ],
        pairs: [[2, 3], [0, 4]]
      },
      {
        id: 'd6', level: 3, kind: 'phrase', icon: '😋', title: 'Enjoying the meal',
        tip: 'Punjabi hosts love to feed you. Expect to hear ਹੋਰ ਲਓ (hor lao), "have some more", more than once!',
        items: [
          P('ਥੋੜ੍ਹਾ ਹੋਰ', 'thodaa hor', 'a little more'),
          P('ਬਸ, ਸ਼ੁਕਰੀਆ', 'bas, shukriyaa', "that's enough, thank you"),
          P('ਇਹ ਬਹੁਤ ਸਵਾਦ ਹੈ', 'eh bahut savaad hai', 'this is very tasty'),
          P('ਤੁਸੀਂ ਖਾ ਲਿਆ?', 'tusi khaa liaa?', 'have you eaten?'),
          P('ਇਹ ਕੀ ਹੈ?', 'eh ki hai?', 'what is this?'),
          P('ਹੋਰ ਲਓ', 'hor lao', 'have some more')
        ],
        pairs: [[5, 1]]
      },
      {
        id: 'd7', level: 3, kind: 'phrase', icon: '🛍️', title: 'Shopping',
        items: [
          P('ਕਿੰਨੇ ਪੈਸੇ?', 'kinne paise?', 'how much is it?'),
          P('ਦਸ ਰੁਪਏ', 'das rupaye', 'ten rupees'),
          P('ਇਹ ਬਹੁਤ ਮਹਿੰਗਾ ਹੈ', 'eh bahut mehngaa hai', "it's too expensive"),
          P('ਥੋੜ੍ਹਾ ਘੱਟ ਕਰੋ', 'thodaa ghatt karo', 'please reduce it a little', true),
          P('ਮੈਨੂੰ ਇਹ ਚਾਹੀਦਾ ਹੈ', 'mainu eh chaahidaa hai', 'I want this'),
          P('ਕੋਈ ਹੋਰ ਦਿਖਾਓ', 'koi hor dikhaao', 'show me another one', true)
        ],
        pairs: [[0, 1]]
      },
      {
        id: 'd8', level: 3, kind: 'phrase', icon: '🧭', title: 'Getting around',
        items: [
          P('ਕਿੱਥੇ ਹੈ?', 'kitthe hai?', 'where is it?'),
          P('ਇੱਥੇ ਆਓ', 'itthe aao', 'come here'),
          P('ਸਿੱਧੇ ਜਾਓ', 'siddhe jaao', 'go straight'),
          P('ਖੱਬੇ ਪਾਸੇ', 'khabbe paase', 'on the left'),
          P('ਸੱਜੇ ਪਾਸੇ', 'sajje paase', 'on the right'),
          P('ਇੱਥੇ ਰੁਕੋ', 'itthe ruko', 'stop here', true)
        ]
      },
      {
        id: 'd9', level: 3, kind: 'phrase', icon: '😊', title: 'Feelings and reactions',
        items: [
          P('ਬਹੁਤ ਵਧੀਆ', 'bahut vadhiaa', 'very good'),
          P('ਮਜ਼ਾ ਆ ਗਿਆ', 'mazaa aa giaa', 'I had fun'),
          P('ਮੈਨੂੰ ਪਸੰਦ ਆਇਆ', 'mainu pasand aaiaa', 'I liked it'),
          P('ਫ਼ਿਕਰ ਨਾ ਕਰੋ', 'fikar naa karo', "don't worry"),
          P('ਵਾਹ!', 'vaah!', 'wow!')
        ]
      },
      {
        id: 'cp3', level: 3, kind: 'checkpoint', icon: '✓', title: 'Daily life checkpoint',
        from: ['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9'], count: 12
      },

      /* ---------------- Level 4: festivals, food and fun ---------------- */
      {
        id: 'e1', level: 4, kind: 'phrase', icon: '🎉', title: 'Festival wishes',
        tip: 'The ending ਵਧਾਈਆਂ (vadhaaiyaan) means "congratulations and good wishes". Put ਦੀਆਂ (diyaan) after a festival name, then add it.',
        items: [
          P('ਵਿਸਾਖੀ ਦੀਆਂ ਵਧਾਈਆਂ', 'visaakhi diyaan vadhaaiyaan', 'happy Vaisakhi'),
          P('ਲੋਹੜੀ ਦੀਆਂ ਵਧਾਈਆਂ', 'lohri diyaan vadhaaiyaan', 'happy Lohri'),
          P('ਦੀਵਾਲੀ ਦੀਆਂ ਵਧਾਈਆਂ', 'deewaali diyaan vadhaaiyaan', 'happy Diwali'),
          P('ਗੁਰਪੁਰਬ ਦੀਆਂ ਵਧਾਈਆਂ', 'gurpurab diyaan vadhaaiyaan', 'happy Gurpurab', true),
          P('ਜਨਮ ਦਿਨ ਮੁਬਾਰਕ', 'janam din mubaarak', 'happy birthday'),
          P('ਨਵਾਂ ਸਾਲ ਮੁਬਾਰਕ', 'navaan saal mubaarak', 'happy new year', true)
        ]
      },
      {
        id: 'e2', level: 4, kind: 'word', icon: '🔥', title: 'Lohri night',
        tip: 'Lohri, in mid-January, celebrates the winter harvest. Families gather around a bonfire and toss in peanuts, popcorn and sweets.',
        items: [
          P('ਲੋਹੜੀ', 'lohri', 'the winter bonfire festival'),
          P('ਅੱਗ', 'agg', 'fire'),
          P('ਮੂੰਗਫਲੀ', 'moongphali', 'peanuts'),
          P('ਮੱਕੀ ਦੇ ਫੁੱਲੇ', 'makki de phulle', 'popcorn', true),
          P('ਗੱਚਕ', 'gachak', 'sesame and jaggery sweet', true)
        ]
      },
      {
        id: 'e3', level: 4, kind: 'phrase', icon: '💃', title: 'Bhangra and giddha',
        tip: 'Bhangra is the high-energy harvest dance. Giddha is the lively folk dance traditionally danced by women. Both follow the beat of the dhol drum.',
        items: [
          P('ਭੰਗੜਾ', 'bhangraa', 'the harvest folk dance'),
          P('ਗਿੱਧਾ', 'giddhaa', "the women's folk dance"),
          P('ਢੋਲ', 'dhol', 'the big drum'),
          P('ਬੱਲੇ ਬੱਲੇ!', 'balle balle!', 'hurray! (a shout of joy)'),
          P('ਚੱਲੋ ਭੰਗੜਾ ਪਾਈਏ', 'challo bhangraa paaiye', "let's dance bhangra", true)
        ]
      },
      {
        id: 'e4', level: 4, kind: 'word', icon: '🍛', title: 'Langar and Punjabi food',
        tip: 'Langar is the free community meal served at every gurdwara. Everyone sits together and eats the same food, whoever they are.',
        items: [
          P('ਲੰਗਰ', 'langar', 'the free community meal'),
          P('ਗੁਰਦੁਆਰਾ', 'gurdwaaraa', 'the Sikh place of worship'),
          P('ਲੱਸੀ', 'lassi', 'yogurt drink'),
          P('ਸਰ੍ਹੋਂ ਦਾ ਸਾਗ', 'sarron daa saag', 'mustard greens dish', true),
          P('ਮੱਕੀ ਦੀ ਰੋਟੀ', 'makki di roti', 'cornmeal flatbread'),
          P('ਪਰਾਂਠਾ', 'paraunthaa', 'stuffed flatbread')
        ]
      },
      {
        id: 'cp4', level: 4, kind: 'checkpoint', icon: '✓', title: 'Festivals checkpoint',
        from: ['e1', 'e2', 'e3', 'e4'], count: 10
      }
    ]
  };
})();
