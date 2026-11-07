import { router, Stack } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Icon } from '../../components/Icon';
import { Button, Card, EntryText } from '../../components/ui';
import { LEVELS, levelEntries } from '../../data/levels';
import { useSettings } from '../../lib/settings';
import { colors, fonts, radius } from '../../theme';

const ENTRIES = LEVELS.map((l) => ({ level: l, entries: levelEntries(l) }));

export default function LevelsScreen() {
  const { settings, update } = useSettings();
  const learned = new Set(settings.learned);
  const [open, setOpen] = useState<number | null>(null);
  const [shown, setShown] = useState<string | null>(null);

  const total = ENTRIES.reduce((n, x) => n + x.entries.length, 0);
  const done = ENTRIES.reduce((n, x) => n + x.entries.filter((e) => learned.has(e.id)).length, 0);
  // The first level that is not finished is the one to work on now.
  const current = ENTRIES.find((x) => x.entries.some((e) => !learned.has(e.id)))?.level.n ?? null;

  const toggle = (id: string) =>
    update({ learned: learned.has(id) ? settings.learned.filter((x) => x !== id) : [...settings.learned, id] });

  return (
    <ScrollView contentContainerStyle={s.page}>
      <Stack.Screen options={{ title: 'Dua levels' }} />

      <View style={s.hero}>
        <Text style={s.heroUrdu}>دعائیں سیکھیں — مرحلہ وار</Text>
        <Text style={s.heroText}>
          {done} of {total} learned
        </Text>
        <View style={s.track}>
          <View style={[s.fill, { width: `${Math.round((done / total) * 100)}%` }]} />
        </View>
        <Text style={s.heroSmall}>From one-word phrases to the longer Quranic duas. Only the Quran and sahih or hasan hadith.</Text>
      </View>

      {ENTRIES.map(({ level, entries }) => {
        const n = entries.filter((e) => learned.has(e.id)).length;
        const complete = n === entries.length;
        const isOpen = open === level.n || (open === null && current === level.n);
        return (
          <Card key={level.n} style={{ gap: 12 }}>
            <Pressable
              accessibilityRole="button"
              accessibilityState={{ expanded: isOpen }}
              onPress={() => setOpen(isOpen ? -1 : level.n)}
              style={s.levelHead}
            >
              <View style={[s.badge, complete && s.badgeDone]}>
                {complete ? <Icon name="check" size={18} color={colors.onInk} strokeWidth={3} /> : <Text style={s.badgeText}>{level.n}</Text>}
              </View>
              <View style={{ flex: 1, gap: 2 }}>
                <Text style={s.levelTitle}>
                  Level {level.n} · {level.title}
                </Text>
                <Text style={s.levelUrdu}>{level.urdu}</Text>
                <Text style={s.small}>
                  {n} of {entries.length} learned{current === level.n ? ' · learn these next' : ''}
                </Text>
              </View>
              <View style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }}>
                <Icon name="chevronRight" size={18} color={colors.textMuted} />
              </View>
            </Pressable>

            {isOpen ? (
              <View style={{ gap: 10 }}>
                <Text style={s.small}>{level.hint}</Text>
                {entries.map((e) => {
                  const isLearned = learned.has(e.id);
                  const expanded = shown === e.id;
                  return (
                    <View key={e.id} style={[s.item, isLearned && s.itemDone]}>
                      <View style={s.itemHead}>
                        <Pressable
                          accessibilityRole="checkbox"
                          accessibilityState={{ checked: isLearned }}
                          accessibilityLabel={`Mark "${e.title}" as learned`}
                          onPress={() => toggle(e.id)}
                          hitSlop={10}
                          style={[s.check, isLearned && s.checkOn]}
                        >
                          {isLearned ? <Icon name="check" size={14} color={colors.onInk} strokeWidth={3} /> : null}
                        </Pressable>
                        <Pressable accessibilityRole="button" onPress={() => setShown(expanded ? null : e.id)} style={{ flex: 1, gap: 2 }}>
                          <Text style={s.itemTitle}>{e.title}</Text>
                          <Text style={[s.preview, e.script === 'quran' && { fontFamily: fonts.quran }]} numberOfLines={expanded ? undefined : 1}>
                            {e.arabic}
                          </Text>
                        </Pressable>
                      </View>
                      {expanded ? (
                        <View style={{ gap: 10 }}>
                          <EntryText entry={e} arabicSize={e.arabic.length > 160 ? 22 : 26} />
                          <Button
                            label="Practise by memorising"
                            icon="refresh"
                            variant="outline"
                            onPress={() => router.push({ pathname: '/more/memorise', params: { entry: e.id } })}
                          />
                        </View>
                      ) : null}
                    </View>
                  );
                })}
              </View>
            ) : null}
          </Card>
        );
      })}

      <Text style={s.small}>
        Duas from viral posts that are weak or have no source are listed under More → Check a claim, with the authentic alternative.
        All content is pending scholar review.
      </Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { padding: 20, gap: 12, paddingBottom: 48 },
  hero: { backgroundColor: colors.ink, borderRadius: radius.xl, padding: 18, gap: 6 },
  heroUrdu: { fontFamily: fonts.urdu, fontSize: 20, lineHeight: 44, color: colors.onInk, textAlign: 'right', writingDirection: 'rtl' },
  heroText: { fontFamily: fonts.bold, fontSize: 18, color: colors.onInk },
  heroSmall: { fontFamily: fonts.regular, fontSize: 13, lineHeight: 18, color: colors.onInkMuted },
  track: { height: 8, borderRadius: 4, backgroundColor: 'rgba(250,246,236,0.2)', overflow: 'hidden' },
  fill: { height: 8, borderRadius: 4, backgroundColor: colors.onInkMuted },
  levelHead: { flexDirection: 'row', alignItems: 'center', gap: 12, minHeight: 48 },
  badge: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: colors.gold, alignItems: 'center', justifyContent: 'center' },
  badgeDone: { backgroundColor: colors.ink, borderColor: colors.ink },
  badgeText: { fontFamily: fonts.bold, fontSize: 17, color: colors.goldText },
  levelTitle: { fontFamily: fonts.semibold, fontSize: 16, color: colors.text },
  levelUrdu: { fontFamily: fonts.urdu, fontSize: 14, lineHeight: 30, color: colors.goldText, textAlign: 'left' },
  small: { fontFamily: fonts.regular, fontSize: 13, lineHeight: 19, color: colors.textMuted },
  item: { padding: 12, borderRadius: radius.md, backgroundColor: colors.background, gap: 10 },
  itemDone: { backgroundColor: colors.surfaceWarm },
  itemHead: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  check: { width: 26, height: 26, borderRadius: 13, borderWidth: 1.5, borderColor: '#C9BC9A', alignItems: 'center', justifyContent: 'center' },
  checkOn: { backgroundColor: colors.ink, borderColor: colors.ink },
  itemTitle: { fontFamily: fonts.semibold, fontSize: 14, color: colors.text },
  preview: { fontFamily: fonts.arabic, fontSize: 19, lineHeight: 34, color: colors.ink, textAlign: 'right', writingDirection: 'rtl' },
});
