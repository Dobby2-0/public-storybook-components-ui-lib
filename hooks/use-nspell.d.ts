export type SpellcheckLanguage = "en" | "nl" | "fr";
export interface UseSpellcheckOptions {
    language: SpellcheckLanguage;
    enabled?: boolean;
}
export interface SpellcheckWorkerClient {
    check: (nodes: {
        text: string;
        pos: number;
    }[]) => Promise<{
        word: string;
        from: number;
        to: number;
    }[]>;
    suggest: (word: string) => Promise<string[]>;
    terminate: () => void;
}
export interface SpellcheckResult {
    isReady: boolean;
    client: SpellcheckWorkerClient | null;
}
export declare function useSpellcheck({ language, enabled, }: UseSpellcheckOptions): SpellcheckResult;
