import { SpellcheckWorkerClient } from '../../../hooks/use-nspell';
import { Extension } from '@tiptap/core';
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
export declare const SpellcheckExtension: Extension<SpellcheckExtensionOptions, any>;
