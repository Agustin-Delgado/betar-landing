import { NextResponse } from "next/server";

const PASSWORD = "3Dy15Ws5sfMY";

export async function POST(request: Request) {
  const { password } = await request.json();

  if (password === PASSWORD) {
    const response = NextResponse.json({ success: true }, { status: 200 });
    response.cookies.set("admin-auth", PASSWORD, { path: "/admin" });
    return response;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
