/**
 * This file contains all the public routes of the application
 *@type {string[]}
 *
 */
export const publicRoutes = ["/"];

/**
 * This file contains all the auth routes of the application
 *@type {string[]}
 *
 */
export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * This file contains all the api routes of the application
 *@type {string}
 *
 */
export const apiRoutesPrefix = "/api/auth";

/**
 * the default redirect path after login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
