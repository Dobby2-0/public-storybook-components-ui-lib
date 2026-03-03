import { OperationEnvelope } from '../../types/operations';
export declare const useOperationQuery: () => import('@apollo/client').LazyQueryResultTuple<{
    operation: OperationEnvelope<unknown>;
}, import('@apollo/client').OperationVariables>;
