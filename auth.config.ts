import { NextResponse } from "next/server";
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  providers: [],
  callbacks: {
    authorized({ request, auth }: any) {
      // Check for session cart cookie
      if (!request.cookies.get("sessionCartId")) {
        const sessionCartId = crypto.randomUUID();

        const newRequestHeaders = new Headers(request.headers);

        const response = NextResponse.next({
          request: {
            headers: newRequestHeaders,
          },
        });

        response.cookies.set("sessionCartId", sessionCartId);

        return response;
      } else {
        return true;
      }
    },
  },
} satisfies NextAuthConfig;
