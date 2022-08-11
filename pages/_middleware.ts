import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { headers } = request;

  const country = headers.get("x-vercel-ip-country") || "US";

  const response = NextResponse.next();
  // set country `cookie` with options
  response.cookie("ip_location_dt", country, {
    path: "/",
    maxAge: 1000 * 60 * 60 * 24 * 7,
    sameSite: "lax",
    // domain: "deeptrekker.com",
  });

  return response;
}
