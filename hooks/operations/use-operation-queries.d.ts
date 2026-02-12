import { OperationEnvelope } from '../../types/oparations';
export declare const useOperation: () => import('@apollo/client').LazyQueryResultTuple<{
    operation: OperationEnvelope<unknown>;
}, import('@apollo/client').OperationVariables>;
