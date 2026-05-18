export type RouteParams = Record<string, string>;
/**
 * Extracts named path parameters from the current URL without requiring react-router-dom.
 * Designed for use inside externalized micro-frontend components where the host application owns the router.
 
 * @example
 * // URL: /preferences/ledger-accounts/42
 * const {id} = useExternalizedPathParams("/preferences/ledger-accounts/:id");
 * // id === "42"
 */
export declare const useExternalizedPathParams: (routePattern: string) => RouteParams;
/**
 * Reads and writes URL search parameters without requiring a react-router-dom
 * context. Designed for use inside externalized micro-frontend components where the host application owns the router.

 * @example
 * const [searchParams, setSearchParams] = useExternalizedSearchParams();
 *
 * // Read
 * const buildingId = searchParams.get("buildingId") ?? undefined;
 *
 * // Write — adds/updates "tab", leaves all other params untouched
 * setSearchParams({tab: "details"});
 *
 * // Delete — removes "tab" from the URL
 * setSearchParams({tab: undefined});
 */
export declare const useExternalizedSearchParams: () => readonly [URLSearchParams, (next: Record<string, string | undefined>) => void];
