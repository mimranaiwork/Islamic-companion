/*
 * "Check a claim": a curated list of claims that circulate in viral posts, with
 * what the sources say. This is not AI-generated at runtime — every answer here
 * is written in advance and must be checked by a scholar before release.
 */
export type Verdict = 'authentic' | 'partly' | 'weak' | 'no-basis';

export type Claim = {
  id: string;
  claim: string;
  /** Extra words people use, to help search match. */
  keywords: string[];
  verdict: Verdict;
  answer: string;
  authentic?: string;
  sources: string;
};

export const VERDICT_LABEL: Record<Verdict, string> = {
  authentic: 'Authentic',
  partly: 'Partly authentic',
  weak: 'Weak narration',
  'no-basis': 'No reliable basis',
};

export const CLAIMS: Claim[] = [
  {
    id: 'yasin-wishes',
    claim: 'Surah Yasin fulfils all wishes',
    keywords: ['yaseen', 'yasin', 'یسین', 'یٰسین', 'wishes', 'needs', 'خواہشات', 'حاجات'],
    verdict: 'weak',
    answer: 'Narrations promising that Yasin fulfils needs or wishes are weak. "Fulfils all wishes" is not a reliable hadith.',
    authentic: 'Reciting any part of the Quran is rewarded, and Yasin is part of the Quran.',
    sources: 'Narrations in Ad-Darimi and others, graded weak by hadith scholars',
  },
  {
    id: 'yasin-heart',
    claim: 'Surah Yasin is the heart of the Quran',
    keywords: ['yaseen', 'yasin', 'heart', 'دل', 'قلب'],
    verdict: 'weak',
    answer: 'The narration "Everything has a heart, and the heart of the Quran is Yasin" is graded weak; At-Tirmidhi himself called it gharib.',
    sources: 'Tirmidhi 2887',
  },
  {
    id: 'fath-enemies',
    claim: 'Surah Al-Fath protects from enemies',
    keywords: ['fath', 'fatah', 'فتح', 'enemies', 'دشمن'],
    verdict: 'no-basis',
    answer: 'No reliable narration links Surah Al-Fath to protection from enemies.',
    authentic: 'The Prophet ﷺ said Surah Al-Fath was dearer to him than everything the sun rises upon.',
    sources: 'Sahih al-Bukhari 4177',
  },
  {
    id: 'tawbah-illness',
    claim: 'Surah At-Tawbah protects from illness',
    keywords: ['tawbah', 'taubah', 'tauba', 'توبہ', 'illness', 'disease', 'بیماری'],
    verdict: 'no-basis',
    answer: 'There is no narration giving Surah At-Tawbah this virtue.',
    authentic: 'The Quran as a whole is described as healing (shifa) for what is in the hearts (Quran 10:57, 17:82).',
    sources: 'Quran 10:57, 17:82',
  },
  {
    id: 'waqiah-poverty',
    claim: 'Reading Surah Al-Waqi\'ah every night prevents poverty',
    keywords: ['waqiah', 'waqia', 'واقعہ', 'poverty', 'rizq', 'rizk', 'رزق', 'فاقہ', 'wealth'],
    verdict: 'weak',
    answer: 'The narration "Whoever reads Al-Waqi\'ah every night will never be afflicted by poverty" is graded weak by most hadith scholars, including Imam Ahmad.',
    sources: 'Narrated by Ibn as-Sunni and Al-Bayhaqi; graded weak',
  },
  {
    id: 'mulk-grave',
    claim: 'Surah Al-Mulk saves from the punishment of the grave',
    keywords: ['mulk', 'tabarak', 'ملک', 'تبارک', 'grave', 'قبر'],
    verdict: 'authentic',
    answer: 'Supported. Surah Al-Mulk intercedes for its reciter until he is forgiven, and it is described as the protector from the punishment of the grave. The wording "lights up the grave" is not established.',
    sources: 'Tirmidhi 2891, Abu Dawud 1400 (hasan); An-Nasa\'i, al-Kubra (hasan)',
  },
  {
    id: 'sajdah-hereafter',
    claim: 'Surah As-Sajdah saves from punishment in the Hereafter',
    keywords: ['sajdah', 'sajda', 'سجدہ', 'alif lam meem', 'hereafter', 'آخرت'],
    verdict: 'partly',
    answer: 'The practice is authentic: the Prophet ﷺ would not sleep until he had recited As-Sajdah and Al-Mulk. The specific promise of saving from punishment in the Hereafter comes from weak narrations.',
    sources: 'Tirmidhi 2892',
  },
  {
    id: 'rahman-face',
    claim: 'Surah Ar-Rahman brings light (noor) to the face',
    keywords: ['rahman', 'رحمن', 'رحمٰن', 'noor', 'nur', 'face', 'چہرے', 'نور', 'bride', 'عروس'],
    verdict: 'no-basis',
    answer: 'There is no source for "brings light to the face". The narration calling Ar-Rahman "the bride of the Quran" is weak.',
    sources: 'Al-Bayhaqi, Shu\'ab al-Iman (weak)',
  },
  {
    id: 'kursi-after-salah',
    claim: 'Reading Ayat al-Kursi after every obligatory prayer — only death stands between you and Paradise',
    keywords: ['ayat al kursi', 'ayatul kursi', 'آیت الکرسی', 'after prayer', 'paradise', 'jannah', 'جنت'],
    verdict: 'authentic',
    answer: 'Graded authentic by several scholars: whoever recites Ayat al-Kursi after every obligatory prayer, nothing prevents him from entering Paradise except death.',
    sources: 'An-Nasa\'i, al-Kubra 9928 (graded sahih by Al-Albani)',
  },
  {
    id: 'china',
    claim: 'Seek knowledge even if it is in China',
    keywords: ['china', 'چین', 'knowledge', 'علم'],
    verdict: 'no-basis',
    answer: 'This is not a reliable hadith; scholars graded it fabricated or very weak.',
    authentic: 'Seeking knowledge is an obligation on every Muslim (Ibn Majah 224, graded sahih by Al-Albani).',
    sources: 'Ibn Majah 224 for the authentic wording',
  },
  {
    id: 'mother-feet',
    claim: 'Paradise lies under the feet of mothers',
    keywords: ['mother', 'ماں', 'feet', 'قدموں', 'paradise', 'jannah', 'جنت'],
    verdict: 'partly',
    answer: 'The famous wording is weak, but the meaning is authentic: a man asked about going to fight, and the Prophet ﷺ told him to stay with his mother, "for Paradise is at her feet."',
    sources: 'An-Nasa\'i 3104 (hasan)',
  },
  {
    id: 'forward-message',
    claim: 'Forward this message to 10 people or something bad will happen',
    keywords: ['forward', 'share', 'آگے', 'bad luck', 'chain', 'whatsapp', '10 people'],
    verdict: 'no-basis',
    answer: 'Chain messages that promise reward for forwarding, or threaten harm if you do not, have no basis in the Quran or Sunnah. Attributing such promises to the religion without evidence is a serious matter.',
    sources: 'Sahih al-Bukhari 110: "Whoever lies about me deliberately, let him take his seat in the Fire."',
  },
  {
    id: 'five-duas-after-fard',
    claim: 'These five duas after every obligatory prayer are guaranteed to be accepted',
    keywords: ['five duas', 'پانچ دعائیں', 'fard', 'فرض نماز', 'qurb', 'قرب', 'maqbooliyat', 'مقبولیت', 'guaranteed', 'ضمانت'],
    verdict: 'partly',
    answer: 'The duas themselves are authentic (Quran 2:201; Abu Dawud 1522; Muslim 2721, 2697, 2654), and dua after prayer is recommended. But no hadith guarantees acceptance for this particular set, or promises "success in both worlds" for reciting them.',
    authentic: 'They are all in the app: Duas → Levels 3 and 5.',
    sources: 'Quran 2:201; Abu Dawud 1522; Sahih Muslim 2721, 2697, 2654',
  },
  {
    id: 'bismillah-mashallah-child',
    claim: 'Say "Bismillah ma sha Allah la quwwata illa billah" on seeing your child and they will always be safe from the evil eye',
    keywords: ['nazar', 'نظر', 'evil eye', 'child', 'بچے', 'ma sha allah', 'ماشاء اللہ', 'bachon'],
    verdict: 'partly',
    answer: '"Ma sha Allah, la quwwata illa billah" is from the Quran (18:39), said on seeing a blessing. The added "Bismillah" form and the promise that the child will always be protected are not established.',
    authentic: 'Pray for blessing on what you admire (Ibn Majah 3509), and seek refuge for a child with: أُعِيذُكَ بِكَلِمَاتِ اللَّهِ التَّامَّةِ… (Sahih al-Bukhari 3371).',
    sources: 'Quran 18:39; Ibn Majah 3509; Sahih al-Bukhari 3371',
  },
  {
    id: 'madina-visit-dua',
    claim: 'The special dua for visiting Madinah: "Allahumma-rzuqni ziyarata nabiyyika… fi hadhal-‘ami wa fi kulli ‘am"',
    keywords: ['madina', 'madinah', 'مدینہ', 'ziyarat', 'زیارت', 'visit'],
    verdict: 'no-basis',
    answer: 'This wording is not narrated from the Prophet ﷺ in any hadith collection. You may ask Allah in your own words to let you visit Madinah — that is a personal dua, not a Sunnah wording.',
    authentic: 'Travelling to pray in the Prophet’s Mosque is one of the three journeys the Sunnah encourages (Sahih al-Bukhari 1189).',
    sources: 'Sahih al-Bukhari 1189',
  },
  {
    id: 'musabbib-asbab-wazifa',
    claim: 'Read "Ya Musabbib al-Asbab, sabbib li al-khayr" 33 times at Tahajjud for 21 days',
    keywords: ['musabbib', 'مسبب', 'asbab', 'اسباب', 'tahajjud', 'تہجد', 'wazifa', 'وظیفہ', '21', '33'],
    verdict: 'no-basis',
    answer: 'Neither this phrase nor the 33-times, 21-days routine comes from the Quran or Sunnah. "Musabbib al-Asbab" is not among Allah’s names given in the Quran or authentic hadith.',
    authentic: 'Waking at night is a time when dua is answered (Sahih al-Bukhari 1154) — use the authentic night dhikr in Level 5, then ask Allah in your own words.',
    sources: 'Sahih al-Bukhari 1154',
  },
  {
    id: 'naseeb-khul-jayega',
    claim: 'Reading Ya Wahhab, ya Allah, ya Musabbib al-Asbab, ya Raziq… wa huwa Hafiz ar-Raziqin 11 times after Maghrib opens your fortune',
    keywords: ['naseeb', 'نصیب', 'wahhab', 'وہاب', 'raziq', 'رازق', 'maghrib', 'مغرب', '11'],
    verdict: 'no-basis',
    answer: 'This formula, the 11-times count and the promise have no source in the Quran or Sunnah, and "Hafiz ar-Raziqin" is not a phrase found in the Quran. Calling on Allah by His names is good, but not with an invented routine and guaranteed result.',
    authentic: 'For provision, the Prophet ﷺ taught: اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ… (Tirmidhi 3563).',
    sources: 'Tirmidhi 3563',
  },
  {
    id: 'sayuhayyi-asbab',
    claim: 'Allah’s glad tiding: سيهيئ لك من الأسباب ما يجعلك تحدق في السماء دهشة',
    keywords: ['sayuhayyi', 'سيهيئ', 'asbab', 'اسباب', 'khushkhabri', 'خوشخبری', 'glad tidings', 'دهشة'],
    verdict: 'no-basis',
    answer: 'This sentence is not a verse of the Quran or a hadith, although it is written to look like one. It is a modern saying. Presenting it as Allah’s words is a serious mistake.',
    authentic: 'The Quran says: "So surely with hardship comes ease" (94:5–6), and "Whoever relies on Allah, He is sufficient for him" (65:3).',
    sources: 'Quran 94:5–6, 65:3',
  },
  {
    id: 'hasbi-seven-times',
    claim: 'Say "Hasbiyallahu la ilaha illa huwa…" seven times and all your worries are solved',
    keywords: ['hasbi', 'حسبی', 'seven', 'سات', '7', 'worries'],
    verdict: 'weak',
    answer: 'The words are a verse of the Quran (9:129). The promise for saying it seven times morning and evening comes from a narration of Abu ad-Darda that most scholars hold is his own saying, not the Prophet’s, or weak.',
    sources: 'Quran 9:129; Abu Dawud 5081 (mawquf/weak)',
  },
  {
    id: 'leaving-toilet-alhamdulillah',
    claim: 'The dua for leaving the toilet is "Alhamdulillahil-ladhi adhhaba ‘annil-adha wa ‘afani"',
    keywords: ['toilet', 'بیت الخلاء', 'khala', 'adha', 'الأذى', 'leaving'],
    verdict: 'weak',
    answer: 'This narration (Ibn Majah 301) is weak.',
    authentic: 'The authentic dua is غُفْرَانَكَ "Ghufranak" (Abu Dawud 30, Tirmidhi 7).',
    sources: 'Ibn Majah 301 (weak); Abu Dawud 30, Tirmidhi 7',
  },
  {
    id: 'bismillah-ala-barakatillah',
    claim: 'The dua before eating is "Bismillahi wa ‘ala barakatillah"',
    keywords: ['eating', 'کھانا', 'barakatillah', 'برکة', 'food'],
    verdict: 'partly',
    answer: 'The Sunnah is to say "Bismillah" (Sahih al-Bukhari 5376). The addition "wa ‘ala barakatillah" is not established in a sahih hadith.',
    sources: 'Sahih al-Bukhari 5376',
  },
  {
    id: 'after-eating-muslimin',
    claim: 'The dua after eating is "Alhamdulillahil-ladhi at‘amana wa saqana wa ja‘alana minal-muslimin"',
    keywords: ['after eating', 'کھانے کے بعد', 'saqana', 'سقانا', 'muslimin'],
    verdict: 'weak',
    answer: 'This narration (Abu Dawud 3850, Tirmidhi 3457) has a weak chain.',
    authentic: 'Authentic: الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ (Abu Dawud 4023, Tirmidhi 3458).',
    sources: 'Abu Dawud 4023, Tirmidhi 3458',
  },
];

const norm = (s: string) => s.toLowerCase().replace(/[ً-ٰٟ]/g, '').replace(/['’`-]/g, '');

export function searchClaims(q: string): Claim[] {
  const words = norm(q).split(/\s+/).filter((w) => w.length > 1);
  if (!words.length) return CLAIMS;
  return CLAIMS.map((c) => {
    const hay = norm([c.claim, ...c.keywords].join(' '));
    return { c, score: words.filter((w) => hay.includes(w)).length };
  })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.c);
}
