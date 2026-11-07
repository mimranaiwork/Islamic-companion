import { QURAN } from './quran.generated';
import type { Dua } from './types';

/*
 * "Duas for grief, worry and peace of heart" — from the user's collection
 * (duain_sukoon_urdu_arabic.docx). Quran text comes from Tanzil; Urdu is the
 * collection's own translation; English is a plain-meaning draft. Pending review.
 */

const q = (e: Omit<Dua, 'count' | 'reviewed' | 'script' | 'grade' | 'category'>): Dua => ({
  ...e,
  category: 'sukoon',
  script: 'quran',
  grade: 'Quran',
  count: 1,
  reviewed: false,
});

export const SUKOON_DUAS: Dua[] = [
  q({
    id: 'ayyub',
    title: 'Dua of Ayyub — in pain or hardship',
    arabic: QURAN.ayyub.text,
    transliteration: 'Anni massaniyad-durru wa anta arhamur-rahimin',
    urdu: 'مجھے تکلیف پہنچی ہے اور تو سب رحم کرنے والوں سے بڑھ کر رحم کرنے والا ہے۔',
    english: 'Harm has touched me, and You are the Most Merciful of the merciful.',
    source: 'Quran 21:83',
  }),
  q({
    id: 'hasbunallah',
    title: 'Allah is sufficient for us',
    arabic: QURAN.hasbunallah.text,
    transliteration: "Hasbunallahu wa ni'mal-wakil",
    urdu: 'اللہ ہمارے لیے کافی ہے اور وہ بہترین کارساز ہے۔',
    english: 'Allah is sufficient for us, and He is the best Disposer of affairs.',
    source: 'Quran 3:173',
  }),
  q({
    id: 'kalla-inna-maiya',
    title: 'My Lord is with me',
    arabic: QURAN['kalla-inna-maiya'].text,
    transliteration: 'Kalla, inna ma‘iya rabbi sayahdin',
    urdu: 'ہرگز نہیں! یقیناً میرا رب میرے ساتھ ہے، وہ ضرور مجھے راستہ دکھائے گا۔',
    english: 'Not at all! My Lord is with me; He will guide me.',
    source: 'Quran 26:62',
  }),
  q({
    id: 'la-taqnatu',
    title: "Do not despair of Allah's mercy",
    arabic: QURAN['la-taqnatu'].text,
    transliteration: 'La taqnatu min rahmatillah',
    urdu: 'اللہ کی رحمت سے مایوس نہ ہو۔',
    english: 'Do not despair of the mercy of Allah.',
    virtue: 'Part of the ayah; the full ayah gives hope of repentance and forgiveness: Allah forgives all sins.',
    source: 'Quran 39:53',
  }),
  q({
    id: 'maal-usri-yusra',
    title: 'With hardship comes ease',
    arabic: QURAN['maal-usri-yusra'].text,
    transliteration: "Fa inna ma'al-'usri yusra, inna ma'al-'usri yusra",
    urdu: 'پس بے شک مشکل کے ساتھ آسانی ہے، یقیناً مشکل کے ساتھ آسانی ہے۔',
    english: 'So surely with hardship comes ease. Surely with hardship comes ease.',
    source: 'Quran 94:5–6',
  }),
  q({
    id: 'yaqub',
    title: "Ya'qub's words — telling Allah your grief",
    arabic: QURAN.yaqub.text,
    transliteration: 'Innama ashku baththi wa huzni ilallah',
    urdu: 'میں اپنی بے قراری اور اپنا غم صرف اللہ کے سامنے بیان کرتا ہوں۔',
    english: 'I only complain of my anguish and my grief to Allah.',
    virtue: 'These are the words of Ya‘qub in the Quran rather than a dua; you can also speak to Allah in your own words.',
    source: 'Quran 12:86',
  }),
];

/** The collection's sections, in its order. Ids refer to SUKOON_DUAS, DUAS or ADHKAR. */
export const SUKOON_SECTIONS: { title: string; ids: string[]; note?: string }[] = [
  { title: 'پریشانی اور غم کے وقت', ids: ['hamm-hazan', 'yunus', 'ayyub'] },
  { title: 'توکل، امید اور راستہ کھلنے کے لیے', ids: ['hasbunallah', 'kalla-inna-maiya', 'la-taqnatu', 'maal-usri-yusra'] },
  { title: 'غم کو اللہ کے سامنے بیان کرنے کے لیے', ids: ['yaqub'] },
  {
    title: 'غصے کے وقت کیا کریں؟',
    ids: ['anger'],
    note: 'عملی قدم: غصہ آئے تو فوراً بحث، فون، پیغام یا سفر کا فیصلہ نہ کریں۔ جس شخص پر غصہ ہے اس سے فاصلہ رکھیں، بیٹھ جائیں یا لیٹ جائیں، وضو کر لیں، اور خود کو ٹھنڈا ہونے کا وقت دیں۔ کسی کو نقصان پہنچانے کا اندیشہ ہو تو فوراً ایمرجنسی مدد لیں۔',
  },
  {
    title: 'سونے سے پہلے',
    ids: ['ayat-al-kursi', 'al-ikhlas', 'al-falaq', 'an-nas'],
    note: 'سونے سے پہلے آیت الکرسی پڑھیں (صحیح بخاری 2311)۔ سورۃ الاخلاص، الفلق اور الناس پڑھ کر دونوں ہاتھوں پر ہلکا دم کریں اور جہاں تک ممکن ہو جسم پر پھیر لیں (صحیح بخاری 5017)۔\n\nاگر نیند کی دوا لی ہے تو صرف ڈاکٹر کی ہدایت کے مطابق لیں۔ اضافی خوراک نہ لیں، الکحل یا دوسری نیند آور دوا کے ساتھ نہ ملائیں۔ اگر مقررہ مقدار سے زیادہ لے لی ہو یا غیر معمولی غنودگی/سانس میں دقت ہو تو فوراً طبی مدد لیں۔',
  },
];

export const SUKOON_INTRO =
  'یہ مجموعہ مشکل وقت، غم، خوف، غصے اور سونے سے پہلے پڑھنے کے لیے ترتیب دیا گیا ہے۔ اسے آہستہ آہستہ سمجھ کر پڑھیں؛ کوئی غیر ثابت شدہ مخصوص تعداد لازم نہ سمجھیں۔';

export const SUKOON_ROUTINE = [
  'فجر یا دن کے آغاز میں: غم و فکر سے پناہ کی دعا اور «حسبنا اللہ» سمجھ کر پڑھیں۔',
  'غصہ یا انتقام کا خیال آئے: غصے کی دعا پڑھیں، متعلقہ لوگوں سے رابطہ نہ کریں، اور ماحول سے دور ہو جائیں۔',
  'دل بہت بھاری ہو: حضرت یونسؑ یا حضرت ایوبؑ کی دعا پڑھیں اور اللہ سے اپنے الفاظ میں بات کریں۔',
  'سونے سے پہلے: آیت الکرسی اور تین قل پڑھیں۔',
];

export const SUKOON_REMINDER =
  'دعائیں دل کو سہارا دیتی ہیں، مگر شدید بے خوابی، مسلسل غصہ، بلڈ پریشر کا بڑھنا یا کسی کو/خود کو نقصان پہنچانے کے خیالات ہوں تو ڈاکٹر یا ذہنی صحت کے ماہر سے جلد بالمشافہ مدد لینا بھی ضروری ہے۔ توکل کے ساتھ علاج اور محفوظ عملی قدم اختیار کرنا بھی درست ہے۔';

export const SUKOON_CLOSING = 'اللہ تعالیٰ آپ کے دل کو سکون، آپ کے معاملات میں آسانی، اور آپ کے لیے خیر کے دروازے کھولے۔ آمین۔';
