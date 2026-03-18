export declare const CapacitiesTypeEnum: {
    readonly employee: "employee";
    readonly owner: "owner";
    readonly renter: "renter";
    readonly externalproxy: "externalproxy";
};
export type CapacitiesType = keyof typeof CapacitiesTypeEnum;
/**
 * Get the active capacity type (employee, owner, renter, externalproxy, etc.)
 */
export declare const getActiveCapacityType: () => CapacitiesType | undefined;
/**
 * Get a specific part of the capacity string
 */
export declare const getCapacityPart: (capacities: string, partIndex: number) => string[];
/**
 * Get a capacity by comparing a specific part of the capacity string
 */
export declare const getCapacityByPartCompare: (capacities: string, partIndex: number, compareValue: string) => string | undefined;
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
 * Get the owner capacity for a specific owner ID from a string of capacities.
 */
export declare const getOwnerCapacityByOwnerId: (capacities: string, ownerId: string) => string | undefined;
/** @deprecated Use `getOwnerCapacityByOwnerId` instead */
export declare const getOwnerCapacityOwnerId: (capacities: string, ownerId: string) => string | undefined;
/**
 * Get the owner capacity for a specific building ID from a string of capacities.
 */
export declare const getOwnerCapacityByBuildingId: (capacities: string, buildingId: string) => string | undefined;
/**
 * Get the owner capacity for a specific owner and building ID from a string of capacities.
 */
export declare const getOwnerCapacityByOwnerIdAndBuildingId: (capacities: string, ownerId: string, buildingId: string) => string | undefined;
/**
 * Get the owner capacity for a specific lot ID from a string of capacities.
 */
export declare const getOwnerCapacityByLotId: (capacities: string, lotId: string) => string | undefined;
