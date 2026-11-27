/**
 * What the RichTextEditor and the TemplateEditor share about structural tags: the block
 * helpers whose markers are drawn as frames, and the classes of those frames.
 */
/** The marker that opens a block: `#if …`, `#unless …`, `#each …`, `#with …`. */
export declare const BLOCK_START: RegExp;
/** The marker that closes a block: `/if`, `/unless`, `/each`, `/with`. */
export declare const BLOCK_END: RegExp;
/** The marker between the two branches of a block: `else`, `else if …` or `^`. */
export declare const BLOCK_ELSE: RegExp;
/**
 * The classes of the frame drawn around a block, and of the chip drawn around an inline
 * block. Both editors use them, so a block looks the same in an editable region and in the
 * read-only part of a template. The `!` modifiers are needed because the css of a template
 * is not layered and would beat the utilities. The padding of the frame's body is left to
 * the user: a list frame needs a wider left padding for the bullets.
 */
export declare const STRUCTURAL_CLASSES: {
    readonly frame: "my-2! rounded-md! border! border-neutral-200";
    readonly header: "rounded-t-[calc(var(--radius-md)_-_1px)]! bg-neutral-200 px-3! pb-3! pt-1.5! text-sm font-medium text-neutral-900 select-none";
    readonly body: "relative -mt-1.5! min-h-8 rounded-b-[calc(var(--radius-md)_-_1px)]! rounded-t-sm! bg-control py-2!";
    readonly chip: "mx-0.5! inline-flex max-w-full items-stretch rounded-md! border! border-neutral-200 align-baseline";
    readonly chipLabel: "flex shrink-0 items-start rounded-l-[calc(var(--radius-md)_-_1px)]! bg-neutral-200 py-0.5! pl-3! pr-4.5! text-sm font-medium text-neutral-900 select-none";
    readonly chipBody: "relative -ml-1.5! block min-w-4 rounded-l-sm! rounded-r-[calc(var(--radius-md)_-_1px)]! bg-control px-3! py-0.5!";
    readonly chipElse: "mx-1! inline-block rounded-sm! bg-neutral-200 px-1.5! text-sm font-medium text-neutral-900";
};
