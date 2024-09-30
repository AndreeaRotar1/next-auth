/**
 * An array of routes that are not accessible to the public
 * These routes require authentication
 */

export const privateRoutes = ['/dashboard', '/dashboard/profile']

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /dashboard
 */

export const authRoutes = ['/auth/signin', '/auth/register']

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 */
export const apiAuthPrefix = '/api/auth'

/**
 * The default redirect path after logging in
 */
export const DEFAULT_LOGIN_REDIRECT = '/dashboard'

/**
 * The signin page
 */
export const LOGIN_ROUTE = '/auth/signin'
