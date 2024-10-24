type Device = "mobile" | "tablet" | "laptop";

export const deviceBreakpoint: Record<Device, number> = {
    mobile: 600,
    tablet: 900,
    laptop: 1200
};

export const mediaQuery = {
    mobile: `@media screen and (max-width: ${deviceBreakpoint.mobile}px)`,
    tablet: `@media screen and (min-width: ${deviceBreakpoint.mobile}px) and (max-width: ${deviceBreakpoint.laptop}px)`,
    laptop: `@media screen and (min-width: ${deviceBreakpoint.tablet}px)`,
};