import { TFunction } from '@/context/TranslationContext';
import { Item, Section } from '@/components/section/About';

export const getSections = (
  t: TFunction,
  experiences: Item[],
  education: Item[]
): Section[] => [
  { title: t('experience'), items: experiences },
  { title: t('education'), items: education },
];
