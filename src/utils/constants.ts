
export const errorMessages: { [key: string]: string } = {
    CredentialsSignin: "Invalid username or password.",
    OAuthSignin: "Error during OAuth sign-in.",
    OAuthCallback: "An issue occurred during OAuth callback.",
    EmailSignin: "Email sign-in failed.",
    EmptyInput: "Please fill in all required fields.",

    // Registeration
    DuplicateUser:"User already exists.",

    // Default error message
    default: "An unknown error occurred. Please try again.",
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