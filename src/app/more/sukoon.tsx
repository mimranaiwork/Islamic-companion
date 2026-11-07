import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card, EntryText } from '../../components/ui';
import { findEntry } from '../../data/feelings';
import { SUKOON_CLOSING, SUKOON_INTRO, SUKOON_REMINDER, SUKOON_ROUTINE, SUKOON_SECTIONS } from '../../data/sukoon';
import { colors, fonts, radius } from '../../theme';

/** Urdu text block: Nastaliq needs a tall line height or letters get clipped. */
function U({ children, size = 15, color = colors.text, bold }: { children: string; size?: number; color?: string; bold?: boolean }) {
  return (
    <Text
      style={{
        fontFamily: fonts.urdu,
        fontSize: size,
        lineHeight: size * 2.3,
        color,
        textAlign: 'right',
        writingDirection: 'rtl',
        fontWeight: bold ? '600' : undefined,
      }}
    >
      {children}
    </Text>
  );
}

// Number the duas once, in the collection's order.
const NUMBERED = (() => {
  let n = 0;
  return SUKOON_SECTIONS.map((sec) => ({
    ...sec,
    entries: sec.ids.flatMap((id) => {
      const e = findEntry(id);
      return e ? [{ e, n: ++n }] : [];
    }),
  }));
})();

export default function SukoonScreen() {
  return (
    <ScrollView contentContainerStyle={s.page}>
      <Stack.Screen options={{ title: 'دل کا سکون' }} />

      <View style={s.hero}>
        <U size={22} color={colors.onInk}>غم، پریشانی اور دل کے سکون کی دعائیں</U>
        <U size={13} color={colors.onInkMuted}>قرآن و صحیح حدیث سے منتخب اذکار — عربی متن اور آسان اردو ترجمہ</U>
      </View>
      <U size={14} color={colors.textMuted}>{SUKOON_INTRO}</U>

      {NUMBERED.map((sec) => (
        <View key={sec.title} style={{ gap: 10 }}>
          <View style={s.sectionHead}>
            <U size={18} color={colors.goldText}>{sec.title}</U>
          </View>
          {sec.entries.map(({ e, n }) => {
            return (
              <Card key={e.id} style={{ gap: 8 }}>
                <View style={s.titleRow}>
                  <View style={s.num}>
                    <Text style={s.numText}>{n}</Text>
                  </View>
                  <Text style={s.title}>{e.title}</Text>
                </View>
                <EntryText entry={e} arabicSize={e.arabic.length > 200 ? 22 : 28} />
              </Card>
            );
          })}
          {sec.note ? (
            <View style={s.note}>
              {sec.note.split('\n\n').map((p, i) => (
                <U key={i} size={14}>{p}</U>
              ))}
            </View>
          ) : null}
        </View>
      ))}

      <View style={s.sectionHead}>
        <U size={18} color={colors.goldText}>روزانہ کا مختصر معمول</U>
      </View>
      <Card style={{ gap: 2 }}>
        {SUKOON_ROUTINE.map((r) => (
          <View key={r} style={s.bulletRow}>
            <View style={{ flex: 1 }}>
              <U size={14}>{r}</U>
            </View>
            <View style={s.bullet} />
          </View>
        ))}
      </Card>

      <View style={s.reminder}>
        <U size={16} bold>ایک ضروری یاددہانی</U>
        <U size={14}>{SUKOON_REMINDER}</U>
      </View>

      <U size={16} color={colors.ink}>{SUKOON_CLOSING}</U>
      <Text style={s.small}>Quran text from Tanzil.net. Translations and references are pending scholar review.</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { padding: 20, gap: 14, paddingBottom: 48 },
  hero: { backgroundColor: colors.ink, borderRadius: radius.xl, padding: 18, gap: 2 },
  sectionHead: { borderBottomWidth: 1, borderBottomColor: colors.border, marginTop: 6 },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  num: { width: 28, height: 28, borderRadius: 14, backgroundColor: colors.highlight, alignItems: 'center', justifyContent: 'center' },
  numText: { fontFamily: fonts.bold, fontSize: 13, color: colors.goldText },
  title: { flex: 1, fontFamily: fonts.semibold, fontSize: 15, color: colors.text },
  note: { padding: 14, borderRadius: radius.md, backgroundColor: colors.surfaceWarm, gap: 6 },
  bulletRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
  bullet: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.gold, marginTop: 16 },
  reminder: { padding: 16, borderRadius: radius.lg, borderWidth: 1.5, borderColor: colors.gold, backgroundColor: colors.surface, gap: 4 },
  small: { fontFamily: fonts.regular, fontSize: 12, color: colors.textMuted, textAlign: 'center' },
});
