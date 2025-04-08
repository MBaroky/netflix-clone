
export const ErrorMessages = {
    NETWORK_ERROR: "Unable to connect to the server. Please try again later.",
    LOGIN_FAILED: "Invalid username or password. Please check and try again.",
};

export const GeneralStrings = {
    APP_NAME: "Netflix Clone V2",
    DESCRIPTION: 'A Netflix clone built with Next.js, TypeScript, and Tailwind CSS.',
    COPYRIGHT: `© ${new Date().getFullYear()} Netflix Clone. All rights reserved.`,
};


const prefix = GeneralStrings.APP_NAME.replace(/\s+/g, '-').toLowerCase();
export const LocalStorageKeys = {
    USER_TOKEN: "userToken",
    THEME_PREFERENCE: "themePreference",
    LANGUAGE: "language",
    CART_ITEMS: "cartItems",
    WATCH_HISTORY: "watchHistory",
    MUTED: `${prefix}-ismuted`,
    AUTH_PAGE:`${prefix}-authpage`,
  };