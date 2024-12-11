import { NextRequest, NextResponse, userAgent } from "next/server";

export function middleware(request: NextRequest) {
  let alertShow = false;
  const url = request.nextUrl;
  const { device, browser } = userAgent(request);
  if (browser.name === "Chrome") {
    alertShow = true;
  }
  const viewport = device.type === "mobile" ? "mobile" : "desktop";
  url.searchParams.set("viewport", viewport);
  url.searchParams.set("alertShow", alertShow ? "true" : "false");
  return NextResponse.rewrite(url);
}
