import { findEntry } from './feelings';
import type { Entry } from './types';

/**
 * A learning path from the shortest phrases to the longest duas. Each level
 * mixes new duas with ones already in the app; inside a level, duas are
 * ordered from fewest to most words.
 */
export type Level = { n: number; title: string; urdu: string; hint: string; ids: string[] };

export const LEVELS: Level[] = [
  {
    n: 1,
    title: 'First words',
    urdu: 'پہلا قدم — مختصر کلمات',
    hint: 'One to five words. Say them through the day.',
    ids: ['ghufranak', 'bismillah-eating', 'istighfar', 'la-hawla', 'hasbunallah', 'inna-lillah', 'ma-sha-allah', 'ya-hayyu'],
  },
  {
    n: 2,
    title: 'Everyday duas',
    urdu: 'روزمرہ کی دعائیں',
    hint: 'Sleeping, waking, the mosque, eating and drinking.',
    ids: ['before-sleep', 'on-waking', 'toilet-enter', 'mosque-enter', 'mosque-exit', 'milk', 'after-eating', 'allah-rabbi', 'musa-faqir', 'ishrah-li'],
  },
  {
    n: 3,
    title: 'Short comprehensive duas',
    urdu: 'مختصر جامع دعائیں',
    hint: 'Short duas that ask for the whole of this life and the next — good after every prayer.',
    ids: ['rabbana-atina', 'taqabbal-minna', 'yunus', 'ighfir-li', 'huda-tuqa', 'musarrif', 'gratitude', 'kifni-halal', 'musibah'],
  },
  {
    n: 4,
    title: 'Protection and hardship',
    urdu: 'حفاظت اور مشکل کے وقت',
    hint: 'Refuge from harm, protecting children, ruqyah for the sick, trust in hard times.',
    ids: ['allahu-latif', 'hasbiya-allah', 'ayyub', 'jahd-al-bala', 'uidhuka', 'jibril-ruqyah', 'hamm-hazan', 'karb'],
  },
  {
    n: 5,
    title: 'Longer Quranic duas and the night',
    urdu: 'قرآنی دعائیں اور رات کا ذکر',
    hint: 'The longer duas of the prophets and believers, and the dhikr for waking at night.',
    ids: ['la-tuzigh', 'zalamna', 'qurrata-ayun', 'fa-ghfir-lana', 'night-waking', 'baqarah-285-286'],
  },
];

const words = (e: Entry) => e.arabic.replace(/﴿[^﴾]*﴾/g, '').trim().split(/\s+/).length;

/** A level's duas, shortest first. Unknown ids are skipped. */
export function levelEntries(level: Level): Entry[] {
  return level.ids
    .map((id) => findEntry(id))
    .filter((e): e is Entry => !!e)
    .sort((a, b) => words(a) - words(b));
}
