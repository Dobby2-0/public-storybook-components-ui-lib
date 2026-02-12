import { default as NSpell } from 'nspell';
export type SpellcheckLanguage = "en" | "nl" | "fr";
export interface UseSpellcheckOptions {
    language: SpellcheckLanguage;
    enabled?: boolean;
}
export interface SpellcheckResult {
    isReady: boolean;
    spell: NSpell | null;
    suggest: (word: string) => string[];
}
export declare function useSpellcheck({ language, enabled, }: UseSpellcheckOptions): SpellcheckResult;
