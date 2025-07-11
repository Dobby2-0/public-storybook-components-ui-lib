/**
 * Get employee IDs from a string of capacities
 */
export declare const getEmployeeIdFromCapacity: (capacities: string) => string[];
/**
 * Get owner IDs from a string of capacities
 */
export declare const getOwnerIdsFromOwnerCapacities: (capacities: string) => string[];
/**
 * Get building IDs from a string of capacities
 */
export declare const getBuildingIdsFromOwnerCapacities: (capacities: string) => string[];
/**
 * Get lot IDs from a string of capacities
 */
export declare const getLotIdsFromOwnerCapacities: (capacities: string) => string[];
/**
 * Get the capacity for a specific building ID from a string of capacities.
 */
export declare const getOwnerCapacityByBuildingId: (capacities: string, buildingId: string) => string | undefined;
/**
 * Get the capacity for a specific lot ID from a string of capacities.
 */
export declare const getOwnerCapacityByLotId: (capacities: string, lotId: string) => string | undefined;
