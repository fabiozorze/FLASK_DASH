import { defaultTheme } from './themes/default';

// Helper to create media queries from breakpoints
export const media = {
    xs: `@media (min-width: ${defaultTheme.breakpoints.xs})`,
    sm: `@media (min-width: ${defaultTheme.breakpoints.sm})`,
    md: `@media (min-width: ${defaultTheme.breakpoints.md})`,
    lg: `@media (min-width: ${defaultTheme.breakpoints.lg})`,
    xl: `@media (min-width: ${defaultTheme.breakpoints.xl})`,
    xxl: `@media (min-width: ${defaultTheme.breakpoints.xxl})`,
};

// Alternative: Max-width queries (for desktop-first approach)
export const mediaMax = {
    xs: `@media (max-width: ${defaultTheme.breakpoints.xs})`,
    sm: `@media (max-width: ${defaultTheme.breakpoints.sm})`,
    md: `@media (max-width: ${defaultTheme.breakpoints.md})`,
    lg: `@media (max-width: ${defaultTheme.breakpoints.lg})`,
    xl: `@media (max-width: ${defaultTheme.breakpoints.xl})`,
    xxl: `@media (max-width: ${defaultTheme.breakpoints.xxl})`,
};