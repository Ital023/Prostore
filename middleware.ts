import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

// Ensure the middleware trusts the incoming Host header in local/dev setups.
// Auth.js throws UntrustedHost unless `trustHost` is true, or a recognized AUTH_URL/AUTH_TRUST_HOST env var exists.
export const { auth: middleware } = NextAuth({ ...authConfig, trustHost: true });
