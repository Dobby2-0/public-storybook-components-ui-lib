import { Extension } from '@tiptap/core';
import { default as NSpell } from 'nspell';
export interface SpellcheckExtensionOptions {
    spell: NSpell | null;
    enabled: boolean;
}
export interface MisspelledWord {
    from: number;
    to: number;
    word: string;
    suggestions?: string[];
}
export declare const SpellcheckExtension: Extension<SpellcheckExtensionOptions, any>;
