/**
 * Centralized pricing constants per region.
 * Update a region's pricing here and all city pages that reference it update automatically.
 */

export const CAIRNS_PRICING = {
  smallHourly: "$179/hr",
  largeHourly: "$189/hr",
  singleItemFrom: "$110",
  priceRange: "$179 - $359",
  teamSmall: "2-man team and truck",
  teamLarge: "2-3 removalists",
  minBooking: "2-hour",
};

/** Townsville mirrors Cairns pricing */
export const TOWNSVILLE_PRICING = CAIRNS_PRICING;
