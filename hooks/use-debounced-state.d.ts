interface UseDebouncedStateConfig {
    debounce?: number;
}
export declare const useDebouncedState: <T>(initialState: T, { debounce }?: UseDebouncedStateConfig) => readonly [T, (newValue: T) => void];
export {};
