import { ActionButton, ActionButtonFunction, Attachment } from '../types';
export declare const parseError: (error: unknown) => string | undefined;
export declare const resolveActionHandler: <T>(actionHandler: ActionButton<T> | undefined, actionHandlerFunction: ActionButtonFunction) => false | ((file: Attachment) => Promise<void>);
