interface ContentProps {
    /**
     * Path to `node_modules` directory where this library is installed.
     *
     * For monorepo's or other setups where the `node_modules` directory is not in the root of the project.
     */
    base?: string;
}
/**
 * Returns the path glob for the components of this library.
 */
export declare const content: ({ base }?: ContentProps) => string;
export {};
