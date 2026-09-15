import { SpellcheckWorkerClient } from '../../../hooks/use-nspell';
import { Extension } from '@tiptap/core';
import { EditorState } from '@tiptap/pm/state';
export interface SpellcheckExtensionOptions {
    client: SpellcheckWorkerClient | null;
    enabled: boolean;
}
export interface MisspelledWord {
    from: number;
    to: number;
    word: string;
    suggestions?: string[];
}
interface ActiveSpellcheckSuggestion {
    from: number;
    to: number;
    word: string;
}
/** The word/range currently shown in the suggestion menu, if any, kept in
 * sync with live document positions as the user keeps typing. */
export declare const getActiveSpellcheckSuggestion: (state: EditorState) => ActiveSpellcheckSuggestion | null;
export declare const SpellcheckExtension: Extension<SpellcheckExtensionOptions, any>;
export {};
